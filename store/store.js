const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
    taskModule: taskReducer,
    userModule: userReducer
})

export const store = createStore(rootReducer)
window.gStore = store