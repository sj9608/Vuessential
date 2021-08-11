<template>
  <div id="prev1">
    <div class="top">
      <TodoHeader />
      <div>
        <TodoTitle />
        <TodoInput />
      </div>
    </div>
    <div class="body">
      <TodoController />
      <TodoList />
      <TodoFooter />
    </div>
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
    TodoInput,
  },
};
</script>

<style lang="scss">
.top {
  width: 100%;
  min-height: 43.6rem;
  padding: 0 $padding 4.5rem;
  background-image: linear-gradient(145deg, #3770cc 20%, #ce91c9 80%);
}

.body {
  padding: 3rem $padding;
  background-color: #efefef;
}
</style>