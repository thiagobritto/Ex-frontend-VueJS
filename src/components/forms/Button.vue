<template>
  <div>
      <button class="send-button" @click="send">
        <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods:{
    send(){
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>
.send-button{
  display: block;
    width: 100%;
    margin: 0px auto;
    border: none;
    outline: none;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    user-select: none;
    background: var(--color--3);
    font-weight: 500;
    color: #fff;
    transition: .3s;
    transition-property: background;
}

.send-button:hover {
    background: var(--color--4);
}
</style>