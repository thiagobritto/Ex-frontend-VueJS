<template>
  <nav>
    <div class="col-1">
      <slot name="button"></slot>
    </div>
    <div class="col-2">
      <input
        type="search"
        placeholder="Buscar"
        v-focus
        v-model="searchProxy"
        :class="{ bad: badsearch }"
      />
    </div>
    <div class="col-3">
      <select v-model="limitProxy">
        <option value="5">limite 5</option>
        <option value="10">limite 10</option>
        <option value="15">limite 15</option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavManage",

  data: () => ({
    form: {
      limit: 5,
      search: "",
    },
  }),

  props: {
    badsearch: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    limitProxy: {
      get() {
        return this.form.limit;
      },
      set(val) {
        this.form.limit = val;
        this.$emit("search", this.form);
      },
    },
    searchProxy: {
      get() {
        return this.form.search;
      },
      set(val) {
        this.form.search = val;
        this.$emit("search", this.form);
      },
    },
  },

  mounted() {
    this.$emit("search", this.form);
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.col-1 {
  width: 25%;
  margin-right: 10px;
}

.col-2 {
  width: 50%;
  margin-right: 10px;
}

.col-3 {
  width: 25%;
}

.bad:focus {
  outline: red solid 1px !important;
}
</style>