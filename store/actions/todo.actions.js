import { todoService } from "../../services/todo.service"
import { ADD_TODO, REMOVE_TODO, SET_TODOS, UPDATE_TODO } from "../reducers/todo.reducer.js"
import { store } from "../store.js"

export function loadTodos() {
    return todoService.query()
        .then(todos => {
            store.dispatch({type: SET_TODOS, todos})
        })
        .catch(err => {
            console.log('todo action -> Cannot load todos', err);
            throw err
        })
}

export function removeTodo(todoId){

    return todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type:REMOVE_TODO, todoId})
        })
        .catch(rtt => {
            console.log('todo action -> Cannot remove todo', err);
            throw err
        })
}

export function saveTodo(todo){
    const type = todo._id ? UPDATE_TODO : ADD_TODO
    return todoService.save(todo)
        .then((savedTodo) => {
            store.dispatch({ type, todo: savedTodo})
            return savedTodo
        })
        .catch(err => {
            console.log('todo action -> Cannot save todo', err);
            throw err
        })
}