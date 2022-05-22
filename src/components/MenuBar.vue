<template>
  <ul class="scrollbar-dark">
    <li v-for="x in 30" :key="x">
      <a href="">home {{x}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>

<style scoped>
ul {
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
}

ul li a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  transition: background .3s;
}

ul li a:hover {
  background: var(--color--4);
}
</style>