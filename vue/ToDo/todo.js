class Todo {
    constructor(title) {
        this.title = title;
        this.isDone = false;
    }
    switchDone() {
        this.isDone = !this.isDone;
    }
}

Vue.component('task', {
    template: `
              <li :class="{ done: isDone }" class="task">
                  <div class="title">{{ title }}</div>
                  <div class="controls">
                     <div class="check" @click="$emit('checked')">✓</div>
                     <div class="delete" @click="$emit('deleted')">✗</div>
                 </div>
              </li>
              `,
    props: ['title', 'isDone']
});

Vue.component('todo-list', {
    template: `
            <div class="todo-list">
                <h1>To Do:</h1>
                <div class="filters">
                    <label>Show done: </label>
                    <input type="checkbox" v-model="showDone">
                </div>
                <ul>
                    <task 
                        v-if="showDone || !todo.isDone"
                        v-for="(todo, index) in todos" 
                        :title="todo.title" 
                        :is-done="todo.isDone"
                        @checked="checkTodo(index)"
                        @deleted="deletedTodo(index)">
                    </task>
                </ul>
                <div class="new_task">
                    Task
                    <input type="text" v-model="task" @keyup.enter="saveTodo"></input>
                    <div class="save_task">
                        <button @click="saveTodo">Save To Do</button>
                    </div>
                </div>
            </div>
            `,
    data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
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
    }
});

var app = new Vue({
    el: "#app",
});