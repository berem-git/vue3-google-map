<template>
    <div>
          <div class="block">
           <slot></slot>
          </div>  
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style scoped>
.block{
   background-color: white;
   height: 70px;
   border-radius: 24px;
   display: flex;
   justify-content: space-between;
   align-items: center; 
   padding: 0 50px;
   list-style: none;
   cursor: pointer;
}

</style>