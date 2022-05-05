<template>
  <div :class="['select', {'select-droppable': droppableData}]">
    <div @click="open" class="selected">
      <span>{{option}}</span>
      <span class="material-icons closed">arrow_drop_down</span>   
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data: ()=>({
    droppableData: false
  }),
  props:{
    option: {
      type: String,
      default: 'select'
    },
    droppable: {
      type: Boolean,
      default: false
    },
  },
  watch:{
    droppable() {
      this.open()
    }
  },
  methods: {
    open(){
      this.droppableData = !this.droppableData
    },
  },
  mounted(){
    this.droppableData = this.droppable
  }
}
</script>

<style>
.select{
  position: relative;
  overflow: hidden;
}
.select-droppable{
  overflow: unset;
}
.select ul{
  list-style: none;
  position: absolute;
  width: 100%;
  background: #f3f3f3;
  box-shadow: 0 3px 12px -6px var(--box--shadow--card);
}
.selected{
  border: 1px solid rgba(48, 51, 59, .2);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.selected, .select ul li {
  width: 100%;
  margin: 0px auto;
  transition: 0.3s;
  font-size: 16px;
  padding: 10px;
  transition: .4s;
  transition-property: border, background;
  cursor: pointer;
  user-select: none;
}
.selected:hover {
    border: 1px solid var(--color--3);
}
.select ul li:hover{
  background: var(--bk--link--hover);
}
.select .selected span.closed{
  transform: rotate(90deg);
  transition: .3s;
  transition-property: transform;
}

.select-droppable .selected span.closed{
  transform: rotate(0deg);
}
</style>
