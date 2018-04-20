// Note: Browsing around app is also an action, but this
// is stored automatically in our state by the
// 'react-router-redux' syncHistoryWithStore() method.

// Action creators are functions which return/ 'create'
// action objects {}.
// These objects have a type and a payload property:

// type: what kind of thing happened (which reducer should handle
// this).

// payload: what exactly happened (the data the reducer will need
 //to update the state).

// increment
export function increment(photoIndex){
   return {
      type: 'INCREMENT_LIKES',
      photoIndex,
   }
}
// add comment
export function addComment(postID, author, comment){
   return {
      type: 'ADD_COMMENT',
      postID,
      author,
      comment,
   }
}
// remove comment
export function removeComment(postID, commentIndex){
   return {
      type: 'ADD_COMMENT',
      postID,
      commentIndex,
   }
}



















//
