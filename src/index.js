import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './counter';

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



const update = () => {
  ReactDOM.render(
    <Counter 
      counter={store.getState()} 
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }} />, 
    document.getElementById('root'));
}

update();
store.subscribe(update);

