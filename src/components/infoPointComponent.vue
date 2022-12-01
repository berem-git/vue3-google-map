<template>
    <div class="dialog" v-if="show" @click="hideDialog">
      <div class="dialog__content">
       <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import toggleMixin from "@/mixins/toggleMixin";
  
  export default {
    mixins: [toggleMixin],
  }
  </script>
  
  <style scoped>
  .dialog {

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }
  
  .dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  </style>
  