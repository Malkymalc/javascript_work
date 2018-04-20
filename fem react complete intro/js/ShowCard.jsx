import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

// The styled.div tag on the template literal means that it will be
// run through the styled.div function which will return a div
// styled as per the css in the template literal, which is then assigned to the <Wrapper> component.

// The props object is immutable.
// A component can have its own state, but only the Component can modify
// its own state.
const Wrapper = styled.div`
   width: 32%;
   border: 2px solid #333;
   border-radius: 4px;
   margin-bottom: 25px;
   padding-right: 10px;
   overflow: hidden;
`;

const Image = styled.img`
   width: 46%;
   float: left;
   margin-right: 10px;
`;

const ShowCard = function ShowCard(props){
   return (
      <Wrapper className="show-card">
         <Image
            src={ `/public/img/posters/${props.show.poster}` }
            alt={ `${props.show.title} Show Poster` }
         />

         <div>
            <h3>{props.show.title}</h3>
            <h4>({props.show.year})</h4>
            <p>{props.show.description}</p>
         </div>
      </Wrapper>
   );
};

// ============  .propTypes and .defaultProps  ============//
// Here we attach a propTypes property to the ShowCard Factory Function.
// This is an object that contains information about the form and types of the data we are passing in as props.
// * Somewhat similar to how we map variables to an object
// using ES6 destructuring.
// We define the types here using shape (object) and string.
// The form is propName: dataType.isRequired,
// The .isRequired is optional, and means it is optional.
// shape({}) type allows us to specify the types of the nested
// data within it.
// The real use for this is as documentation of the form of the
// props being passed in to the component.

// A seperate Component.defaultProps = {}; object of similar form
// can be specified also.

ShowCard.propTypes = {
   show: shape({
      poster: string.isRequired,
      title: string.isRequired,
      year: string.isRequired,
      description: string.isRequired
   }).isRequired
};


export default ShowCard;

// // @flow
//
// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
//
// // $FlowFixMe
// const Wrapper = styled(Link)`
//   width: 32%;
//   border: 2px solid #333;
//   border-radius: 4px;
//   margin-bottom: 25px;
//   padding-right: 10px;
//   overflow: hidden;
//   text-decoration: none;
//   color: black;
// `;
//
// const Image = styled.img`
//   width: 46%;
//   float: left;
//   margin-right: 10px;
// `;
//
// class ShowCard extends React.Component {
//   shouldComponentUpdate() {
//     return false;
//   }
//   props: {
//     poster: string,
//     title: string,
//     year: string,
//     description: string,
//     imdbID: string
//   };
//   render() {
//     return (
//       <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
//         <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
//         <div>
//           <h3>{this.props.title}</h3>
//           <h4>({this.props.year})</h4>
//           <p>{this.props.description}</p>
//         </div>
//       </Wrapper>
//     );
//   }
// }
//
// export default ShowCard;
