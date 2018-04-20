import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import our data (could be pulled from APIs also)
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
   posts,
   comments,
};
// A store has a rootReducer, which is how we interact
// with the store, and a defaultState which is the starting
// state of the store.
// createStore(interface, state)

// The store object has the following methods:

//============  1.  dispatch()  ============//
// a. dispatch() takes an action object (the return value of an action creator) as // it's argument e.g. dispatch({type: ADD_LIKE, index: 2}) .
// b. dispatch() causes the store to call all of the actionReducers in the rootReducer object (the store is a composition of the rootReducer and default state, and the rootReducer object in turn, is a composition of all the action reducers).
// c. the actionReducers all take in current state and the action info, and return the new state.
// d. Our reducer's (or the rootReducer) therefore need some kind
// of logic to decide which actionReducer(s) will apply the action data against the state (change the state), or just return state.

//2.  getState()
//3. replaceReducer()
//4.  subscribe()

const store = createStore(rootReducer, defaultState);

// This creates our app's history objecr, which is
// a react-router browserHistory object mashed with our
// redux store.
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
