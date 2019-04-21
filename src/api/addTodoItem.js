import uuid from 'uuid/v4';

export const addToDoItem = async (text) => {
    //Asynchronous api call
    return new Promise((resolve) => {
        setTimeout(resolve({
            text,
            id: uuid(),
            isComplete: false
        }), 200);
    });
}

