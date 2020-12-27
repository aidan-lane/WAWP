<template>
  <div>
    <div v-if="state === 0">
      <button v-on:click="startPoll">Start Poll</button>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
