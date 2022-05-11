<!-- HTML -->

<template>
  <section class="default-layout">
    <nav class="nav">
      <h1 class="logo">THOMC /////</h1>
    </nav>
    <section class="dashboard">
      <MenuDefaultLayout/>
      <section class="page">
        <slot></slot>
      </section>
    </section>
    <footer class="footer">footer</footer>
  </section>
</template>



<!-- JavaScript -->

<script>

import MenuDefaultLayout from '@/components/MenuDefaultLayout'

export default {
  
  name: "DefaultLayout",

  components:{
    MenuDefaultLayout
  },

};

</script>



<!-- CSS -->

<style scoped>

.nav {
  display: flex;
  align-items: center;
  height: var(--heigth--nav);
  width: 100%;
  background: var(--bk--nav);
}

.logo {
  color: var(--color--logo);
  font-size: 28px;
  font-weight: 500;
  margin-left: 15px;
}

.dashboard {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: calc(100vh - calc(var(--heigth--nav) + var(--heigth--footer)));
}

section.page {
  height: 100%;
  width: calc(100% - var(--width--aside));
  background: #fff;
  overflow-y: scroll;
  scrollbar-color: var(--color--2) #fff;
  scrollbar-width: auto;
}

section.page::-webkit-scrollbar{
  width: 9px;
  height: 5px;
  background: #fff;
}

section.page::-webkit-scrollbar-thumb{
  width: 5px !important;
  background: var(--color--2);
  border-radius: 3px 5px 5px 3px;
  border-right: 3px solid #fff;
}

.footer {
  height: var(--heigth--footer);
  background: var(--bk--footer);
  color: #fff;
}

</style>