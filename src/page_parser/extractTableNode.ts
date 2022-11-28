import { parse } from 'node-html-parser';

export function extractTableNode(webpage: string) {
  const root = parse(webpage);
  // TODO: use smarter selector
  const timeTableRoot = root.querySelector(
    'h2.section-header.mt-0.pt-1+div.mx-auto',
  );
  return timeTableRoot;
}
