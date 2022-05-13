<!--- HTML -->

<template>
  <button :class="{ primary }">
    <slot>{{title}}</slot>
  </button>
</template>



<!--- JavaScript -->

<script>

export default {

  name: 'SubmitForm',

  props: {
    primary: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Button'
    }
  }
  
}

</script>




<!--- CSS -->

<style scoped>

button {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  transition-property: all;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--color--2);
  outline: none;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  background: #fff;
}

button.primary {
  background-color: var(--color--4);
    border: none;
    color: #fff;
}

button.primary:hover {
    background-color: var(--color--3);
}

</style>