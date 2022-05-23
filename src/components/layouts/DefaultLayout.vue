<!-- HTML -->

<template>
  <section class="dashboard">
    <section class="dashboard-section">
      <aside :class="asideClass">
        <header>
          <h1 @click="locationTo('/')">THOMC /////</h1>
        </header>
        <nav class="scrollbar-dark">
          <MenuBar @location="locationTo" />
        </nav>
      </aside>
      <section class="section-main">
        <header>
          <div class="left">
            <i @click="toggleMenuMobile" class="material-icons btn-mobile"
              >menu</i
            >
            <i @click="toggleMenuWeb" class="material-icons btn-web">menu</i>
            <h4>Thomc info LTDA</h4>
          </div>
          <div class="right">
            <h6>Lene</h6>
            <figure>
              <img src="@/assets/images/user.jpg" alt="">
            </figure>
          </div>
        </header>
        <section class="scrollbar-light">
          <slot></slot>
        </section>
      </section>
    </section>
    <footer class="dashboard-footer">
      <h6>{{ date }}</h6>
    </footer>
    <div @click="toggleMenuMobile" :class="overlayClass"></div>
  </section>
</template>



<!-- JavaScript -->

<script>
import MenuBar from "@/components/MenuBar";
export default {
  name: "DefaultLayout",
  data: () => ({
    asideClass: [
      "aside-menu",
      {
        "open-menu": false,
        "close-menu-web": false,
      },
    ],
    overlayClass: [
      "overlay",
      {
        "open-menu": false,
      },
    ],
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
    toggleMenuMobile() {
      this.asideClass[1]["open-menu"] = !this.asideClass[1]["open-menu"];
      this.overlayClass[1]["open-menu"] = !this.overlayClass[1]["open-menu"];
    },
    toggleMenuWeb() {
      this.asideClass[1]["close-menu-web"] =
        !this.asideClass[1]["close-menu-web"];
    },
    locationTo(link) {
      this.toggleMenuMobile();
      this.$router.push(link);
    },
  },
};
</script>



<!-- CSS -->

<style scoped>
.dashboard-section {
  height: calc(100vh - 20px);
  width: 100%;
}

.dashboard-footer {
  height: 20px;
  width: 100%;
  background: var(--color--1);
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.dashboard-footer > * {
  color: #fff;
}

.aside-menu {
  position: fixed;
  height: 100vh;
  width: 200px;
  background: var(--color--2);
  transform: translateX(-100%);
  transition: transform 0.3s, width 0.3s;
  user-select: none;
  overflow-x: hidden;
}

.aside-menu header {
  height: 40px;
  width: 100%;
  box-shadow: 0 0 10px -5px #000;
  display: flex;
  align-items: center;
  padding: 10px;
  background: var(--color--1);
}

.aside-menu h1 {
  color: var(--color--5);
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
}

.aside-menu nav {
  height: calc(100% - 40px);
  width: 100%;
  overflow-y: auto;
}

.section-main {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}

.section-main header {
  height: 40px;
  width: 100%;
  box-shadow: 0 0 10px -5px #000;
  user-select: none;
  background: #fff;
}

.section-main header,
.section-main header .left,
.section-main header .right {
  display: flex;
  align-items: center;
}

.section-main header .left,
.section-main header .right {
  padding: 10px;
}

.section-main header .left .btn-web {
  display: none;
}

.section-main header .right {
  flex: 1;
  justify-content: flex-end;
}

.section-main header .right figure{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.section-main header .right figure img{
  height: 100%;
}

.section-main header .left i {
  margin-right: 10px;
  cursor: pointer;
}

.section-main section {
  height: calc(100% - 40px);
  width: 100%;
  overflow-y: auto;
  padding: 10px;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(100% - 200px);
  background: rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s;
}

.open-menu {
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .overlay,
  .section-main header .left .btn-mobile {
    display: none;
  }
  .section-main header .left .btn-web {
    display: flex;
  }
  .aside-menu {
    position: static;
    transform: unset;
    height: 100%;
  }
  .dashboard-section {
    display: flex;
  }
  .section-main {
    flex: 1;
  }
  .close-menu-web {
    width: 0;
  }
}
</style>