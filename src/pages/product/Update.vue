<!--HTML-->

<template>
  <section>
    <HeaderBack title="Atualizar produto" />
    <main>
      <div>
        <FormPageProduct
          :fillable="fill"
          labelbutton="Registrar"
          @submitform="submit"
        />
      </div>
      <div></div>
    </main>
  </section>
</template>



<!--JavaScript-->

<script>
import { mapGetters } from "vuex";

import HeaderBack from "@/components/headers/HeaderBack";
import FormPageProduct from "@/components/forms/FormPageProduct";

export default {
  name: "ProductUpdate",

  data: () => ({
    fill: {},
  }),

  components: {
    HeaderBack,
    FormPageProduct,
  },

  methods: {
    submit(form) {
      console.log(form);
    },
  },

  computed: {
    ...mapGetters(["tmp"]),
  },

  created() {
    if (this.tmp.update) this.fill = this.tmp.data;
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