<template>
  <div class="add">
    <div class="main-input">
      <input
        type="text"
        class="add__input"
        placeholder="Enter your task here"
        v-model="newTodoItem"
        @keypress.enter="addTodoItem"
      />
      <button class="add__buttonn" @click="addTodoItem">
        <span class="blind">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      newTodoItem: "",
    };
  },

  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "") {
        // store action "addTodo" 실행, 
        this.$store.commit("SET_TODO", this.newTodoItem);
        this.clearInput();
      }
      else
        alert("no!"); // [임시] 빈값일 때 alert.
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
<style lang="scss">
input {
  letter-spacing: 0.012rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
}
.add {
  position: relative;
  max-width: $max-width;
  margin: 0 auto;
}
</style>