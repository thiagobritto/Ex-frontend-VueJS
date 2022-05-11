<!-- HTML -->

<template>
  <form @submit.prevent="send">
    <div>
      <input
        type="text"
        placeholder="Nome"
        v-focus
        v-model="form.first_name"
        title="Preencha com um nome"
        required
      />
      <input type="text" placeholder="Sobrenome" v-model="form.last_name" />
    </div>
    <div>
      <input
        type="email"
        placeholder="E-mail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        v-model="form.email"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="CPF ou CNPJ"
        v-mask="['###.###.###-##', '##.###.###/####-##']"
        v-model="form.cpf_cnpj"
      />
      <input
        type="text"
        placeholder="Telefone"
        pattern=".{18,}"
        v-mask="['+55 (##) ####-####', '+55 (##) #####-####']"
        v-model="form.phone"
        title="Preencha com um numero de telefone"
        required
      />
    </div>
    <br />
    <div>
      <input
        type="text"
        placeholder="Logradouro"
        v-model="form.address"
        title="Preencha com um enderoço"
        required
      />
      <input
        class="input-number"
        type="text"
        placeholder="Numero"
        v-model="form.number"
        maxlength="5"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Bairro"
        v-model="form.district"
        title="Preencha com um bairro"
        required
      />
      <input
        type="text"
        placeholder="CEP"
        v-mask="'#####-###'"
        v-model="form.zipcode"
        @keyup="setEndereco"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Cidade"
        v-model="form.city"
        :disabled="formState.disabledCity"
        title="Preencha com uma cidade"
        required
      />
    </div>
    <div>
      <input type="text" placeholder="Complemento" v-model="form.address2" />
    </div>
    <div>
      <button>Adicionar</button>
    </div>
  </form>
</template>



<!-- JavaScript -->

<script>

import { mask } from "vue-the-mask";

export default {
  name: "ClientAdd",
  data: () => ({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      cpf_cnpj: "",
      phone: "",
      address: "",
      address2: "",
      district: "",
      zipcode: "",
      number: "",
      city: "",
      uf: "",
    },
    formState: {
      disabledCity: false,
    },
  }),
  props: {
    fillable: {
      type: Object,
      default: new Object
    }
  },
  directives: {
    mask,
  },
  methods: {
    setEndereco() {
      const cep = this.form.zipcode.replace("-", "");

      if (cep.length < 1) this.formState.disabledCity = false;

      if (cep.length > 7) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((obj) => {
            const { localidade, uf, bairro, logradouro } = obj;
            if (localidade) {
              this.form.city = localidade + " / " + uf;
              this.form.uf = uf;

              this.formState.disabledCity = true;

              if (bairro) this.form.district = bairro;
              if (logradouro) this.form.address = logradouro;
            }
          });
      }
    },
    send(){
      this.$emit('submitform', this.form)
    }
  },
  mounted(){
    if(this.fillable.id_client)
      this.form = this.fillable
  }
};
</script>



<!-- CSS -->

<style scoped>

form {
  width: 100%;
}

form div {
  display: flex;
  margin-bottom: 10px;
}

form div {
  margin-bottom: 10px;
}

form div input,
form div button {
  margin: 0 5px;
}

</style>
