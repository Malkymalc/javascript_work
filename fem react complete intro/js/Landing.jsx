import React from 'react';
// Link acts as a react-router internal <a> tag
// - it takes a to='' attribute that specifies the relative route
// to point the browser at.
// - This in turn activates the respective Route specified in App.js

// <Link> transpiles to an <a> so all behaviour and apperance
// will still be that of an <a> tag.

// Using Links and Route make the site more accessible/usable.
import { Link } from 'react-router-dom';

const Landing = function Landing(){
   return (
      <div className="landing">
         <h1>svideo</h1>
         <input type="text" placeholder="Search" />
         <Link to='/search'>or Browse All</Link>
      </div>
   );
};

export default Landing;




// // @flow
//
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { RouterHistory } from 'react-router-dom';
// import { object } from 'prop-types';
// import { setSearchTerm } from './actionCreators';
//
// class Landing extends React.Component {
//   static contextTypes = {
//     history: object
//   };
//   props: {
//     searchTerm: string,
//     handleSearchTermChange: Function,
//     history: RouterHistory
//   };
//   goToSearch = event => {
//     event.preventDefault();
//     this.props.history.push('/search');
//   };
//   render() {
//     return (
//       <div className="landing">
//         <h1>svideo</h1>
//         <form onSubmit={this.goToSearch}>
//           <input
//             onChange={this.props.handleSearchTermChange}
//             value={this.props.searchTerm}
//             type="text"
//             placeholder="Search"
//           />
//         </form>
//         <Link to="/search">or Browse All</Link>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => ({
//   searchTerm: state.searchTerm
// });
//
// const mapDispatchToProps = (dispatch: Function) => ({
//   handleSearchTermChange(event) {
//     dispatch(setSearchTerm(event.target.value));
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
