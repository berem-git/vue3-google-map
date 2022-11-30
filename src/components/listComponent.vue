<template>
  <div
    class="item"
    :value="modelValue"
    v-for="option in options"
    :key="option.value"
  >
   <li  @click="changeOption(option)"> {{ option.value }}</li>
  </div>
</template>

<script>  
    export default {
    props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  
  methods: { 
    changeOption(event) {  
      this.$emit('update:modelValue', event.value);
    },
    forceRerender(){
      this.$forceUpdate();
    }
  },
}
</script>
 
<style scoped>
.item {
  display: flex;
}
</style>