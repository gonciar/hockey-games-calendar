import { HTMLElement } from 'node-html-parser';
import { Match } from 'src/types';

function parseCard(cardNode: HTMLElement, date: string): Match {
  const time = cardNode.querySelector(
    'div.text-left.text-muted.align-self-center.text-center>span.text-muted',
  ).rawText;
  // There are multiple links, but it seems that they are equal
  const gameLink = cardNode.querySelector('a');

  const teams = cardNode.querySelectorAll(
    'div.d-none.d-sm-block a div.align-self-center>span.s-14',
  );
  const match: Match = {
    date: new Date(`${date} ${time}`),
    teamA: { name: teams[0].rawText },
    teamB: { name: teams[1].rawText },
    link: gameLink.getAttribute('href') || undefined,
  };
  return match;
}

export function extractMatches(gamesRoot: HTMLElement): Match[] {
  const dateHeader = gamesRoot.querySelector(
    'div.header-font.mt-2.mb-1.s-14.font-weight-bold.bg-primary.text-white.rounded.px-2.py-1',
  );
  const date = dateHeader.innerText.split(', ')[1];
  const cards = gamesRoot.querySelectorAll('div.card.my-1.py-1.px-2');
  const matches = cards.map((card) => parseCard(card, date));

  return matches;
}
