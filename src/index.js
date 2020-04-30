import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
//import { inc, dec, rnd } from './actions';
import * as actions from './actions';

const store = createStore(reducer);

const { dispatch } = store;

/* const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
  incDispatch: inc,
  decDispatch: dec,
  rndDispatch: rnd
}, dispatch); */

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(update);