import { Match } from '../src/types';

export function printMatch(match: Match) {
  // request a weekday along with a long date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Warsaw',
    hour: '2-digit',
    minute: '2-digit',
  };
  const dateTime = match.date.toLocaleTimeString('pl-PL', options);
  return `${match.teamA.name} vs. ${match.teamB.name} (${dateTime}) location: unknown ${match.link}`;
}
