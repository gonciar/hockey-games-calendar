import { Match } from 'src/types';
import { expectArrayEquivalence } from '../../utils/testUtils';
import { extractMatches } from './extractMatches';
import {
  getTableRootNode,
  makeDayHeader,
  makeGameCards,
  makeSeasonHeader,
} from './generateRootNode';

describe('extract matches', () => {
  it('extracts all matches from single date', () => {
    const mockMatches: Match[] = [
      {
        date: new Date('2022.12.11 13:30'),
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
    const content = `
    ${makeSeasonHeader('3 LIGA: Sezon Zasadniczy')}
    ${makeDayHeader('niedziela, 11.12.2022')}
    ${makeGameCards(mockMatches)}
    `;
    const root = getTableRootNode(content);
    const matches = extractMatches(root);
    expectArrayEquivalence(mockMatches, matches);
  });

  it('extracts matches and groups them in days', () => {
    const mockMatches: Match[][] = [
      [
        {
          date: new Date('2022.12.10 13:30'),
          teamA: { name: 'KINGS' },
          teamB: { name: 'TORPEDA' },
          link: 'https://polskihokej.com/games/22100',
        },
        {
          date: new Date('2022.12.10 15:30'),
          teamA: { name: 'CAPITALS' },
          teamB: { name: 'TORPEDA' },
          link: 'https://polskihokej.com/games/22110',
        },
      ],
      [
        {
          date: new Date('2022.12.11 13:30'),
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
      ],
      [
        {
          date: new Date('2022.12.17 13:30'),
          teamA: { name: 'KINGS' },
          teamB: { name: 'TORPEDA' },
          link: 'https://polskihokej.com/games/22100',
        },
        {
          date: new Date('2022.12.17 15:30'),
          teamA: { name: 'CAPITALS' },
          teamB: { name: 'TORPEDA' },
          link: 'https://polskihokej.com/games/22110',
        },
      ],
    ];
    const content = `
    ${makeSeasonHeader('3 LIGA: Sezon Zasadniczy')}
    ${makeDayHeader('sobota, 10.12.2022')}
    ${makeGameCards(mockMatches[0])}
    ${makeDayHeader('niedziela, 11.12.2022')}
    ${makeGameCards(mockMatches[1])}
    ${makeDayHeader('sobota, 17.12.2022')}
    ${makeGameCards(mockMatches[2])}
    `;
    const root = getTableRootNode(content);
    const matches = extractMatches(root);
    expectArrayEquivalence(matches, [
      ...mockMatches[0],
      ...mockMatches[1],
      ...mockMatches[2],
    ]);
  });
  // it('reports error on broken schema', () => {

  // })
  // it('does not crash on zero matches', () => {

  // })
  // it('skips cancelled matches', () => {

  // })
  // it('can handle multiple seasons', () => {

  // })

  // TODO:
  // it('filters past events', () => {

  // })
  // it('filters rural teams', () => {

  // })
});
