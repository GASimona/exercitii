<template>
        <li :class="{ done: todo.isDone }" class="task" @click="$emit('checked')">
                  <div class="color_and_title">
                    <div class="color" :style="{ backgroundColor: todo.color}"></div>
                    <div class="title">{{ todo.title }}</div>
                  </div>
                  <div class="controls">
                    <div class="delete" @click="$emit('deleted')">
                        <i class="material-icons">delete</i>
                    </div>
                 </div>
              </li>
</template>

<script>
export default {
    name: 'Task',
    props: ['task']
}
</script>

<style scoped>
li {
    list-style: none;
    padding: 0.5em;
    border-bottom: 1px solid rgb(128, 128, 128, 0.3);
    color: rgb(128, 128, 128);
}

.task {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;

}
.controls {
    display: flex;
}

.controls div {
    border-radius: 0.1em;
    width: 1.3em;
    padding: 0.1em;
    color: white;
    text-align: center;
    cursor: pointer;
    user-select: none;
    margin-left: 0.2em;
}

.material-icons {
    color: gray;
    opacity: 0.7;
}

.task.done .title {
    color: rgb(128, 128, 128, 0.5);
    text-decoration: line-through;
}

</style>