// We create a reducer for each piece of state that the
// application has.

// A reducer takes in two things:
// 1. The action (info about what happened).
// 2. A copy of the current state (the store).

// A reducer returns one thing: a new updated copy of the store.

function posts(action, state = []){
   switch(action.type) {
      case 'INCREMENT_LIKES':
         console.log('Incrementing Likes!!');
         const index = action.index;
         return [
            ...state.slice(0,index),
            {...state[index], likes: state[index].likes + 1 },
            ...state.slice(index + 1),
         ]
      default:
         return state;
   }
}

export default posts;
