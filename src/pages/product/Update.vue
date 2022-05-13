<!--HTML-->

<template>
  <section>
    <HeaderBack title="Cadastro de produtos" />
    <main>
      <div>
        <FormPageProduct labelbutton="Registrar" @submitform="submit" />
      </div>
      <div>help</div>
    </main>
  </section>
</template>



<!--JavaScript-->

<script>
import HeaderBack from "@/components/headers/HeaderBack";
import FormPageProduct from "@/components/forms/FormPageProduct";

export default {
  name: "ProductAdd",

  components: {
    HeaderBack,
    FormPageProduct,
  },

  methods: {
    submit(form) {
      console.log(form);
    },
  },
};
</script>



<!--CSS-->

<style scoped>
main {
  display: flex;
  padding: 0 10px;
}

main div {
  flex: 1;
}
</style>