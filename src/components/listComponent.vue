<template>
  <div
  @click="changeOption(option)"
    class="item"
    :value="modelType"
    v-for="option in options"
    :key="option.value"
  >
   <li> {{ option.value }}</li>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelType: {
      type: String,
    },
  },
  methods: {
    changeOption(event) {
      console.log(event.value)
      this.$emit("update:modelType", event.value);
    },
  },
};
</script>
 
<style scoped>
.item {
  display: flex;
}
</style>