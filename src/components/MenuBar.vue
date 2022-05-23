<template>
  <ul>
    <li @click="to('/')"> 
      <i class="material-icons">local_offer</i>
      Vender
    </li>
    <li @click="to('/search/client')"> 
      <i class="material-icons">person</i>
      Cliente
    </li>
    <li @click="to('/')"> 
      <i class="material-icons">local_grocery_store</i>
      Produto
    </li>
    <li @click="to('/')"> 
      <i class="material-icons">account_circle</i>
      Usuário
    </li>
    <li @click="to('/')"> 
      <i class="material-icons">logout</i>
      Sair
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuBar",
  methods: {
    to(link) {
      this.$emit("location", link);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  overflow-x: hidden;
}

ul li {
  color: #fff;
  display: flex;
  align-items: center;
  transition: background 0.3s;
  padding: 5px 10px;
  white-space: nowrap;
}

ul li i {
  color: #fff;
  margin-right: 10px;
  font-size: 20px;
}

ul li:hover {
  background: var(--color--4);
  cursor: pointer;
}
</style>