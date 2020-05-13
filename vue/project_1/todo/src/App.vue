<template>
  <div id="app">
   <TodoList list_name='ToDay'></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(243, 218, 106);
}

#app {
    border: 1px solid #e0e0e0 ;
    border-radius: 5px;
    padding: 2em;
    margin-top: 2em;
    background-color: #f5f5f5;
    font-family: sans-serif;
    width: 50%;
}
</style>
