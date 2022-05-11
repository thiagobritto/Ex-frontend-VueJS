<!-- HTML -->

<template>
  <aside class="aside">
    <figure class="image">
      <img src="@/assets/images/user.jpg" alt="" />
    </figure>
    <h3 class="name">Jane</h3>
    <ul class="list">
      <li>
        <router-link to="/sale/pdv">
          <span class="material-icons">local_offer</span>
          <span>Vender</span>
        </router-link>
      </li>
      <li>
        <router-link to="#" @click="droppable">
          <span v-if="droppableClass" class="material-icons"
            >arrow_drop_down</span
          >
          <span v-else class="material-icons">arrow_drop_up</span>
          <span>Gerenciar</span>
        </router-link>
        <ul :class="['list-droppable', { droppableClass }]">
          <li>
            <router-link to="/client/manage">
              <span class="material-icons">person</span>
              <span>Clientes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/product/manage">
              <span class="material-icons">shopping_cart</span>
              <span>Produtos</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="#">
          <span class="material-icons">logout</span>
          <span>Sair</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>



<!-- JavaScript -->

<script>
export default {
  name: "MenuDefaultLayout",
  data: () => ({
    droppableClass: false,
  }),
  methods: {
    droppable() {
      this.droppableClass = !this.droppableClass;
    },
  },
};
</script>



<!-- CSS -->

<style scoped>
.aside {
  height: 100%;
  background: var(--bk--aside);
  width: var(--width--aside);
  overflow-y: scroll;
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
  margin-bottom: 0;
}

.image img {
  height: 100%;
}

.name {
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
}

.list {
  list-style: none;
}

.list a {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: 0.4s;
  transition-property: background;
}

.list a span:last-child {
  margin-left: 10px;
}

.list a:hover {
  background: var(--bk--link--hover);
}

.list-droppable {
  border-left: 5px solid #fff;
  color: #fff;
  list-style: none;
  overflow-y: hidden;
  height: 0;
}

.droppableClass {
  height: 100%;
}
</style>