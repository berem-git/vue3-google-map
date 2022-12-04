export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    selectPiont: {
      type: Object,
      default: () => [],
    },
    schedule: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
