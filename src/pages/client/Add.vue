<!-- HTML -->

<template>
  <section>
    <header>
      <h2>Cadastrp de cliente</h2>
    </header>
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

import FormPageClient  from '@/components/FormPageClient.vue'

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
    FormPageClient
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