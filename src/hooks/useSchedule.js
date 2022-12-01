import { computed } from "vue";
export default function useSchedule(point) {

  console.log(point.value)
  // eslint-disable-next-line vue/return-in-computed-property
  const scheduleInfo = computed(() => {
   if (point.value.typeObj === "Офис") {
      return(point.value.Schedule.match(/офис:(.*)/gm));
    }
    if (point.value.typeObj === "Терминал") {
      return( point.value.Schedule.match(/платёжный терминал:(.*(?=, офис))/gm));
    }
    if (point.value.typeObj === "Банкомат") {
      return( point.value.Schedule.match(/^[^,]*/gm));
    }
  }); 
  return {
    scheduleInfo
  };
}
