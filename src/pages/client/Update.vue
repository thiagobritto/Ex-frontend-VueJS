<!-- HTML -->

<template>
  <section>
    <header>
      <h2>Editar cliente: {{fill.id_client}} </h2>
    </header>
    <main>
      <FormPageClient :fillable="fill" @submitform="submit" />
      <div class="help">
        
      </div>
    </main>  
  </section>
</template>



<!-- JavaScript -->

<script>

import FormPageClient  from '@/components/FormPageClient.vue'
import { mapGetters }  from 'vuex'

export default {
  name: "ClientUpdate",
  
  data: () => ({
    help: {},
    fill: {}
  }),
  
  methods: {
    submit(form){
      this.teste = form
    }
  },
  
  components: {
    FormPageClient
  },
  
  computed: {
    ...mapGetters(['tmp']),
  },

  created(){
    if(this.tmp.id_client)
      this.fill = this.tmp
  }
};

</script>



<!-- CSS -->

<style scoped>

section header {
  padding: 10px;
}

section main {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

section main div,
section main form
{
  flex: 1;
}

.help {
  padding: 0 5px;
}

</style>