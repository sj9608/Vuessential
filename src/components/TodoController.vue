<template>
  <div class="controller">
    <div class="select">
      <label for="order">
        <span class="blind">Order</span>
      </label>
      <select name="order" id="order" class="selectbox">
        <option value="date-oldest">Oldest</option>
        <option value="date-latest">Latest</option>
      </select>
    </div>
    <button class="clear">Clear All</button>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.controller {
  max-width: $max-width;
  margin: 0 auto;
  @include flexbox();
  @include align-items(center);
  @include justify-content(space-between);
}
</style>