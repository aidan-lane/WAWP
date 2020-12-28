<template>
  <div>
    <div class="title"> 
      What are we playing?
    </div>
    <Timer :startTime=100 />
    <div v-if="state === 0">
      <b-button 
        variant="primary"
        @click="startPoll"
        size="lg"
      >
        Start Poll
      </b-button>
    </div>
    <div v-if="state === 1">
      Add a suggestion
    </div>
    <div v-if="state === 2">
      Vote!
    </div>
    <div v-if="state === 3">
      Results
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Timer from "./Timer";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default {
  name: "Poll",
  components: {
    Timer
  },
  data () {
    return {
      items: [],
      state: 0
    }
  },
  sockets: {
    /* Receive current poll state */
    state(val) { 
      this.state = val;

      if (this.state === 2) { // voting state
        this.getItems();
      }
      else if (this.state === 3) { // results state

      }
    }
  },
  methods: {
    getItems() {
      instance.get("items")
      .then(res => {
        this.items = res.data;
      });
    },
    startPoll() {
      this.$socket.client.emit("startPoll");
    },
    addItem () {
      this.$socket.client.emit("newItem", {name: "test", desc: "description!"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 10px;
}

a {
  color: #42b983;
}
</style>
