import { Match } from '../types';

export function filterMatches(matches: Match[], teams: string[]) {
  return matches.filter((match) => {
    if (Number.isNaN(match.date.getTime())) {
      return false;
    }
    if (
      !teams.includes(match.teamA.name) &&
      !teams.includes(match.teamB.name)
    ) {
      return false;
    }
    return true;
  });
}
