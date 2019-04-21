import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItems = ({todoItems}) => {
    return (
        <>
            {
                todoItems.map((t) =>
                    <ToDoItem key={t.id} item={t} />)
            }
        </>
    );
}

export default ToDoItems;
