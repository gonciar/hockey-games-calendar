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

function containsAll(element: HTMLElement, classes: string[]) {
  for (let i = 0; i < classes.length; i++) {
    if (!element.classList.contains(classes[i])) {
      return false;
    }
  }
  return true;
}

function isCard(element: HTMLElement) {
  return containsAll(element, ['card', 'my-1', 'py-1', 'px-2']);
}

function isDate(element: HTMLElement) {
  return containsAll(element, [
    'header-font',
    'mt-2',
    'mb-1',
    's-14',
    'font-weight-bold',
    'bg-primary',
    'text-white',
    'rounded',
    'px-2',
    'py-1',
  ]);
}

function extractDate(innerText: string) {
  // date has format: "sobota, 21.12.2022"
  // expected output: 2022.12.21
  return innerText.split(', ')[1].split('.').reverse().join('.');
}

export function extractMatches(gamesRoot: HTMLElement): Match[] {
  // get first element in container
  let currentElementHandle = gamesRoot.querySelector(
    'div.header-font.mt-2.mb-1.s-16.font-weight-bold.bg-primary.text-white.text-center.rounded.px-2.py-2',
  );
  let date: string;
  const matches: Match[] = [];
  while (currentElementHandle !== null) {
    if (isDate(currentElementHandle)) {
      date = extractDate(currentElementHandle.innerText);
    } else if (isCard(currentElementHandle)) {
      matches.push(parseCard(currentElementHandle, date));
    }
    currentElementHandle = currentElementHandle.nextElementSibling;
  }

  return matches;
}
