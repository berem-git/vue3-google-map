<template>
  <div class="select-dropdown">
  <select :value="modelValue" @change="changeOption" @click="forceRerender">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.value }}
    </option> 
  </select>
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
      this.$emit('update:modelValue', event.target.value);
    },
    forceRerender(){
      this.$forceUpdate();
    }
  },
}
</script>

<style scoped>
.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: #E6E6E6;
  border-radius: 4px;
}
.select-dropdown select {
  font-size: 1rem;
  font-weight: normal;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
  appearance: none;
}
.select-dropdown select:active, .select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #aaa;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>