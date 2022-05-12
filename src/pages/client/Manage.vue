<!-- HTML Gerenciador de clientes -->

<template>
  <section>
    <header-back title="Gerenciador de clientes">
      <nav>
        <router-link to="/client/add" class="btn btn-forward add">
          <span class="material-icons">add</span>
          <span>Novo cliente</span>
        </router-link>
        <form>
          <input
            type="search"
            v-focus
            placeholder="Buscar"
            v-model="searchProxy"
          />
          <select v-model="limitProxy">
            <option value="5">limite 5</option>
            <option value="2">limite 2</option>
            <option value="15">limite 15</option>
          </select>
        </form>
      </nav>
    </header-back>

    <main>
      <div class="table">
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
                  <a @click.prevent="edit(row)" class="btn">
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
    </main>
  </section>
</template>



<!-- JavaScript -->

<script>
import { mapMutations, mapGetters } from "vuex";
import api from "@/http";
import HeaderBack from '@/components/headers/HeaderBack'


export default {
  name: "ClientManage",

  data: () => ({
    dataClient: [],
    form: {
      limit: 5,
      search: "",
    },
  }),

  methods: {
    ...mapMutations(["TMP"]),

    edit(da) {
      console.log(da);
      this.TMP(da);
      this.$router.push("/client/update");
    },

    setData(value, limit) {
      if (value) {
        api.get(`/client/name/${value}/${limit}`).then(({ data }) => {
          this.dataClient = data;
        });
      }
    },
  },

  computed: {
    ...mapGetters(["tmp"]),
    limitProxy: {
      get() {
        return this.form.limit;
      },
      set(val) {
        this.form.limit = val;
        this.setData(this.form.search, this.form.limit);
      },
    },
    searchProxy: {
      get() {
        return this.form.search;
      },
      set(val) {
        this.form.search = val;
        this.setData(this.form.search, this.form.limit);
      },
    },
  },

  components: {
    HeaderBack,
  },

  mounted() {
    this.setData("a", this.form.limit);
  },
};
</script>


<!-- CSS -->

<style scoped>

nav {
  display: flex;
  margin-top: 15px;
}

nav a {
  width: 33.33333%;
}

nav form {
  display: flex;
  width: 100%;
}

nav form input {
  margin: 0 15px;
}

nav form select {
  width: 33.33333%;
}

section main {
  padding: 0px 15px 15px 15px;
}

.table {
  overflow: scroll;
  padding-bottom: 15px;
  background: #f3f3f3;
}

.table table,
.table table th,
.table table td {
  border: 1px solid var(--color--1);
}

th,
td {
  padding: 2px 5px;
}

.controls {
  display: flex;
}

.controls > * {
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
}

.controls > *:hover {
  opacity: 0.5;
}
</style>
