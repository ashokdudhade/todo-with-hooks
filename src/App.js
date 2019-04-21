import React, {useReducer} from 'react';
import './App.css';
import ToDoHome from './components/ToDoHome';
import { TodoProvider } from './providers/todoProvider';
const initialState = {
  todoItems: []
};

const markItemStateChange = (isComplete, id, state) => {
  const item = state.todoItems.find(t => t.id === id);
  if(item){
    item.isComplete = isComplete;
    return {
      ...state, 
      todoItems: [...state.todoItems]
    }
  }
  return state;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todoItems: [...state.todoItems, {
          ...action.item
        }]
      };
    case 'COMPLETE_ITEM':
      return markItemStateChange(true, action.id, state);
    case 'UNDO_COMPLETE_ITEM':
      return markItemStateChange(false, action.id, state);
    case 'TODO_ITEMS':
      return {
        ...state,
        todoItems: action.todoItems
      }
    default:
      throw new Error('Unexpected action');
  }
};


const App = () => {

  const state = useReducer(reducer, initialState);
  return (
    <div className="App">
    <TodoProvider value={state}> 
      <ToDoHome />
    </TodoProvider>
    </div>
  );
}

export default App;
