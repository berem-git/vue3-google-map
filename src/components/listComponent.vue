<template>
  <div
    class="item"
    :value="modelValue"
    v-for="option in options"
    :key="option.value"
    @click="changeOption(option)"
  >
    <li>
      {{ option.value }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'container',
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
.item {
  display: flex;
}

</style>