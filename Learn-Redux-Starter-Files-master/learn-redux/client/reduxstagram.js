// let's go!
// When there's no path, it's from node_modules
// / listed in package.jsom as a dependency.
import React from 'react';
import { render }  from 'react-dom';

// Import CSS
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Provider is a method to bind react to redux.
// Redux itself stands alone and doesn't necissarily be used
// with React.
import { Provider } from 'react-redux';
//
import store, { history } from './store';


// Nested routes:
// 1. Any match to '/' then router will pass the
// {App} component.

// 2a. This App component will then have as * props.children * // either the {PhotoGrid} component (as default)...

//Or if the url matches '/view/:something', the {Single} component, and 'something' as props.params.postId .

const router = (
   <Provider store={store}>
      <Router history={history}>
         <Route path='/' component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
         </Route>
      </Router>
   </Provider>
)

render(router, document.getElementById('root'));
