<template>
  <div>
    <div class="block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.block {
  font-size: 25px;
  color: #201f1f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: white;
  height: 90px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  list-style: none;
}
</style>