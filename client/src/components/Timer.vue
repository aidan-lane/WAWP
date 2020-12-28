<template>
    <div>
        {{ time }}
    </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    startTime: Number
  },
  computed: {
      time () {
        let min = ""+Math.floor(this.startTime / 60);
        let sec = ""+(this.startTime % 60);
        sec = sec.length === 1 ? "0" + sec : sec;
        return min + ":" + sec;
      }
  }
}
</script>

<style scoped>

</style>