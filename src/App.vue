<template>
  <MapPage />
</template>

<script>
import MapPage from './pages/MapPage.vue'

export default {
  name: 'App',
  components: {
    MapPage
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
/* ::-webkit-scrollbar {
    width: 10px;
}
 
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
} */
</style>
