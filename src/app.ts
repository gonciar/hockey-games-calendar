import { filterMatches as filterTeams } from './filter_matches';
import { extractMatches } from './matches_extractor';
import { extractTableNode, getGames } from './page_parser';

async function getMatches(url: string) {
  const website = await getGames(url);
  const tableNode = extractTableNode(website);
  const matches = extractMatches(tableNode);
  const wawMatches = filterTeams(matches);
  return wawMatches;
}

console.log(
  getMatches('https://polskihokej.eu/games/schedule/3-liga-mazowiecka/8'),
);
console.log(
  getMatches('https://polskihokej.eu/games/schedule/2-liga-finaly/64'),
);
