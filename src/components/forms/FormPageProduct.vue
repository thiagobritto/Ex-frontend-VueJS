<template>
  <form @submit.prevent="send">
    <div>
      <input
        type="text"
        v-model="form.code"
        placeholder="Código"
        class="code"
        disabled
      />
      <input
        type="text"
        v-model="form.description"
        placeholder="Descrição"
        v-focus
        required
      />
    </div>
    <div>
      <input type="text" v-model="form.provide" placeholder="Fornecedor" />
      <input type="text" v-model="form.manufacturer" placeholder="Fabricante" />
    </div>
    <div>
      <input
        type="text"
        v-model="form.ncm"
        v-mask="'########'"
        placeholder="NCM"
      />
      <select v-model="form.category">
        <option value="sem categoria">sem categoria</option>
        <option value="limpeza">limpeza</option>
        <option value="higiene">higiene</option>
      </select>
    </div>
    <div>
      <select v-model="form.unity">
        <option selected value="und">und</option>
        <option value="kg">kg</option>
        <option value="litro">litro</option>
      </select>
    </div>
    <div>
      <div class="money">
        <span>R$</span>
        <input
          type="text"
          v-model="priceProxy"
          v-money="'000.000.000,00'"
          placeholder="Preço"
          maxlength="14"
          ref="price"
          required
        />
      </div>
      <input
        type="text"
        v-model="stockProxy"
        placeholder="Estoque"
        maxlength="12"
        v-volume="'00000000.000'"
      />
    </div>
    <div>
      <ButtonSubmit :title="labelbutton" />
    </div>
  </form>
</template>



<!--JavaScript-->

<script>
import { mask } from "vue-the-mask";
import MaskNumber from "@/services/common/MaskNumber";
import ButtonSubmit from "@/components/buttons/ButtonSubmit";

export default {
  name: "FormPageProduct",

  data: () => ({
    form: {
      code: "",
      manufacturer: "",
      provider: "",
      description: "",
      ncm: "",
      category: "sem categoria",
      unity: "und",
      price: "0.00",
      stock: "",
    },
    help: "",
  }),

  props: {
    labelbutton: {
      type: String,
      default: 'Button'
    }
  },

  directives: {
    mask,
    money: {
      mounted(el, binding) {
        el.oninput = (evt) => {
          if (!evt.isTrusted) return;
          el.value = MaskNumber.money(el.value, binding.value);
        };
      },
    },

    volume: {
      mounted(el, binding) {
        el.oninput = (evt) => {
          if (!evt.isTrusted) return;
          el.value = MaskNumber.volume(el.value, binding.value);
        };
      },
    },
  },

  computed: {
    priceProxy: {
      get() {
        return MaskNumber.money(this.form.price, "000.000.000,00");
      },
      set(val) {
        this.form.price = MaskNumber.money(val, "000000000.00");
      },
    },

    stockProxy: {
      get() {
        return MaskNumber.volume(this.form.stock, "00000000.000");
      },
      set(val) {
        this.form.stock = MaskNumber.volume(val, "00000000.000");
      },
    },
  },

  components: {
    ButtonSubmit,
  },

  methods: {
    send(){
      this.$emit('submitform', this.form)
    }
  },
};

</script>



<!--CSS-->

<style scoped>
form {
  width: 100%;
}

form div {
  display: flex;
  margin-bottom: 10px;
}

form input,
form button,
form select {
  margin: 0px 5px;
}

.code {
  width: 33.3333%;
}

.money{
  margin-bottom: 0;
}
</style>