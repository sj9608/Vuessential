<template>
  <Nav />
  
  <router-view/>
   
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
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
