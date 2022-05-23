<template>
  <section class="client">
    <h2>Procurar</h2>
    <input type="search" v-model="searchProxy" v-focus placeholder="Digite um nome">
    <p class="text-add">
      <a href="#">Novo cliente</a>
    </p>
    <div class="data-client" v-for="(r, i) in searchData" :key="i">
      <h3>{{r.id_client}}, {{r.first_name}} {{r.last_name}}</h3>
      <p>
        <span>CPF/CNPJ: {{r.cpf_cnpj}}</span> -
        <span>Telefone: {{r.phone}}</span>
      </p>
      <p>
        <span>Logradouro: {{r.address}}, {{r.number}}</span> - 
        <span>Cidade: {{r.city}} / {{r.uf}}</span> <br>
        <span>Bairro: {{r.district}}</span> -
        <span>CEP: {{r.zipcode}}</span>
      </p>
    </div>
  </section>
</template>

<script>
import api from '@/services/http'
export default {
  name: "RegisterClient",
  data: ()=>({
    search: '',
    searchData: []
  }),
  methods:{
    searchAPI(value){
      if(value){
        api.get(`/client/search/${value}/10`).then(res=>{
          this.searchData = res.data 
        })
      }
    }
  },
  computed: {
    searchProxy: {
      get () {
        return this.search
      },
      set(value){
        this.search = value
        this.searchAPI(value)
      }
    }
  }
};
</script>

<style scoped>
.client h2{
  margin: 20px;
  text-align: center;
}

.client input[type=search]{
  display: block;
  padding: 10px;
  width: 70%;
  margin: 0 auto;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  outline: none;
  transition: border .3s;
  background: #f5f5f5;
}

.client input[type=search]:focus{
  border: 1px solid #d6d6d6;
}

.text-add{
  margin: 10px 0;
  text-align: center;
}

.data-client{
  width: 90%;
  margin: 20px auto;
}
</style>