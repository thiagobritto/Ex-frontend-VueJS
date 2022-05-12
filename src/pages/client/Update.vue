<!-- HTML -->

<template>
  <section>
    <header-back 
      :title="'Cliente ' + fill.id_client">
    </header-back>    
    <main>
      <FormPageClient 
        :fillable="fill" 
        @submitform="submit"
        labelbutton="Atualizar"/>
      <div class="help">
        
      </div>
    </main>  
  </section>
</template>



<!-- JavaScript -->

<script>

import { mapGetters } from 'vuex'
import FormPageClient from '@/components/FormPageClient.vue'
import HeaderBack from '@/components/headers/HeaderBack'

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
    FormPageClient,
    HeaderBack
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