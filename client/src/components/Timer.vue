<template>
    <div class="timer">
        {{ time }}
    </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    startTime: Number
  },
  data () {
    return {
      timeLeft: this.startTime || 0
    }
  },
  computed: {
      time () {
        let min = ""+Math.floor(this.timeLeft / 60);
        let sec = ""+(this.timeLeft % 60);
        sec = sec.length === 1 ? "0" + sec : sec;
        return min + ":" + sec;
      }
  },
  methods: {
    startTimer(t) {
      this.timeLeft = t;
      var id = setInterval(() => {
        if  (this.timeLeft == 0) {
          this.$emit("timeEnd");
          clearInterval(id);

          return;
        }
        this.timeLeft--;
      }, 1000);
    }
  }
}
</script>

<style scoped>
.timer {
  font-size: 42px;
  font-weight: bold;

  background: -webkit-linear-gradient(#F2D50F, #DA0641);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>