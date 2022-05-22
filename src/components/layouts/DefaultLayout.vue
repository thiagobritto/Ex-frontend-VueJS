<!-- HTML -->

<template>
  <section class="dashboard">
    <aside :class="[{ 'close-menu': inpMenuFull }, { 'open-menu': inpMenu }]">
      <header class="header-menu">
        <router-link to="/" class="logo">THOMC /////</router-link>
      </header>
      <div class="list-menu">
        <MenuBar />
      </div>
    </aside>
    <div
      @click="toggleMenu"
      :class="['overlay', { 'open-menu': inpMenu }]"
    ></div>
    <section>
      <header class="header-page">
        <i @click="toggleMenu" class="material-icons btn-menu">menu</i>
        <i @click="toggleMenuFull" class="material-icons btn-menu btn-menu-full">menu</i>
        <h4>Madeireira Santo Antônio</h4>
        <div class="user">
          <h6>Lene</h6>
          <figure>
            <img src="@/assets/images/user.jpg" alt="">
          </figure>
        </div>
      </header>
      <slot></slot>
    </section>
    <footer>
      <h6>footer</h6>
    </footer>
  </section>
</template>



<!-- JavaScript -->

<script>
import MenuBar from "@/components/MenuBar";
export default {
  name: "DefaultLayout",
  data: () => ({
    inpMenu: false,
    inpMenuFull: false,
  }),
  components: {
    MenuBar,
  },
  methods: {
    toggleMenu() {
      this.inpMenu = !this.inpMenu;
    },
    toggleMenuFull() {
      this.inpMenuFull = !this.inpMenuFull;
    },
  },
};
</script>



<!-- CSS -->

<style scoped>
.dashboard {
  height: 100vh;
}

.dashboard aside {
  position: fixed;
  height: 100vh;
  width: 200px;
  background: var(--color--2);
  transform: translateX(-100%);
  transition: transform 0.3s, width 0.3s;
}

.header-menu {
  height: 40px;
  background: var(--color--1);
}

.header-menu .logo {
  display: block;
  text-decoration: none;
  color: var(--color--5);
  padding: 10px;
}

.list-menu {
  height: calc(100% - 40px);
}

.dashboard div.overlay {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: calc(100% - 200px);
  background: black;
  opacity: 0.3;
  transform: translateX(100%);
  transition: transform 0.3s;
}

.open-menu {
  transform: translateX(0) !important;
}

.dashboard section {
  height: calc(100vh - 20px);
  background: #fff;
  padding: 10px;
  overflow-y: auto;
}

.header-page {
  height: 40px;
  box-shadow: 0 0 10px -5px var(--color--1);
  margin: -10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-menu {
  cursor: pointer;
  margin: 0 10px;
}

.btn-menu-full {
  display: none;
}

.user{
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.user figure{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
}

.user figure img{
  height: 100%;
}

.dashboard footer {
  display: flex;
  align-items: center;
  height: 20px;
  background: var(--color--1);
  padding: 0 10px;
}

.dashboard footer > * {
  color: #fff;
}

@media screen and (min-width: 768px) {
  .overlay {
    display: none;
  }
  .dashboard {
    display: flex;
    flex-wrap: wrap;
  }
  .dashboard aside {
    transform: translateX(0);
    position: static;
    height: calc(100vh - 20px);
  }

  .dashboard section {
    flex: 1;
  }

  .dashboard footer {
    width: 100%;
  }

  .close-menu {
    width: 0px !important;
    overflow: hidden;
  }
  .btn-menu{
    display: none;
  }
  .btn-menu-full{
    display: initial;
  }
}
</style>