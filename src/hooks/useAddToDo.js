import { useEffect, useState } from "react";
import { addToDoItem } from '../api/addTodoItem';
import { useToDoContext } from "./useTodoContext";
import {useCancellablePromise} from '../hooks/useCancellablePromise';

export const useAddToDo = () => {
  const [text, setText] = useState('');
  const { dispatch } = useToDoContext();
  const [newItemText, setNewItemText] = useState();
  const { cancellablePromise } = useCancellablePromise();

  useEffect(() => {
    const addTodoApiCall = async () => {
      if (newItemText) {
        const item = await cancellablePromise(addToDoItem(newItemText));
        dispatch({
          type: 'ADD_ITEM',
          item
        });
        setText('');
        setNewItemText();
      }
    }
    addTodoApiCall();
    return () => {
    };
  }, [newItemText]);


  return {
    text,
    onTextChange: (e) => {
      setText(e.currentTarget.value);
    },
    onAddToDo: () => {
      setNewItemText(text);
    },
    handleKeyDown: (e) => {
      if (e.key === 'Enter') {
        setNewItemText(text);
      }
    }
  };

};