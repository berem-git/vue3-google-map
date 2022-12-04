<template>
  <div class="dialog" v-if="show">
    <div class="dialog__content">
      <p @click="hideDialog">Закрыть</p>
      <div > 
          {{ selectPiont.typeObj }}
      </div>
      <div > 
          {{ selectPiont.name }}
      </div>
      <div > 
          {{ selectPiont.address }}
      </div>
      <div > 
        {{ schedule[0] }}
      </div>
      
    </div>
  </div>
</template>
  
  <script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  mixins: [toggleMixin],
};
</script>
  
  <style scoped>
.dialog {
  font-size: 22px;
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  width: 340px;
  height: 440px;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}


</style>
  