/*
 *
 * InfoPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS(
  {
    tableau: {
      author: 'BACKER, Jacob Adriaensz.',
      borndied: '(b. 1608, Harlingen, d. 1651, Amsterdam)',
      title: 'Portrait of an Old Woman',
      date: '-',
      technique: 'Oil on wood, 71 x 61 cm',
      location: 'Metropolitan Museum of Art, New York',
      src: 'http:\/\/www.wga.hu\/detail\/b\/backer\/port_old.jpg',
      form: 'painting',
      type: 'portrait',
      school: 'Dutch',
      timeline: '1601-1650',
    },
    reco: [
      {
        author: 'BACKER, Jacob Adriaensz.',
        borndied: '(b. 1608, Harlingen, d. 1651, Amsterdam)',
        title: 'Portrait of an Old Woman',
        date: '-',
        technique: 'Oil on wood, 71 x 61 cm',
        location: 'Metropolitan Museum of Art, New York',
        src: 'http:\/\/www.wga.hu\/html\/b\/backer\/port_old.html',
        form: 'painting',
        type: 'portrait',
        school: 'Dutch',
        timeline: '1601-1650',
      },
    ],
  }

//   {
//   details: {
//     title: 'la Joconde',
//     author: 'Leonardo da Vinci',
//     imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg/225px-Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg',
//   },
// }
);

function infoPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default infoPageReducer;
