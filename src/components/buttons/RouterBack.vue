<template>
  <a class="btn" @click.prevent="back">
    <slot></slot>
  </a>
</template>

<script>
export default {

  name: 'RoeuterBack',
  
  props: {
    go: {
      type: String,
      default: '-1'
    }
  },

  methods: {
    back() {
      this.$router.go(this.go)
    }
  }
}

</script>

<style scoped>

a{
  width: 60px;
}

</style>