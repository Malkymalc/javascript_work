import React from 'react';
import { render } from 'react-dom';
/* eslint-disable react/prop-types */
const MyTitle = function MyTitle(props){
  // return React.createElement('div', null,
  //   React.createElement('h1', { style: {color: props.color} }, props.title)
  // )
  return (
    
  );
}

const MyFirstComponent = function MyFirstComponent() {
  return React.createElement('div', {id: 'my-first-component' },

    React.createElement(MyTitle, {title: 'Game of Thrones', color: 'DodgerBlue'}),
    React.createElement(MyTitle, {title: 'lightgoldenrodyellow', color: 'lightgoldenrodyellow'}),
    React.createElement(MyTitle, {title: 'palegoldenrod', color: 'palegoldenrodyellow'}),
    React.createElement(MyTitle, {title: 'goldenrod', color: 'goldenrod'}),
    React.createElement(MyTitle, {title: 'lightgoldenrod', color: 'lightgoldenrod'}),
    React.createElement(MyTitle, {title: 'darkgoldenrod', color: 'darkgoldenrod'}),
    React.createElement(MyTitle, {title: 'chartreuse', color: 'chartreuse'}),
    React.createElement(MyTitle, {title: 'deepskyblue', color: 'deepskyblue'}),
    React.createElement(MyTitle, {title: 'burleywood', color: 'burlywood'}),
    React.createElement(MyTitle, {title: 'gainsboro', color: 'gainsboro'}),
    React.createElement(MyTitle, {title: 'dimgrey', color: 'dimgrey'}),
    React.createElement(MyTitle, {title: 'flesh', color: 'flesh'}),
    React.createElement(MyTitle, {title: 'mistyrose', color: 'mistyrose'}),
    React.createElement(MyTitle, {title: 'brick', color: 'brick'}),
    React.createElement(MyTitle, {title: 'firebrick', color: 'firebrick'}),
    React.createElement(MyTitle, {title: 'mediumspringgreen', color: 'mediumspringgreen'})
  )
}

render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
)










// // @flow
//
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
