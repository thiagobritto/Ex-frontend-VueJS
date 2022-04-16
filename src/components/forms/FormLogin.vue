<template>
  <div class="form-login">
    <form>
      <input class="input input-login" type="text" placeholder="Nome de Usuário ou Endereço de Email">
      <input class="input input-login" type="password" placeholder="Senha">
      <button class="btn btn-login">Entrar</button>
    </form>
    <p class="link-password-callback">
      <a href="#">Esqueceu da senha?</a>
    </p>
    <p class="label-register">É a sua primeira vez no APP?</p>
    <button @click="newRegister" class="btn btn-register">Registrar-se</button>
    <button class="btn btn-register-social">Entrar com Google</button>
    <button class="btn btn-register-social">Entrar com Facebook</button>
  </div>
</template>

<script>

export default {
  name: 'FormLogin',
  data: ()=>({
  }),
  methods:{
    newRegister(){
      this.$emit('newRegister')
    }
  },
}

</script>

<style scoped>
.form-login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #000;
  padding: 15px;
}

.btn, .input{
  margin-bottom: 15px;
}

.input-login{
    background: var(--input-login-bk);
    border: var(--input-login-bd);
    color: var(--input-login-cl);
}

.input-login::-webkit-input-placeholder{
  color: var(--input-login-cl);
  filter: brightness(60%);
}

.input-login:focus{
  border: var(--input-login-fc);
}

.btn-login{
    background: var(--btn-login-bk);
    border: var(--btn-login-bd);
    color: var(--btn-login-cl);
}

.btn-login:hover{
    border: var(--btn-login-bd_hv);
}

.link-password-callback{
  text-align: center;
  padding: 30px 0;
}

.link-password-callback a{
  color: cyan;
}

.label-register{
  color: #999;
  padding: 10px 0;
}

.btn-register{
    background: var(--btn-action-bk);
    color: var(--btn-action-cl);
    border: var(--btn-action-bd);
}

.btn-register:hover{
    border: var(--btn-action-bd_hv);
}

.btn-register-social{
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
}

.btn-register-social:hover{
    border: 1px solid rgba(255, 255, 255, 0.4);
}

</style>