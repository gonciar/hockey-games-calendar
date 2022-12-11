import { Match } from '../types';

export function getCurrentOrNextWeekendRange(): [number, number] {
  const today = new Date();
  const currentDay = today.getDay();

  const daysUntilSat = currentDay === 0 ? -1 : 6 - currentDay;
  const startOfSat = new Date(today);
  startOfSat.setDate(today.getDate() + daysUntilSat);
  startOfSat.setHours(0, 0, 1);

  const endOfSun = new Date(startOfSat);
  endOfSun.setDate(startOfSat.getDate() + 1);
  endOfSun.setHours(23, 59, 59);

  return [startOfSat.getTime(), endOfSun.getTime()];
}

export function filterOnlyNextWeekend(matches: Match[]) {
  const [nextWeekendStart, nextWeekendEnd] = getCurrentOrNextWeekendRange();
  return matches.filter((match) => {
    const matchTime = match.date.getTime();
    if (Number.isNaN(matchTime)) {
      return false;
    }
    if (matchTime < nextWeekendStart || matchTime > nextWeekendEnd) {
      return false;
    }
    return true;
  });
}
