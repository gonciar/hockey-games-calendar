import { extractMatches } from './matches_extractor';
import { extractTableNode, getGames } from './page_parser';

async function getMatches(url: string) {
  const website = await getGames(url);
  const tableNode = extractTableNode(website);
  const matches = extractMatches(tableNode);
  return matches;
}

console.log(
  getMatches('https://polskihokej.eu/games/schedule/3-liga-mazowiecka/8'),
);
console.log(
  getMatches('https://polskihokej.eu/games/schedule/2-liga-finaly/64'),
);
