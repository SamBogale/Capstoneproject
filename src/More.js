import { lowerCase } from 'lodash';

function buildLinks(links){
    var i = 0;
    var linkList = '' ;
    var destination = '';

    while(i < links.length){
        // if(links[i] !== 'Home'){
        
        destination = lowerCase(links[i]);
      

        linkList += `
          <li>
            <a data-navigo href="./${destination}">
              ${links[i]}
            </a>

          </li>
        `;

        i++;
    }

    return linkList;
}

export default function More(state){
    console.log(state);
    return `
      <ul class="container">
        ${buildLinks(state.default.links)}
      </ul>
  `;
}
