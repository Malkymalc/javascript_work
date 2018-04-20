import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';
import Main from './Main';

// Takes in state and returns props object based on state.
function mapStateToProps(state){
   return {
      posts: state.posts,
      comments: state.comments
   }
}

// ties our actionCreator functions to state's dispatch method
// (state's method for taking in actions and updating state).
// Then adds these 'bound' action creator functions to the
// props object.

//const actionOfType = (infoOnEvent) => {typeOfAction,infoOnEvent}
// .map()
// const actionOfType = (infoOnEvent) => store.dispatch({typeOfAction,infoOnEvent})

// function bindActionCreator(actionCreator,dispatchMethod){
//     return function actionCreator.name(actionDetails){
//       const action = actionCreator(actionDetails)
//       return dispatchMethod(action);
//    }
// }

function mapDispatchToProps(dispatch){
   return bindActionCreators(actionCreators, dispatch);
}

// Our App component has access to a props object based on the
// store's state, and our action creators which are now bound
// to the store's dispatch method.
const App  = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
