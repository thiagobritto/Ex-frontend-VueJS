<!-- HTML -->

<template>
  <section>
    <HeaderBack title="Cadastro de cliente"/>
    <main>
      <FormPageClient 
        @submitform="submit" 
        labelbutton="Resgistrar"/>
      <div class="help">
        {{ help }}
      </div>
    </main>  
  </section>
</template>



<!-- JavaScript -->

<script>

import FormPageClient  from '@/components/forms/FormPageClient.vue'
import HeaderBack  from '@/components/headers/HeaderBack'

export default {
  name: "ClientAdd",

  data: () => ({
    help: ''
  }),
  
  methods: {
    submit(form){
      this.teste = form
    }
  },
  
  components: {
    FormPageClient,
    HeaderBack
  }
};

</script>



<!-- CSS -->

<style scoped>

section main {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
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