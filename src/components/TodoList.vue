<template>
  <ul class="list">
    <li class="list_item" v-for="todo in todos" :key="todo">
      <input type="checkbox" id="list-item-1" />
      <label for="list-item-1" class="list__label">
        <span class="icon-check"></span>
        <p class="list__text">{{ todo }}</p>
      </label>
      <div class="list__right">
        <button class="list__delete">
          X
          <p class="blind">Delete</p>
        </button>
        <p class="list__date">5/26</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",

  computed: {
    todos() {
      return this.$store.getters["todos"];
    },
  },

  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todos.push(localStorage.key(i));
        }
      }
    }
  },
};
</script>

<style lang="scss">
.list {
  position: relative;
  max-width: $max-width;
  margin: 2.1rem auto;

  &_item {
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 1.2rem;

    @include flexbox();
    @include align-items(center);
    @include justify-content(space-between);
  }

  &__delete {
    position: relative;
    width: 1rem;
    height: 1rem;
    padding: 0.25rem;
    padding-right: 0;
    box-sizing: content-box;
    margin-left: auto;
    margin-bottom: 0.5rem;
  }
}
</style>