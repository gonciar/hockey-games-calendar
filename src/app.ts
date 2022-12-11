import { printMatch } from '../utils/printMatch';
import {
  filterMatches as filterTeams,
  filterOnlyNextWeekend,
} from './filter_matches';
import { extractMatches } from './matches_extractor';
import { extractTableNode, getGames } from './page_parser';

const teams = ['KINGS', 'CAPITALS II', 'TORPEDA', 'HUSARIA'];

async function getMatches(url: string) {
  const website = await getGames(url);
  const tableNode = extractTableNode(website);
  const matches = extractMatches(tableNode);
  const wawMatches = filterTeams(matches, teams);
  const nextWeekend = filterOnlyNextWeekend(wawMatches);
  return nextWeekend;
}

async function printMatches() {
  const l3url = 'https://polskihokej.eu/games/schedule/3-liga-mazowiecka/8';
  const l2url = 'https://polskihokej.eu/games/schedule/2-liga-finaly/64';
  const matches = await Promise.all([getMatches(l3url), getMatches(l2url)]);
  console.log([...matches[0], ...matches[1]].map(printMatch));
}

printMatches();
