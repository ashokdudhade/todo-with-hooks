import { useContext } from "react";
import { ToDoContext } from "../providers/todoProvider";

export const useToDoContext = () => {
  const todoContext = useContext(ToDoContext);
  return {
      state: todoContext[0],
      dispatch: todoContext[1]
  }
};