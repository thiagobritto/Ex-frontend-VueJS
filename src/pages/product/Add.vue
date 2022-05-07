<template>
  <div class="container-product-add">
    <div class="product-add">
      <h2>Cadastro de produtos</h2>
      <form>
        <div>
          <input 
            type="text" 
            v-model="form.code"
            placeholder="Código"
            disabled
            class="code"
          >
          <input 
            type="text" 
            v-model="form.description"
            placeholder="Descrição"
            v-focus
            required
          >
        </div>
        <div>
          <input 
            type="text" 
            v-model="form.provide"
            placeholder="Fornecedor"
          >
          <input 
            type="text" 
            v-model="form.manufacturer"
            placeholder="Fabricante"
          >
        </div>
        <div>
          <input 
            type="text" 
            v-model="form.ncm"
            v-mask="'########'"
            placeholder="NCM"
          >
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
        <div class="money">
          <span>R$</span>
          <input 
            type="text" 
            v-model="priceProxy"
            v-money="'000.000.000,00'"
            placeholder="Preço"
            maxlength="14"
            required
          >
        </div>
        <div>
          <button>Adicionar</button>
        </div>
      </form>
    </div>
    <div class="help">
      <p>
        {{ form }}
      </p>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import MaskNumber from "@/services/MaskNumber";
import MoneyMask from "@/services/MoneyMask";

export default {
  name: "ProductAdd",
  data: () => ({
    form: {
      code: '',
      manufacturer: '',
      provider: '',
      description: '',
      ncm: '',
      category: 'sem categoria',
      unity: 'und',
      price: '0.00'
    },
    help: '',
  }),
  directives: {
    mask,
    money: MoneyMask
  },
  computed: {
    priceProxy: {
      get(){
        return MaskNumber.money(this.form.price, '000.000.000,00')
      },
      set(val){
        this.form.price = MaskNumber.money(val, '000000000.00')
      }
    }
  }
};
</script>

<style scoped>
.container-product-add {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.product-add {
  flex: 1;
  padding: 10px;
}

.product-add h2 {
  margin-bottom: 15px;
}

.product-add form div {
  display: flex;
}

.product-add form input,
.product-add form select,
.product-add form button {
  margin: 5px;
}

.code{
  width: 100px;
  text-align: center;
}
.help {
  flex: 1;
  padding: 10px;
}
</style>