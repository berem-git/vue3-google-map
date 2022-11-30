<template>
  <select :value="modelValue" @change="changeOption" @click="forceRerender">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.value }}
    </option> 
  </select>

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
      console.log( event.target.value)
      this.$emit('update:modelValue', event.target.value);
    },
    forceRerender(){
      this.$forceUpdate();
    }
  },
}
</script>

<style scoped>
</style>