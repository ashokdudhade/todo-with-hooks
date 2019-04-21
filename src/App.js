import React, {useReducer} from 'react';
import './App.css';
import ToDoHome from './components/ToDoHome';
import { TodoProvider } from './providers/todoProvider';
import { todoReducer } from './reducers/todoReducer';
const initialState = {
  todoItems: []
};



const App = () => {

  const state = useReducer(todoReducer, initialState);
  return (
    <div className="App">
    <TodoProvider value={state}> 
      <ToDoHome />
    </TodoProvider>
    </div>
  );
}

export default App;
