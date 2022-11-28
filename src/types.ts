export interface Team {
  name: string;
}

export interface Match {
  date: Date;
  teamA: Team;
  teamB: Team;
  link?: string;
}
