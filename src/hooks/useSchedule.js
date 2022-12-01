import { computed } from "vue";
export default function useSchedule(piont) {
  console.log(piont.value)
  // eslint-disable-next-line vue/return-in-computed-property
  const scheduleInfo = computed(() => {
   if (piont.value.typeObj === "Офис") {
      return(piont.value.Schedule.match(/офис:(.*)/gm));
    }
    if (piont.value.typeObj === "Терминал") {
      return( piont.value.Schedule.match(/платёжный терминал:[^,]*/gm));
    }
    if (piont.value.typeObj === "Банкомат") {
      return( piont.value.Schedule.match(/^[^,]*/gm));
    }
  }); 
  return {
    scheduleInfo,
  };
}
