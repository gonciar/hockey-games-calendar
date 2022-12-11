import { Match } from '../types';
import { expectArrayEquivalence } from '../../utils/testUtils';
import { filterMatches } from './filterMatches';

describe('filters matches', () => {
  it('removes matches with invalid date', () => {
    const mockMatches: Match[] = [
      {
        date: new Date(''),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date('2022.12.11 15:30'),
        teamA: { name: 'CAPITALS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22110',
      },
    ];
    const teams = ['CAPITALS', 'TORPEDA'];
    const matches = filterMatches(mockMatches, teams);
    expectArrayEquivalence([mockMatches[1]], matches);
  });
  it('removes matches with unwanted teams', () => {
    const mockMatches: Match[] = [
      {
        date: new Date('2022.34.34 13:30'),
        teamA: { name: 'KINGS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22100',
      },
      {
        date: new Date('2022.12.11 15:30'),
        teamA: { name: 'CAPITALS' },
        teamB: { name: 'TORPEDA' },
        link: 'https://polskihokej.com/games/22110',
      },
    ];
    const teams = ['CAPITALS', 'TORPEDA'];
    const matches = filterMatches(mockMatches, teams);
    expectArrayEquivalence([mockMatches[1]], matches);
  });
});
