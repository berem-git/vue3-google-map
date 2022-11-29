<template>
    <div
      v-for="option in city"
      :key="option.value"
      @click="test(option.value)"
    > 
     {{ option.value }}
</div>

</template>

<script> 
    export default {
    props: {
        city: {
      type: Array,
      default: () => []
    },
  },
  setup() {
    const test=(option)=>
    {
        console.log(option)
    }
    return{test}
  }
    }
</script>
 
<style scoped>

</style>