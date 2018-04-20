import React from 'react';
import { Link } from 'react-router';


// + React.cloneElement(elementToClone,propsForElement) used
// here, to allow us to pass props down to children.
// + This allows us to pass props down to a dynamically
// inserted (child) component.
// + It's a bit like Object.create(obj,properties)?
const Main = React.createClass({
   render(){
      return (
         <div>
            <h1>
               <Link to='/'>
                  Reduxstagram
               </Link>
            </h1>
            {React.cloneElement(this.props.children, this.props)}
         </div>
      )
   }
});

export default Main;
