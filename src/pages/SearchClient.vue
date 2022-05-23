<template>
  <section class="client">
    <h2>Procurar</h2>
    <input
      type="search"
      v-model="searchProxy"
      v-focus
      placeholder="Digite um nome"
    />
    <p class="text-add">
      <router-link to="/">Novo cliente</router-link>
    </p>
    <div class="data-client" v-for="(r, i) in searchData" :key="i">
      <h3 class="client-name">
        {{ r.id_client }}, {{ r.first_name }} {{ r.last_name }}
        <i class="material-icons" title="Editar">edit</i>
        <i class="material-icons" title="Excluir">delete</i>
      </h3>
      <p>
        <span>{{ r.cpf_cnpj }}</span> <br />
        <span>{{ r.address }}, {{ r.number }}</span>
        <span>{{ r.district }}</span> <br />
        <span>{{ r.city }}/{{ r.uf }}</span> -
        <span>{{ r.zipcode }}</span> <br />
        <span>Telefone: {{ r.phone }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import api from "@/services/http";
export default {
  name: "SearchClient",
  data: () => ({
    search: "",
    searchData: [],
  }),
  methods: {
    searchAPI(value) {
      if (value) {
        api.get(`/client/search/${value}/10`).then((res) => {
          this.searchData = res.data;
        });
      } else {
        this.searchData = [];
      }
    },
  },
  computed: {
    searchProxy: {
      get() {
        return this.search;
      },
      set(value) {
        this.search = value;
        this.searchAPI(value);
      },
    },
  },
};
</script>

<style scoped>
.client h2 {
  margin: 20px;
  text-align: center;
}

.client input[type="search"] {
  display: block;
  padding: 10px;
  width: 70%;
  margin: 0 auto;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  outline: none;
  transition: border 0.3s;
  background: #fff;
}

.client input[type="search"]:focus {
  border: 1px solid #d6d6d6;
}

.text-add {
  margin: 10px 0;
  text-align: center;
}

.data-client {
  width: 90%;
  margin: 20px auto;
}

.client-name {
  display: flex;
  align-items: center;
}

.client-name i {
  margin-left: 5px;
  transition: opacity 0.3s;
}

.client-name i:hover {
  cursor: pointer;
  opacity: 0.5;
}

</style>