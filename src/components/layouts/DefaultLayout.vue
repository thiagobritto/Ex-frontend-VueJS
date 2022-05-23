<!-- HTML -->

<template>
  <section class="dashboard">
    <aside :class="[{ 'close-menu': inpMenuFull }, { 'open-menu': inpMenu }]">
      <header class="header-menu">
        <h1 @click="locationTo('/')" class="logo">THOMC /////</h1>
      </header>
      <nav class="list-menu scrollbar-dark">
        <MenuBar @lacation="locationTo" />
      </nav>
    </aside>
    <div
      @click="toggleMenu"
      :class="['overlay', { 'open-menu': inpMenu }]"
    ></div>
    <section>
      <header class="header-page">
        <div>
          <i @click="toggleMenu" class="material-icons btn-menu"> menu </i>
          <i
            @click="toggleMenuFull"
            class="material-icons btn-menu btn-menu-full">
            menu
          </i>
        </div>
        <h4>Thomc info - LTDA</h4>
        <div class="user">
          <h6>Lene</h6>
          <figure>
            <img src="@/assets/images/user.jpg" alt="" />
          </figure>
        </div>
      </header>
      <main class="page scrollbar-light">
        <slot></slot>
      </main>
    </section>
    <footer>
      <h6>{{date}}</h6>
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
  computed: {
    date() {
      let now = new Date();
      return now.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  methods: {
    toggleMenu() {
      this.inpMenu = !this.inpMenu;
    },
    toggleMenuFull() {
      this.inpMenuFull = !this.inpMenuFull;
    },
    locationTo(link) {
      this.toggleMenu();
      this.$router.push(link);
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
  user-select: none;
}

.header-menu .logo {
  padding: 10px;
  color: var(--color--5);
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
}

.list-menu {
  height: calc(100% - 40px);
  user-select: none;
  overflow-y: auto;
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
}

.header-page {
  height: 40px;
  box-shadow: 0 0 10px -5px var(--color--1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
}

.page {
  height: calc(100% - 40px);
  padding: 10px;
  overflow-y: auto;
}

.btn-menu {
  cursor: pointer;
  margin: 0 10px;
}

.btn-menu-full {
  display: none;
}

.user {
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.user figure {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
}

.user figure img {
  height: 100%;
}

.dashboard footer {
  display: flex;
  align-items: center;
  height: 20px;
  background: var(--color--1);
  padding: 0 10px;
  user-select: none;
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
  .btn-menu {
    display: none;
  }
  .btn-menu-full {
    display: initial;
  }
}
</style>