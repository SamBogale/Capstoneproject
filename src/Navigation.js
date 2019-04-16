import { lowerCase } from 'lodash';
import More from './More';

import * as moreState  from '../state/More'


function buildLinks(links){
    var i = 0;
    var linkList = '' ;
    var destination = '';

    while(i < links.length){
        if(links[i] !== 'Home'){
            destination = lowerCase(links[i]);
        }

        linkList += `
          <li>
            <a data-navigo href="./${destination}">
              ${links[i]}
            </a>`;
            console.log(destination);
        if(destination === 'more') {
          linkList += `${More(moreState)}`;
          console.log(moreState);
        }
        linkList += `
          </li>
        `;

        i++;
    }

    return linkList;
}

export default function Navigation(state){
    return `
    <div id="navigation">
      <ul class="container">
        ${buildLinks(state[state.active].links)}
      </ul>
      <div class="cont_us"><button class="btn" type="button">Contact Us</button></div>
            </div>
            
  `;
}
