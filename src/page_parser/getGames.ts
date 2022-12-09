import { IncomingMessage } from 'http';
import https from 'https';

export function getGames(url: string): Promise<string> {
  const games = new Promise<string>((resolve, reject) => {
    function callback(res: IncomingMessage) {
      let str = '';
      res.on('data', (chunk) => {
        str += chunk;
      });
      res.on('error', (err) => reject(err));
      res.on('end', () => resolve(str));
    }
    https.get(url, callback).end();
  });

  return games;
}
