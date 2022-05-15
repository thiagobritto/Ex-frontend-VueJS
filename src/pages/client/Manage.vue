<!-- HTML Gerenciador de clientes -->

<template>
  <section>
    <HeaderBack title="Gerenciador de clientes">
      <div class="container-nav-manage">
        <NavManage @search="search" :badsearch="badSearch">
          <template v-slot:button>
            <Router link="/client/add" primary>
              <span class="material-icons">add</span>
              <span>Novo cliente</span>
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
              <th>nome</th>
              <th>CPF/CNPJ</th>
              <th>telefone</th>
              <th>logradouro</th>
              <th>controles</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in dataClient" :key="index">
              <td>{{ row.id_client }}</td>
              <td>{{ row.first_name }} {{ row.last_name }}</td>
              <td>{{ row.cpf_cnpj }}</td>
              <td>{{ row.phone }}</td>
              <td>{{ row.address }}</td>
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
      <component
        :is="help.component"
        :title="help.title"
        :message="help.message"
        @click="closePopup"
      />
    </main>
  </section>
</template>



<!-- JavaScript -->

<script>
import { mapMutations, mapGetters } from "vuex";

import api from "@/services/http";
import error from "@/services/http/error";

import HeaderBack from "@/components/headers/HeaderBack";
import NavManage from "@/components/navs/NavManage";
import Router from "@/components/buttons/Router";

export default {
  name: "ClientManage",

  data: () => ({
    badSearch: false,
    dataClient: [],
    help: {
      component: false,
      title: "",
      message: "",
    },
  }),

  methods: {
    ...mapMutations(["TMP"]),

    closePopup() {
      this.help.component = false;
    },

    search(form) {
      if (form.search) {
        api
          .get(`/client/search/${form.search}/${form.limit}`)
          .then((res) => {
            this.dataClient = res.data;
            this.badSearch = false;
          })
          .catch((err) => {
            error.check(err.response, (isFatal, title, message) => {
              if (isFatal) {
                this.help.component = 'alert'
                this.help.title = title 
                this.help.message = message
              } else {
                this.badSearch = true;
              }
            });
          });
      }
    },

    edit(data) {
      this.TMP({
        update: true,
        data,
      });
      this.$router.push("/client/update");
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
    this.search({
      search: "a",
      limit: "5",
    });
  },
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
