<template>
    <div>
          <div class="block">
           <slot></slot>
          </div>  
    </div>
</template>

<script>
export default {
    props: {
    modelTypeObj: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
    setup () {
        return {}
    }
}
</script>

<style scoped>
.block{
background-color: white;
  width: 70vw;
  height: 80px;
  border-radius: 24px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center; 
   padding: 0 50px;
}

</style>