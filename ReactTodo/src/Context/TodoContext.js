import { createContext , useContext } from "react";

export const ToDoConext = createContext({});

export const useToDo = () =>{
    return useContext(ToDoConext);
}

export const ToDoProvider = ToDoProvider.Provider();