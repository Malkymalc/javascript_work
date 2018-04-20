import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

// import preload from '../data.json';

const FourOhFour = function FourOhFour(){
   return (
      <h1>Page Not Found</h1>
   );
};
/* eslint react/prop-types: 0 */
const App = function App(){
   return (
      <div className="app">
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/details/:id" component={Details}/>
            <Route component={FourOhFour} />
         </Switch>
      </div>
   );
};

   export default App;
   // // @flow
//
// import React from 'react';
// import { Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import type { Match } from 'react-router-dom';
// import AsyncRoute from './AsyncRoute';
// import store from './store';
// import preload from '../data.json';
//
// const App = () => (
//   <Provider store={store}>
//     <div className="app">
//       <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />
//       <Route
//         path="/search"
//         component={props => (
//           <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
//         )}
//       />
//       <Route
//         path="/details/:id"
//         component={(props: { match: Match }) => {
//           const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
//           return (
//             <AsyncRoute
//               loadingPromise={import('./Details')}
//               props={Object.assign({ show: selectedShow, match: {} }, props)}
//             />
//           );
//         }}
//       />
//     </div>
//   </Provider>
// );
//
// export default App;
