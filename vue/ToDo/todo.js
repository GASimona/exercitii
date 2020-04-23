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



var app = new Vue({
    el: "#app",
    data: {
        todos: [
            new Todo('Something to do')
        ],
        task: ''
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