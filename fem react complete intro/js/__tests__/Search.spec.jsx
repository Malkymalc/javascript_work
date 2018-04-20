// One test file for each component / file.

// Jest is just Jasmine under the hood.

import React from 'react';

// renderer allows us to render out our components and test them
// without having a DOM underneath them.
// enzyme uses renderer under the hood, and so we can't
// import renderer at the same time.
// import renderer from 'react-test-renderer';

// { renderer, static } are also available - they go deeper,
// but are much slower.
// static uses cheerio under the hood.
// Stick to { shallow } where possible.
import { shallow } from 'enzyme';

import Search from '../Search';

test('Search renders correctly', () => {
   // shallow renders the component without fully 'fleshing out'/
   // rendering any child componets, and just shows child components
   // as placeholders, with the props they are being passed (the props
   // the child components are passed being a part of the functionality of the parent component).
   const component = shallow(<Search />);
   expect(component).toMatchSnapshot();

   // const component = renderer.create(<Search />);
   // const tree = component.toJSON();

   // Snapshot works a bit like version control (git/github) -
   // - it takes a picture of the output from the component
   // being rendered the first time the test is run, and
   // will fail on subsequent tests if the output has changed,
   // showing you the changes a la github.
   // You can make Jest take a new 'canonical' snapshot by
   // appending -u to the Jest run in the command line.

   // Is there - as an addition/compliment - snapshot-style
   // functionality, but with browser rendering of component
   // vs command line output of JSON of component. This would
   // perhaps not include the inner workings of the component,
   // but would show styling changes.

   // These Jest snapshots should be checked into git.
   // expect(tree).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
   const component = shallow(<Search />);
   expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search term', () => {

});







// // @flow
//
// import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { shallow, render } from 'enzyme';
// import Search, { Unwrapped as UnwrappedSearch } from '../Search';
// import store from '../store';
// import { setSearchTerm } from '../actionCreators';
// import preload from '../../data.json';
// import ShowCard from '../ShowCard';
//
// test('Search renders correctly', () => {
//   const component = shallow(<UnwrappedSearch searchTerm="" shows={preload.shows} />);
//   expect(component).toMatchSnapshot();
// });
//
// test('Search should render correct amount of shows', () => {
//   const component = shallow(<UnwrappedSearch searchTerm="" shows={preload.shows} />);
//   expect(preload.shows.length).toEqual(component.find(ShowCard).length);
// });
//
// test('Search should render correct amount of shows based on search', () => {
//   const searchWord = 'New York';
//   store.dispatch(setSearchTerm(searchWord));
//   const component = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Search shows={preload.shows} />
//       </MemoryRouter>
//     </Provider>
//   );
//   const showCount = preload.shows.filter(show =>
//     `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())
//   ).length;
//   expect(showCount).toEqual(component.find('.show-card').length);
// });
