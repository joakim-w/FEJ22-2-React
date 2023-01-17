import actiontypes from "./actiontypes"
// const action = {
//   type: 'addPost',
//   payload: 123erwfdgvb
// }

export const postsReducer = (state, action) => {
  switch(action.type) {
    // case 'ADD_POST':
    case actiontypes().posts.addPost:
      const post = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        body: action.payload.body
      }
      return [post, ...state]


      case actiontypes().posts.deletePost:
        return state.filter(post => post.id !== action.payload)

        
      default:
        return state
  }
}