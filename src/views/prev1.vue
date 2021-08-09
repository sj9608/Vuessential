<template>
  <div id='prev1'>
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
    <TodoFooter /> 
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader.vue";
import TodoTitle from "../components/TodoTitle.vue";
import TodoFooter from "../components/TodoFooter.vue";
import TodoList from "../components/TodoList.vue";
import TodoController from "../components/TodoController.vue";
import TodoInput from "../components/TodoInput.vue";

export default {
  name: "prev1",
  components: {
    TodoHeader,
    TodoTitle,
    TodoFooter,
    TodoList,
    TodoController,
    TodoInput
  },
};
</script>

<style>

</style>