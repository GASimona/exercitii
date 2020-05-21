import Todo from '../class/todo.js';
import store from '../store/store.js';

Vue.component('todo-list', {
    template: `
            <div class="todo-list">
                <h1>{{ list_name }}</h1>
                <div class="filters">
                    <label>Show done: </label>
                    <input type="checkbox" v-model="showDone">
                </div>
                <ul>
                    <task 
                        v-if="showDone || !todo.isDone"
                        v-for="(todo, index) in todos" 
                        :todo="todo" 
                        @checked="checkTodo(index)"
                        @deleted="deletedTodo(index)">
                    </task>
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
            `,
    data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: ''
            // showDone: true
        }
    },
    props: [ 'list_name' ],
    methods: {
        saveTodo() {
            // -------- adaugam valoarea din task in todos -------------------
            // this.todos.push(new Todo(this.task));
            this.$store.comit('saveTodo', this.task)
            // -------- resetam task-ul -------------------
            this.task = '';
        },
        checkTodo(index) {
            // this.todos[index].switchDone();
            this.$store.comit('checkTodo', index)
        },
        deletedTodo(index) {
            // this.todos.splice(index, 1);
            this.$store.comit(deletTodo, index)
        },
        changeShowDone: (state, value) => state.showDone = value
    },
    computed: {
        filteredTodos() {
            return store.getters.filteredTodos
        },
        showDone: {
            get() {
                return this$store.state.showDone
            },
            set(value) {
                this.$store.comit('changeShowDone', value)
            }
        }
    }
});