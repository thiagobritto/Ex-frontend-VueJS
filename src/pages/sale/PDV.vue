<template>
  <div class="pdv">
    <div class="sale-display">
      <h2>Vendas</h2>
      <form @submit.prevent="addProd">
        <div>
          <input
            class="code"
            type="text"
            placeholder="Código"
            v-model="form.code"
            ref="code"
          />
          <input
            type="text"
            placeholder="Descrição"
            v-model="form.description"
          />
        </div>
        <div>
          <input type="text" placeholder="Unidade" v-model="form.unity" />
          <input type="text" placeholder="Quatidade" v-model="form.quant" />
          <input
            type="text"
            placeholder="Valor unitario"
            v-model="form.price"
          />
          <input
            type="text"
            placeholder="Valor total"
            :value="form.price * form.quant"
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
    <div class="note-display scrollbar-hide">
      <header class="note-header">
        <h3>THOMC /////</h3>
        <div>
          <h4>Thomc infotech</h4>
          <p>Rua joao alves flor, 3025</p>
          <p>cep 59255-000</p>
          <p>fone (84) 3282-2555</p>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>DESCRIÇÃO</th>
            <th>QUANT</th>
            <th>TIPO</th>
            <th>VALOR</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody v-if="list.length > 0">
          <tr v-for="(x, i) in list" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ x.code }} - {{ x.description }}</td>
            <td class="center">{{ x.quant }}</td>
            <td class="center">{{ x.unity }}</td>
            <td>R$&nbsp;{{ x.price }}</td>
            <td class="rigth">R$&nbsp;{{ soma(x.price * x.quant, i) }}</td>
          </tr>
        </tbody>
      </table>
      <footer class="note-footer">
        <p v-if="subtotal.length > 0">
          Subtotal....: R$ {{ subtotal.reduce((soma, i) => soma + i) }}
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalePDV",
  data: () => ({
    form: {
      code: "",
      description: "",
      unity: "",
      quant: "",
      price: "",
    },
    list: [],
    subtotal: [],
  }),
  methods: {
    soma(val, i) {
      this.subtotal[i] = val;
      return val;
    },
    addProd() {
      const list = {};
      for (let x in this.form) {
        if (!this.form[x]) {
          this.$refs.code.focus();
          return
        }
        list[x] = this.form[x];
        this.form[x] = "";
      }
      this.list.push(list)
      this.$refs.code.focus()
    },
  },
};
</script>

<style scoped>
.pdv {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 10px;
}
.sale-display {
  flex: 1;
  padding: 10px;
}
.sale-display h2 {
  margin-bottom: 20px;
}
.sale-display form div {
  display: flex;
}
.sale-display form div input,
.sale-display form div button {
  margin: 5px;
}
input.code {
  width: 100px;
}
.note-display {
  width: 400px;
  background: #fff;
  font-size: 12px;
  padding: 10px;
  background: #ddd;
  border: 1px solid var(--color--2);
  overflow-y: scroll;
}
.note-header {
  display: flex;
  margin: 20px 10px;
}
.note-header > * {
  flex: 1;
}
.note-footer {
  margin: 20px 0;
  border-top: 1px solid #000;
  padding: 5px 0;
}
.note-display table {
  width: 100%;
  border-spacing: 0;
}
.note-display table thead tr th {
  padding: 2px;
  border-bottom: 1px solid #000;
}
.note-display table tbody tr td {
  padding: 2px;
  vertical-align: top;
}
.note-display table tbody tr:first-child td {
  padding-top: 10px;
}
.center {
  text-align: center;
}
.rigth {
  text-align: right;
}
</style>