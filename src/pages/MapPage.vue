

<template>
  <div class="wrapper">
    <GoogleMap
      api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
      style="width: 100%; height: 500px; position: absolute"
      :center="center"
      :zoom="15"
    >
      <Marker
        v-for="(location, i) in sortedLocationCity"
        :options="{ position: location }"
        :key="i"
        @click="clg(location)"
      ></Marker>
    </GoogleMap>

    <nav class="nav">
      <block-item-component class="wrapper_block">
        <list-component v-model="selectedFilter" :options="filterOptions" />
        <select-component
          v-model="selectedFilterCity"
          :options="selectUnique.arr._rawValue"
      /></block-item-component>
      <info-point-component v-model:show="dialogVisible"
        >iiyf</info-point-component
      >
    </nav>
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
  // eslint-disable-next-line no-unused-vars
  data() {
    return {
      filterOptions: [
        { value: "Банкомат" },
        { value: "Офис" },
        { value: "Терминал" },
      ],
    };
  },
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    const selectPoint = ref({});
    const dialogVisible = ref(false);
    const center = ref({ lat: 42.86885, lng: 74.61727 });
    const { locations } = useLocations();
    const { selectedFilter, sortedLocation } = useFilterLocation(locations);
    const { selectUnique } = useCity(locations);
    const { sortedLocationCity, selectedFilterCity } =
      useCityFilter(sortedLocation);
    const { scheduleInfo } = useSchedule(selectPoint);

    const clg = (location) => {
      selectPoint.value = location;
      dialogVisible.value = true;
      console.log(dialogVisible.value);
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
      selectPoint,
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
  padding-top: 30px;
  left: 0;
  overflow: auto;
}
.nav {
  width: 80%;
  margin: 0 auto;
}
.wrapper_block {
  top: 130px;
  position: absolute;
  width: 70%;
  margin: 0 auto;
}
</style>