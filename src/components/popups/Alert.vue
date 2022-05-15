<template>
  <div>
    <div @click="close()" class="overlay"></div>
    <div class="window">
      <header class="topbar">
        <div class="left">THOMC /////</div>
        <div class="center">
          {{ date() }}
        </div>
        <div class="right">
          <i @click="close()" class="material-icons btn-topbar">close</i>
        </div>
      </header>
      <section class="doc">
        <h3>{{title}}</h3>
        <p>
          {{message}}
        </p>

        <button v-show="confirm" @click="close(true)">
          ok
        </button>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "Alert",
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    message: {
      type: String,
      default: 'message'
    },
    confirm: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    close(opt = false) {
      this.$emit("close", opt);
    },
    date() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var today = new Date();

      const d = today.toLocaleDateString("pt-BR", options);
      return d;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.window {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50vh;
  background: #fff;
  transform: translate(-50%, -50%);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  padding: 2px 5px;
  color: #fff;
  background: var(--color--1);
}

.topbar * {
  font-size: 14px;
}

.btn-topbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.doc{
  padding: 5px;
}
</style>