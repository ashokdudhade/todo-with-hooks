
export const updateToDoItem = (item) => {
    //Asynchronous api call
    return new Promise((resolve) => {
        setTimeout(resolve(item), 200);
    });
}

