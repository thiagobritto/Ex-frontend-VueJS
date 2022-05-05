<template>
  <div class="input-form">
      <div v-if="price" class="price">
        <div class="mhoney">
            R$
        </div>
        <input 
            :placeholder="title"
            :readonly="readonly"
            type="text" 
            value="0,00"
            maxlength="20"
            @keyup="valuePrice"
        >
      </div>
      <div v-if="numeric">
        <input 
            :placeholder="title"
            :readonly="readonly"
            type="text"
            maxlength="20"
            @keyup="valueInteger"
        >
      </div>
      <div v-if="text">
          <input 
            :placeholder="title"
            :readonly="readonly"
            type="text" 
            v-model="valueCom"
            min="0"
        >
      </div>
  </div>
</template>

<script>
import MaskNumber from '@/services/MaskNumber.js'
export default {
    name: 'Input',
    data:()=>({
        valueV: ''
    }),
    props:{
        title: {
            type: String,
            default: 'Title'
        },
        text: {
            type: Boolean,
            default: false
        },
        numeric: {
            type: Boolean,
            default: false
        },
        price: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
    },
    computed:{
        valueCom: {
            get() {
                return this.value
            },
            set(val)  {
                this.$emit('value', val)
            }
        },
    },
    methods: {
        valuePrice({target}){
            this.$emit('value', MaskNumber.price(target.value))
            target.value = MaskNumber.price(target.value,'000.000.000.000.000,00')
        },
        valueInteger({target}){
            this.$emit('value', MaskNumber.numeric(target.value))
            target.value = MaskNumber.numeric(target.value, '000,000')
        }
    }
}
</script>

<style scoped>
.input-form{
    position: relative;
}
.input-form .price .mhoney{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
}
.input-form .price input{
    padding-left: 32px;
}
.input-form input {
    display: block;
    width: 100%;
    margin: 0px auto;
    border: none;
    outline: none;
    text-decoration: none;
    transition: 0.3s;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
}

.input-form input {
    border: 1px solid rgba(48, 51, 59, .2);
    transition: .4s;
    transition-property: border;
}

.input-form input:focus{
    border: 1px solid var(--color--5);
}
</style>