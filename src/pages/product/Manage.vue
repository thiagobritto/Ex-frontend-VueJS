<!-- HTML Gerenciador de clientes -->

<template>
  <section>
    <HeaderBack title="Gerenciador de produtos">
      <div class="container-nav-manage">
        <NavManage @search="search" :badsearch="bad_search">
          <template v-slot:button>
            <Router link="/product/add" primary>
              <span class="material-icons">add</span>
              <span>Adicionar</span>
            </Router>
          </template>
        </NavManage>
      </div>
    </HeaderBack>

    <main>
      <div class="table scrollable">
        <table>
          <thead>
            <tr>
              <th>código</th>
              <th>Descrição</th>
              <th>Fabricante</th>
              <th>Categoria</th>
              <th>Unidade</th>
              <th>Preço</th>
              <th>controles</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in dataProduct" :key="index">
              <td>{{ row.id_product }}</td>
              <td>{{ row.description }} {{ row.last_name }}</td>
              <td>{{ row.manufacturer }}</td>
              <td>{{ row.id_category }}</td>
              <td>{{ row.id_unity }}</td>
              <td>{{ row.price }}</td>
              <td>
                <div class="controls">
                  <a @click.prevent="edit(row)">
                    <span class="material-icons">edit</span>
                  </a>
                  <a href="" class="btn">
                    <span class="material-icons">delete</span>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {{ help }}
    </main>
  </section>
</template>



<!-- JavaScript -->

<script>
import { mapMutations, mapGetters } from "vuex";

import api from "@/services/http";

import HeaderBack from "@/components/headers/HeaderBack";
import NavManage from "@/components/navs/NavManage";
import Router from "@/components/buttons/Router";

export default {
  name: "ProductManage",

  data: () => ({
    dataProduct: [],
    help: "",
  }),

  methods: {
    ...mapMutations(["TMP"]),

    edit(data) {
      this.TMP(data);
      this.$router.push("/product/update");
    },
  },

  computed: {
    ...mapGetters(["tmp"]),
  },

  components: {
    HeaderBack,
    NavManage,
    Router,
  },

  mounted() {
    api.get('/product/list').then( res => {
      this.dataProduct = res.data
    })
  }
};
</script>


<!-- CSS -->

<style scoped>
.container-nav-manage {
  margin-top: 15px;
}

section main {
  padding: 0px 15px 15px 15px;
}

table,
table th,
table td {
  border: 1px solid var(--color--1);
}

table th,
table td {
  padding: 2px 5px;
}

.controls {
  display: flex;
  justify-content: space-around;
}

.controls a {
  display: block;
  cursor: pointer;
  transition: opacity 0.3s;
}

.controls a:hover {
  opacity: 0.5;
}
</style>
