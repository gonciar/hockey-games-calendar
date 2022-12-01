import { extractMatches } from './matches_extractor';
import { extractTableNode, getGames } from './page_parser';

async function main() {
  const website = await getGames();
  const tableNode = extractTableNode(website);
  const matches = extractMatches(tableNode);
  console.log(matches);
}

main();
