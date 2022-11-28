<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
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
    //console.log(this.options)
      this.$emit('update:modelValue', event.target.value);
    }
  }
    }
</script>

<style scoped>

</style>