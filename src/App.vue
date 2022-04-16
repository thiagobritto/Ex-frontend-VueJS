<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
    setup(){
      const defaultLayout = `default`;

      const { currentRoute } = useRouter();
      
      const layout = computed(
        () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
      );
      
      return {
        layout
      }
    }
}
</script>
