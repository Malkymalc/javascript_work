import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// This is now a seperate file that is responsible
// soley for rendering the top level component, <App />
// to the browser (implementing the app in the browser).

// This is the place to put any browser-only code,
// e.g. Google Analytics.

// The rest of the React app is now abstracted from
// the client implementation.

// We encapsulate the render method in a function,
// as it may be called multiple times.
const renderApp = () => {
   render(
      <BrowserRouter>
         <App />
      </BrowserRouter>,
      document.getElementById('app'));
}

// standard render
renderApp();

// render if (in development) hot.module is in place
// if so, accept any new versions of <App /> it provides
// and re-render the entire <App />.
if (module.hot){
   module.hot.accept('./App', () => {
      renderApp();
   });
};

// // the core react library
// import React from 'react';
// // the dom 'flavoured' react render package
// import {render} from 'react-dom';
//
// // + 'react-router-dom' is the dom 'flavoured' react router package.
//
// // + If using BrowserRouter vs HashRouter, in webpack.config add
// // "historyApiFallback: true" inside devServer.
// // - this tells the browser to pass all 404s back to index.html,
// // where they will hit the BrowserRouter component and be rendered
// // by the matching Route component.
// // - Brower Router, with Link etc makes the address bar 'behave'
// // normally.
// // - it is also ** much, much more SEO friendly **.
// // - makes deep linking better, cleaner, better looking urls, more
// // engagement from users.
//
// // + The Switch component tells BrowserRouter to render exactly,
// // and only one component.
// // - <Route>s are looked at / chosen from top to bottom, and
// // the first matching <Route> is chosen.
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // Any top level components we will be injecting into the dom,
// // inside the <App /> component.
// import Landing from './Landing';
// import Search from './Search';
//
//
// // A quite and dirty 404 component.
// const FourOhFour = function FourOhFour(){
//    return (
//       <h1>Page Not Found</h1>
//    );
// };
//
// // This factory function is a react component -
// // it will be referenced as <App />
// // It returns other react components and dom elements,
// // which themselves have their own factory functions
// // which return dom elements and react components
// const App = function App(){
//    return (
//       // The top level component is <HashRouter>
//       // This is a **higher-order component**, a component that
//       // encapsulates behaviour but doesn't necessarily render
//       // markup itself.
//       <BrowserRouter>
//          {/* then the placeholder <div> */}
//          <div className="app">
//             {/* Switch sets BrowserRouter to choose only one <Route> */}
//             <Switch>
//                {/* ...then the routes, detailing as attributes/props
//                   - the path for which they are responsible for
//                - the components they render for that path */}
//                <Route exact path='/' component={Landing} />
//                <Route path="/search" component={Search} />
//                <Route component={FourOhFour} />
//             </Switch>
//          </div>
//       </BrowserRouter>
//    );
// };
//
// // Here we render/inject the placeholder component (<App />)
// // to the index.html page, using render() of 'react-dom'
// render(<App />, document.getElementById('app'));






// @flow
// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
//
// const renderApp = () => {
//   render(
//     <BrowserRouter key={Math.random()}>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app')
//   );
// };
// renderApp();
//
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp();
//   });
// }
