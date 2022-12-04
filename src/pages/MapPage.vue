<template>
  <div class="wrapper">
    <nav class="nav">
      <div class="content_block">
      <block-item-component>
        <list-component v-model="selectedFilter" :options="filterOptions" />
        <select-component v-model="selectedFilterCity" :options="selectUnique"
      /></block-item-component>
    </div>
    </nav>
    <GoogleMap
      api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
      style="width: 100%; height: 80vh"
      :center="center"
      :zoom="15"
    >
      <Marker
      style=" font-size: 22px"
        v-for="(location, i) in sortedLocationCity"
        :options="{ position: location }"
        :key="i"
        @click="clg(location)"
      ></Marker>
    </GoogleMap>
    <div class="block_info">
      <info-point-component
        v-model:show="dialogVisible"
        v-model:schedule="scheduleInfo"
        v-model:selectPiont="selectPiontInfo"
      />
    </div>
  </div>
</template>
  <script>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { useLocations } from "@/hooks/useLocation";
import useFilterLocation from "@/hooks/useFilterLocation";
import selectComponent from "@/components/selectComponent.vue";
import useCity from "@/hooks/useCity";
import useCityFilter from "@/hooks/useCityFilter";
import blockItemComponent from "@/components/blockItemComponent.vue";
import listComponent from "@/components/listComponent.vue";
import useSchedule from "@/hooks/useSchedule";
import infoPointComponent from "@/components/infoPointComponent.vue";
export default {
  components: {
    GoogleMap,
    Marker,
    selectComponent,
    blockItemComponent,
    listComponent,
    infoPointComponent,
  },
  data() {
    return {
      filterOptions: [
        { value: "Банкомат", id: 1 },
        { value: "Офис", id: 2 },
        { value: "Терминал", id: 3 },
      ],
    };
  },
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    const selectPiontInfo = ref([]);
    const dialogVisible = ref(false);
    const center = ref({ lat: 42.86885, lng: 74.61727 });

    const { locations } = useLocations();
    const { selectedFilter, sortedLocation } = useFilterLocation(locations);
    const { selectUnique } = useCity(locations);
    const { sortedLocationCity, selectedFilterCity } =
      useCityFilter(sortedLocation);
    const { scheduleInfo } = useSchedule(selectPiontInfo);

    const clg = (location) => {
      selectPiontInfo.value = location;
      dialogVisible.value = true;
    };
    return {
      center,
      clg,
      locations,
      sortedLocation,
      selectedFilter,
      selectUnique,
      sortedLocationCity,
      selectedFilterCity,
      selectPiontInfo,
      scheduleInfo,
      dialogVisible,
    };
  },
};
</script>
  
  <style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;

}
.nav {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 100px;
  z-index: 1;
}
.content_block{
  position: relative;
width: 80%;
margin: 0 auto;
}
.block_info {
  position: absolute;
  top: 30%;
  transform: translate(0, -50%);
  left: 30px;
}
</style>