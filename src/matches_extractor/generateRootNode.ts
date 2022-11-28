import { parse, HTMLElement } from 'node-html-parser';
import { Match } from 'src/types';

export function makeSeasonHeader(content: string): string {
  return `<div class="header-font mt-2 mb-1 s-16 font-weight-bold bg-primary text-white text-center rounded px-2 py-2">${content}</div>`;
}

export function makeDayHeader(content: string): string {
  return `<div class="header-font mt-2 mb-1 s-14 font-weight-bold bg-primary text-white rounded px-2 py-1">${content}</div>
  <div class="header-font my-1 s-14 font-weight-bold rounded px-2 py-1" style="background: #eee !important;">Kolejka 1</div>`;
}

export function makeGameCards(matches: Match[]): string {
  return matches.map(makeGameCard).join('');
}

export function makeGameCard(match: Match): string {
  const matchTime = `${match.date.getHours()}:${match.date.getMinutes()}`;
  return `
  <div class="card my-1 py-1 px-2">

    <div class="d-none d-sm-block">
        <div class="d-flex justify-content-between">
            
            <div class="text-left text-muted align-self-center text-center" style="width: 10%">
                                    <span class="text-muted">
                        <i class="far fa-clock"></i> ${matchTime}
                    </span>
                            </div>

            <div style="width: 55%;">
                <a href="${match.link}">

                    <div class="d-flex mr-2">
                        <div class="d-block">
                            <div class="d-flex justify-content-start mb-2">
    
                                <div class="align-self-center text-center" style="width: 50px;">
                                    <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/clubs/7eb43263d5a8ca0918f9d031acab849b.png" class="align-middle" style="max-height: 25px; max-width: 45px;">
                                </div>
                                <div class="align-self-center">
                                    <span class="s-14">${match.teamA.name}</span>
                                </div>
    
                            </div>
                            <div class="d-flex justify-content-start mt-2">
    
                                <div class="align-self-center text-center" style="width: 50px;">
                                    <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/clubs/28829f65cd5aa88fc8128a0e3e55080f.png" class="align-middle" style="max-height: 25px; max-width: 45px;">
                                </div>
                                <div class="align-self-center">
                                    <span class="s-14">${match.teamB.name}</span>
                                </div>
    
                            </div>
                        </div>
                        <div class="d-block ml-auto text-right align-self-center pr-1">
                                                        <div class="d-flex justify-content-end mb-2">
                                -
                            </div>
                            <div class="d-flex justify-content-end mt-1">
                                -
                            </div>
                                                    </div>
                    </div>

                </a>
            </div>
            <div class="text-center align-self-center" style="width: 35%">
    
                    
                
                <a href="${match.link}" class="d-inline-block mt-1 btn btn-sm btn-light mt-0 px-3 mr-1 border">
                    <i class="fas fa-angle-double-right"></i>
                </a>
            </div>
        </div>
    </div>

<a href="${match.link}">
    <div class="d-block d-sm-none">
        <div class="d-flex">
            <div class="d-block">
                <div class="d-flex justify-content-start mb-2">

                    <div class="align-self-center text-center" style="width: 50px;">
                        <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/clubs/7eb43263d5a8ca0918f9d031acab849b.png" class="align-middle" style="max-height: 25px; max-width: 45px;">
                    </div>
                    <div class="align-self-center">
                        <span class="s-14">${match.teamA.name}</span>
                    </div>

                </div>
                <div class="d-flex justify-content-start mt-2">

                    <div class="align-self-center text-center" style="width: 50px;">
                        <img src="https://dfdu1vke3eg77.cloudfront.net/spaces/97/img/clubs/28829f65cd5aa88fc8128a0e3e55080f.png" class="align-middle" style="max-height: 25px; max-width: 45px;">
                    </div>
                    <div class="align-self-center">
                        <span class="s-14">${match.teamB.name}</span>
                    </div>

                </div>
            </div>
            <div class="d-block ml-auto text-right align-self-center pr-1">
                                <span class="s-16 text-muted">${matchTime}</span>
                            </div>
        </div>
                <div class="d-block text-center pt-1">
            
                    </div>
            </div>
</a>
        
</div>`;
}

export function getTableRootNode(gamesContent: string): HTMLElement {
  const wrapped = `<div class="mx-auto" style="max-width: 860px;">${gamesContent}</div>`;
  const root = parse(wrapped);
  return root;
}
