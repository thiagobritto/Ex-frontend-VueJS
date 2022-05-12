
<!-- HTML -->

<template>
  <header>
    <div class="top">
      <router-back>
        <i class="material-icons">arrow_back</i>
      </router-back>
      <h2>
        {{ title }}
      </h2>
    </div>
    <slot></slot>
  </header>
</template>



<!-- JavaScript -->

<script>
import RouterBack from "@/components/buttons/RouterBack";

export default {
  name: "HeaderBack",

  components: {
    RouterBack,
  },

  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>



<!-- CSS -->

<style scoped>

header{
  padding: 15px;
}

header div {
  display: flex;
  align-items: center;
  width: 100%;
}

header div h2 {
  margin-left: 10px;
}

</style>