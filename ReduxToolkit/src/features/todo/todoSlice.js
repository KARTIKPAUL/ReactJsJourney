import {createSlice , nanoid} from '@reduxjs/toolkit';


const initialState = {
    todos: [{id: 1 , text: "Eating Rice"}]

}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) =>{
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        // updateTodo: (state, action) =>{
        //     let val = action.id;
        //     const newTodo = {
        //         id: val,
        //         text: action.payload
        //     }
        //     state.todos.push(newTodo);
        // }
    }
});

export const {addToDo , removeTodo}= todoSlice.actions;

export default todoSlice.reducer;