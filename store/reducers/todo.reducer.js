import { todoService  } from "../../services/todo.service.js";

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODOS'
export const REMOVE_TODO = 'REMOVE_TODOS' 
export const UPDATE_TODO = 'UPDATE_TODO'

const initialState = {
    todos: []
}


export function todoReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_TODOS:
            return {
                ...state,
                todos : cmd.todos
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, cmd.todo]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== cmd.todoId)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === cmd.todo._id ? cmd.todo : todo)
            }
        default:
            return state
    }
}
