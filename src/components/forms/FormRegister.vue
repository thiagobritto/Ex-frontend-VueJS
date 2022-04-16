<template>
    <div class="form-register">
        <form @submit.prevent.stop="register">
            <input class="input input-register" type="text" placeholder="Email">
            <input class="input input-register" type="text" placeholder="Nome completo">
            <input class="input input-register" type="text" placeholder="Nome de Usuário">
            <div class="password">
                <input class="input input-register input-password" :type="passwordType" placeholder="Senha">
                <div @click="showPassword()" class="btn btn-show-password">Mostrar</div>
            </div>
            <button class="btn btn-register">Registrar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FormRegister',
        data:()=>({
            passwordType: 'password'
        }),
        methods:{
            register(){
                this.$emit('register', 'oi')
            },
            showPassword(){
                if(this.passwordType == 'password'){
                    this.passwordType = 'text'
                } else {
                    this.passwordType = 'password'
                }
            }
        }
    }
</script>

<style scoped>
.form-register{
   display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #000;
  padding: 15px;
}

.input-register{
    margin-bottom: 15px;
    background: var(--input-register-bk);
    border: var(--input-register-bd);
    color: var(--input-register-cl);
}

.input-register::-webkit-input-placeholder{
  color: var(--input-register-cl);
  filter: brightness(60%);
}

.input-register:focus{
  border: var(--input-register-fc);
}

.password{
    position: relative;
}

.input-password{
    padding-right: 95px;
}

.btn-show-password{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    margin-right: 1px;
    width: 90px;
    height: calc(100% - 2px);
    color: #fff;
    filter: brightness(60%);
    background: rgba(255,255,255,0.2);
}

.btn-register{
    margin-top: 20px;
    background: var(--btn-login-bk);
    border: var(--btn-login-bd);
    color: var(--btn-login-cl);
}

.btn-register:hover{
    border: var(--btn-login-bd_hv);
}

</style>