<template>
  <div id="app">
    <product />
  </div>
</template>

<script>
import Product from './views/Product.view.vue'

export default {
  name: 'App',
  components: {
    Product
  }
}
</script>

<style src="./assets/css/styles.css">
#app {
  background-image: url(./assets/bg5.jpg)
}
</style>