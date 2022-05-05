<template>
  <div class="body-product-add">
    <h1 class="title-product-add">Cadastro de produtos</h1>
    <form class="form-product-add" @submit.prevent="submitForm()">
      <div class="form-item">
        <FormInput title="Código" numeric readonly
          @value="v => setValue('code', v)"/>
      </div>
      <div class="form-item">
        <FormInput title="Titulo" text
          @value="v => setValue('title', v)"/>
      </div>
      <div class="form-item">
        <FormInput title="Descrição" text 
          @value="v => setValue('describe', v)"/>
      </div>
      <div class="form-item">
        <FormInput title="Preço" price
          @value="v => setValue('price', v)"/>
      </div>
      <div class="form-item">
        <FormInput title="Quantidade" numeric
          @value="v => setValue('abount', v)"/>
      </div>
      <div class="form-item">
        <form-select :option="form.unity" :droppable="droppable">
          <ul>
            <li @click="selectValue('unt')">unt</li>
            <li @click="selectValue('kg')">kg</li>
            <li @click="selectValue('litro')">litro</li>
          </ul>
        </form-select>
      </div>
      <form-button>
        Adicionar
      </form-button>
    </form>
  </div>
</template>


<script>

import FormInput from '@/components/forms/Input.vue'
import FormSelect from '@/components/forms/Select.vue'
import FormButton from '@/components/forms/Button.vue'

export default {
  name: 'ProductAdd',
  data: () => ({
    form:{
      code: '',
      title: '',
      describe: '',
      price: '',
      abount: '',
      unity: 'und',
    },
    droppable: false
  }),
  components:{
    FormInput,
    FormSelect,
    FormButton
  },
  methods:{
    setValue(opt, value){
      this.form[opt] = value
    },
    selectValue(opt){
      this.form.unity = opt
      this.droppable = !this.droppable
    },
    submitForm(){
      console.log(this.form.title);
    }
  }
}
</script>


<style scoped>
.body-product-add{
  width: 50%;
  padding: 20px;
}
.title-product-add{
  margin-bottom: 20px;
}
.form-item{
  margin-bottom: 10px;
}
</style>