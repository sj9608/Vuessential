<template>
  <div>
    <h1>Today's Todo</h1>
    <input
      type="text"
      v-model="newTodo"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
      autofocus
    />
    <ul>
      <li v-for="todo in todos" :key="todo">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  computed: {
    todos() {
      return this.$store.getters["todos"];
    },
  },

  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
    },
  },

  mounted() {
    
  },
};
</script>
<style>
</style>