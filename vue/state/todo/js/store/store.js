import { Todo } from "../class/Todo.js";

export default new Vuex.Store({
    state: {
        todo: [
            new Todo('Something to do')
        ],
        showDone: true
    },
    mutations: {
        saveTodo: (state) => state.todo.push(new Todo(task)),
        checkTodo: (state, index) => state.todo.[index].switchDone(),
        deletedTodo: (state, index) => state.todos.splice(index, 1)
    },
    getters: {
        filteredTodos: (state) => state.todos.filter(todo => state.showDone || !todo.isDone)
    }
})