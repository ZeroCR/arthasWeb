import { observable, toJS, extendObservable } from 'mobx';
// import mergeObservables from '../helpers/mergeObservables';

// Default state structure
const defaultState = observable({
  app: {
    title: 'Mobx Isomorphic Starter 3',
    description: 'Here goes description',
    host: '',
  },
  browse: {
    data: '',
  },
});

// Export function that creates our server tate
export const createServerState = () => toJS(defaultState);

// Export function that creates our client state
export const createClientState = (state) => extendObservable(defaultState, state);

