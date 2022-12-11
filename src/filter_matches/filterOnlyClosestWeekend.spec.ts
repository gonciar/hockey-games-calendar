import { expectArrayEquivalence } from '../../utils/testUtils';
import { Match } from '../types';
import {
  filterOnlyNextWeekend,
  getCurrentOrNextWeekendRange,
} from './filterOnlyClosestWeekend';

describe('filters events for the closest weekend', () => {
  it('detects weekends properly', () => {
    const weekendRanges = [12, 13, 14, 15, 16, 17, 18].map((day) => {
      const date = new Date(`2022.12.${day} 6:30:01`);
      jest.useFakeTimers().setSystemTime(date.getTime());
      return getCurrentOrNextWeekendRange();
    });
    weekendRanges.forEach((range) => {
      expectArrayEquivalence(range, [1671231601000, 1671404399000]);
    });
  });
  it('filters out events not from next weekend', () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2022.12.13 6:30:01').getTime());

    const bad: Match[] = [
      {
        date: new Date('2022.12.11 15:30'),
        teamA: { name: 'CAPITALS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22110',
      },
      {
        date: new Date('2022.12.16 23:30'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date(''),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date('2022.12.19 00:01'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
    ];
    const good: Match[] = [
      {
        date: new Date('2022.12.17 01:30'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date('2022.12.18 01:30'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date('2022.12.18 23:59'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
    ];
    const filtered = filterOnlyNextWeekend([...good, ...bad]);
    expectArrayEquivalence(filtered, good);
  });
});
