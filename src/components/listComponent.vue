<template>
  <div
    class="item"
    :value="modelValue"
    v-for="option in options"
    :key="option.value"
    @click="changeOption(option)"
  >
    <li class="list_item">
      {{ option.value }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "container",
    };
  },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    // eslint-disable-next-line no-unused-vars
  },

  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.value);
    },
  },
};
</script>
 
<style scoped>
.list_item:hover {
  color: red;
  cursor: pointer;
}
.item {
  display: flex;
}
</style>