<!-- HTML -->

<template>
  <h2>Gerenciador de clientes</h2>
  <router-link to="/client/add" class="btn btn-forward">
    <span class="material-icons">add</span>
    <span>Novo cliente</span>
  </router-link>
  <div class="table-client">
    <table border="1">
      <thead>
        <tr>
          <th>código</th>
          <th>nome</th>
          <th>CPF/CNPJ</th>
          <th>telefone</th>
          <th>logradouro</th>
          <th>controles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in dataClient" :key="index">
          <td>{{row.id_client}}</td>
          <td>{{row.first_name}}</td>
          <td>{{row.cpf_cnpj}}</td>
          <td>{{row.phone}}</td>
          <td>{{row.address}}</td>
          <td class="controls">
            <a @click.prevent="edit(row)" class="btn">
              <span class="material-icons">edit</span>
            </a>
            <a href="" class="btn">
              <span class="material-icons">delete</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<!-- JavaScript -->

<script>

import { mapMutations, mapGetters } from 'vuex'
import api from '@/http'

export default {
  name: "ClientManage",
  
  data: ()=>({
    dataClient: []
  }),

  methods: {
    ...mapMutations(['TMP']),

    edit(da){
      console.log(da);
      this.TMP(da)
      this.$router.push('/client/update')
    }
  },

  computed:{
    ...mapGetters(['tmp'])
  },

  mounted(){
    api.get('/client/list').then( res => {
      this.dataClient = res.data
    })
  }

};
</script>


<!-- CSS -->

<style scoped>
.table-client {
  overflow: scroll;
  padding-bottom: 15px;
}

th,
td {
  padding: 2px 5px;
}

.controls {
  display: flex;
  flex-direction: row;
}

.controls > * {
  padding: 0;
  border: none;
}

.controls > *:hover {
  opacity: 0.5;
}
</style>
