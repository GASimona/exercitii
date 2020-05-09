<template>
     <div class="todo-list">
                <h1>{{ list_name }}</h1>
                <div class="filters">
                    <label>Show done: </label>
                    <input type="checkbox" v-model="showDone">
                </div>
                <ul>
                    <Task 
                        v-for="(todo, index) in filteredTodos" 
                        :key="index"
                        :todo="todo" 
                        @checked="checkTodo(index)"
                        @deleted="deletedTodo(index)">
                    </Task>
                </ul>
                <div class="new_task">
                    New:
                    <input type="text" v-model="task" @keyup.enter="saveTodo"></input>
                    <div class="save_task">
                        <button @click="saveTodo">
                            <i class="fa fa-plus-circle" style="font-size:36px"></i>
                        </button>
                    </div>
                </div>
            </div>
</template>

<script>
import Task from './Task.vue';
import Todo from '../classes/Todo.js';

export default {
    name: 'TodoList',
    prop: ['list_name'],
    components: {
        Task
    },
     data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
    props: [ 'list_name' ],
    methods: {
        saveTodo() {
            // -------- adaugam valoarea din task in todos -------------------
            this.todos.push(new Todo(this.task));
            // -------- resetam task-ul -------------------
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone();
        },
        deletedTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            return this .tosos.filter(todo => (showDone || !todo.isDone) )
        }
    }
}
</script>

<style scoped>

h1 {
    margin-bottom: 0.5em;
    font-size: 1.8em;
    text-align: center;
    color: gray;
    border-bottom: 1px solid rgb(128, 128, 128, 0.3);
}
    .new_task {
    margin-top: 1em;
    text-align: left;
    color: rgb(128, 128, 128);
}
.save_task {
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
}

button {
    width: 36px;
    height: 36px;
    border: none;
    background-color: #f5f5f5;
    color: rgb(122, 174, 204);
}

input[type="text"] {
    font-size: 1em;
    background-color: #f5f5f5;
    border: none;
    border-bottom: 1px solid rgb(128, 128, 128, 0.3);
    padding: 0.5em;
    width: 90%;
    margin-left:  0.5em;
    color: rgb(128, 128, 128);
}

input[type="text"]:focus {
    outline: none;
  }

.filters {
    text-align: right;
    margin-bottom: 0.5em;
    color: rgb(128, 128, 128);
}
.color_and_title {
    display: flex;
}
.color {
    width: 0.5em;
    height: 1.5em;
    opacity: 0.6;
    border-radius: 0.2em;
    padding-right: 0.5em;
    margin-right: 0.5em;
}
</style>