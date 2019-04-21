import { useEffect, useState } from "react";
import { updateToDoItem } from '../api/updateToDoItem';
import { useToDoContext } from "./useTodoContext";
import {useCancellablePromise} from '../hooks/useCancellablePromise';

export const useCompleteToDo = (item) => {
    const [isChecked, setIsChecked] = useState(item.isComplete);
    const { dispatch } = useToDoContext();
    const { cancellablePromise } = useCancellablePromise();

    useEffect(() => {
        if(item.isChecked !== isChecked){
            const updateItem = async () => {
                await cancellablePromise(updateToDoItem({
                    ...item,
                    isComplete: isChecked
                }));
                if(isChecked){
                    dispatch({
                        type: 'COMPLETE_ITEM',
                        id: item.id
                    });
                }else{
                    dispatch({
                        type: 'UNDO_COMPLETE_ITEM',
                        id: item.id
                    });
                }
                
            };
    
            updateItem();
        }
        
        
    }, [isChecked]);

    return {
        onItemStateChange: (e) => {
            setIsChecked(e.target.checked);
        }
    };
}