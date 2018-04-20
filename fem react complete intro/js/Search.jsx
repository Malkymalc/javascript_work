import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// To make a ** stateful ** Component, we use create an ES6 class
// that extends the reat Component class:
 // MyComponent extends Component {};

// The class must contain a constuctor() method and a render() method.
// The constructor must contain super(props), and the state object for (and only for!) the component.
   // constructor (props){
      //    super(props)
      //    this.state = {
      //       searchTerm: 'this is some sort of debug statement',
      //    }
   // }
   // It also must include a render method, into which we can pass the
   // return (**markup**) statement.

class Search extends Component {
   // A component's state object should always be called 'state'.
   state = {
      searchTerm: ''
   }
   // Do not modify state directly - use this.setState()
   handleSearchTermChange = event => {
      this.setState({ searchTerm: event.target.value });
   }
   render() {
      return (
         <div className="search">
            <header>
               <h1>svideo</h1>
               <input
                  onChange={ this.handleSearchTermChange }
                  value={ this.state.searchTerm }
                  type="text"
                  placeholder="search"
               />
            </header>
            {/* This is a nice little hack to print out to the dom
               the contents of some imported data in a semi-formated form.
            <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}

            {/* React can handle arrays of (JSX) elements.
               ShowCard pulls out info from any given show object it is passed, and sticks it into some elements.
            */}

            {/* We can de-structure the show *object* in JSX by using:
               { preload.shows.map( show => <ShowCard { ...show } />) }
               This elimanates the need need for  e.g 'props.show.title',
               and we can instead reference all of shows keys straight from
               props e.g. props.title.
               Here we are not passing a prop called show (no use of assignment),
               but instead throwing through all the show object's properties straight
            onto the props object. */}

            {/* Unique Identifiers: when creating multiple instances of a react component,
               e.g. using enumeration/map(), we should specify a 'key' prop for each element
               that can act as a **unique identifier** . For example, a user's email, or here the imdbID number.
               This helps react to re-render lists of components more efficiently, for example
               if this list is updated dynamically, or sorted or filtered by user interaction.
            + The key attribute/prop is only accessible by react - you cannont access it from the props object, or in any other way*/}
            <div>
               { preload.shows
                  .filter(show =>
                     `${show.title} ${show.description}`
                     .toUpperCase()
                     .indexOf(this.state.searchTerm.toUpperCase()) >= 0
                  )
                  .map( show => <ShowCard key={ show.imdbID } show={ show } />)
               }
            </div>
         </div>
      );
   };
};

export default Search;










// // @flow
//
// import React from 'react';
// import { connect } from 'react-redux';
// import ShowCard from './ShowCard';
// import Header from './Header';
//
// const Search = (props: {
//   searchTerm: string, // eslint-disable-line react/no-unused-prop-types
//   shows: Array<Show>
// }) => (
//   <div className="search">
//     <Header showSearch />
//     <div>
//       {props.shows
//         .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
//         .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
//     </div>
//   </div>
// );
//
// const mapStateToProps = state => ({
//   searchTerm: state.searchTerm
// });
//
// export const Unwrapped = Search;
// export default connect(mapStateToProps)(Search);
