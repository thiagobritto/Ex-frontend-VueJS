<template>
  <div>
    <form @submit.prevent="send">
      <div>
        <input
          type="text"
          placeholder="Código"
          class="code"
          :value="form.id_product"
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
        <input
          type="text"
          v-model="form.manufacturer"
          placeholder="Fabricante"
        />
      </div>
      <div>
        <input
          type="text"
          v-model="form.ncm"
          v-mask="'########'"
          placeholder="NCM"
        />
        <select v-model="form.id_category">
          <option v-for="(d, i) in category" :key="i" :value="d.id_category">
            {{ d.name }}
          </option>
        </select>
      </div>
      <div>
        <select v-model="form.id_unity">
          <option v-for="(d, i) in unity" :key="i" :value="d.id_unity">
            {{ d.name }}
          </option>
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
    <component
      :is="help.component"
      :title="help.title"
      :message="help.message"
      @close="closePopup"
    />
  </div>
</template>



<!--JavaScript-->

<script>
import { mask } from "vue-the-mask";

import api from "@/services/http";
import error from "@/services/http/error";
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
      id_category: 1,
      id_unity: 1,
      price: "",
      stock: "",
    },
    category: [],
    unity: [],
    help: {
      component: false,
      title: "",
      message: "",
    },
  }),

  props: {
    fillable: {
      type: Object,
      default: new Object(),
    },
    labelbutton: {
      type: String,
      default: "Button",
    },
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
    send() {
      this.$emit("submitform", this.form);
    },

    closePopup() {
      this.help.component = false;
    },
  },

  mounted() {
    api
      .get("/category/all")
      .then((res) => {
        this.category = res.data;
        if (!this.form.category)
          this.form.category = res.data[0]["id_category"];
      })
      .catch(({ response }) => {
        error.check(response, (isFatal, title, message) => {
          if (isFatal) {
            this.help.component = "alert";
            this.help.title = title;
            this.help.message = message;
          }
        });
      });

    api
      .get("/unity/all")
      .then((res) => {
        this.unity = res.data;
        if (!this.form.unity) this.form.unity = res.data[0]["id_unity"];
      })
      .catch((err) => {
        error.check(err.response, (isFatal, title, message) => {
          if (isFatal) this.openAlert(title, message);
        });
      });

    if (this.fillable.id_product) this.form = this.fillable;
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

.money {
  margin-bottom: 0;
}
</style>