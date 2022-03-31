<template>
  <div class="login">
    <div class="presentation">
      <h1>BRASA</h1>
    </div>
    <div class="form-login">
      <form-login/>
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'Login',
  data: ()=>({
  }),
  methods:{
    
  },
  components: {
    FormLogin
  }
}
</script>

<style scoped>
.login{
  display: flex;
}

.presentation{
  display: none;
}

.form-login, .presentation{
  width: 100%;
}

@media screen and (min-width: 768px){
  .form-login{
    width:400px;
  }
  .presentation{
    display: block;
  }
}

</style>