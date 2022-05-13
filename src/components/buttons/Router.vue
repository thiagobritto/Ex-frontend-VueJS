<template>
  <router-link :to="link" :class="{ primary }">
    <slot>{{ title }}</slot>
  </router-link>
</template>

<script>
export default {
  name: "Roeuter",

  props: {
    link: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "link",
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

a {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  transition-property: all;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--color--2);
  user-select: none;
  text-decoration: none;
  background: #fff;
}

a.primary {
  background-color: var(--color--4);
  border: none;
  color: #fff;
}

a.primary:hover {
  background-color: var(--color--3);
}

</style>