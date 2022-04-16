<template>
  <div class="login">
    <div class="banner-show">
      <h1>BRASA</h1>
    </div>
    <div class="form-login">
      <component :is="form" @newRegister="newRegister"></component>
    </div>
  </div>
</template>

<script>
import FormLogin from "@/components/forms/FormLogin.vue";
import FormRegister from "@/components/forms/FormRegister.vue";

export default {
  name: "Login",
  data: () => ({
    form: "form-login",
  }),
  methods: {
    newRegister() {
      this.form = "form-register";
    },
  },
  components: {
    FormLogin,
    FormRegister,
  },
};
</script>

<style scoped>
.login {
  display: flex;
}

.banner-show {
  display: none;
}

.form-login {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .form-login {
    width: 375px;
  }
  .banner-show {
    display: flex;
    flex: 1;
  }
}
</style>