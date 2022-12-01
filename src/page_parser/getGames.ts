import { IncomingMessage } from 'http';
import https from 'https';

export function getGames(): Promise<string> {
  const games = new Promise<string>((resolve, reject) => {
    function callback(res: IncomingMessage) {
      let str = '';
      res.on('data', (chunk) => {
        str += chunk;
      });
      res.on('error', (err) => reject(err));
      res.on('end', () => resolve(str));
    }
    https
      .get(
        'https://polskihokej.eu/games/schedule/3-liga-mazowiecka/8',
        callback,
      )
      .end();
  });

  return games;
}
