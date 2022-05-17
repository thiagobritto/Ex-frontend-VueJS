<!--HTML-->

<template>
  <section class="home">
    <div class="statistics">
      <div class="message">
        <h3>Aviso!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          distinctio debitis error iste doloribus porro sunt recusandae
          repudiandae quo, quidem quia? Doloremque ipsa reiciendis distinctio at
          corporis dolor voluptas magni.
        </p>
      </div>
      <div class="ranking">
        <h3>Ranking</h3>
      </div>
      <div class="chapion">
        <h3>Funcionario do mês</h3>
      </div>
    </div>
    <button @click="teste">
      ok
    </button>
  </section>
</template>



<!--JavaScript-->

<script>

export default {
  name: "Home",
  components: {},
  methods:{
    teste(){
      window.ipcRenderer.invoke('invoketeste', {
        ol: 'ok'
      }).then( res => {
        console.log(res);
      })
    }
  }
};
</script>



<!--CSS-->

<style scoped>
.statistics {
  display: flex;
  height: 120px;
  padding: 10px;
}

.statistics div {
  flex: 1;
  height: 100%;
  margin: 10px;
  border: 10px solid transparent;
  border-radius: 5px;
  box-shadow: 0 0 12px -6px var(--box--shadow--card);
  overflow: hidden;
  color: var(--color--card);
}
.message {
  background: lightcoral;
}
.ranking {
  background: lightblue;
}
.chapion {
  background: lightgreen;
}
</style>