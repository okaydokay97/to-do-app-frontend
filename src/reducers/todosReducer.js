export default function todosReducer(state = [], action) {
  switch(action.type){
    
    case 'ADD_TODO':
      return [action.todo]

    default:
      return state
  }

}