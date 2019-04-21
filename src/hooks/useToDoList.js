import { useEffect } from "react";
import { fetchTodoItems } from '../api/fetchToDoItems';
import { useToDoContext } from "./useTodoContext";
import {useCancellablePromise} from '../hooks/useCancellablePromise';

export const useToDoList = () => {
    const { state, dispatch } = useToDoContext();
    const { cancellablePromise } = useCancellablePromise();

    useEffect(() => {
            const fetchItems = async () => {
                const items = await cancellablePromise(fetchTodoItems());
                dispatch({
                        type: 'TODO_ITEMS',
                        todoItems: items
                });
                 
            };
    
            fetchItems();
        
    }, []);
    const { todoItems } = state;
    const openToDoItems = todoItems.filter(t => !t.isComplete);
    const completeToDoItems = todoItems.filter(t => t.isComplete);

    return {
        todoItems,
        openToDoItems,
        completeToDoItems
    };
}