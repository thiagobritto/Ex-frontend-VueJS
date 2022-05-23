<!--HTML-->

<template>
  <section class="home">
    <div class="statistics">
      <div v-for="x in 20" :key="x" class="message">
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
  </section>
</template>



<!--JavaScript-->

<script>

export default {
  name: "Home",
  props:{
    tes: {
      type: String,
      default: ''
    }
  },
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

</style>