<template>
  <div class="encounter">
    <router-link :to="{ name : 'HelloWorld' }">Menu</router-link>
    <h1>Encounter Generator</h1>
    <p>
      This generator creates random events and encounter
    </p>
    <button v-on:click="generateEncounter">Reload</button>
    <p>
      {{ encounter_selected }}
    </p>
  </div>
</template>

<script>
import encounter from '@/assets/json/encounters.json'
export default {
  name: 'Encounter',
  data: function () {
    return {
      encounter: encounter,
      encounter_selected: ''
    }
  },
  created () {
    var random = Math.floor(Math.random() * Math.floor(encounter[0].Vornheim_city.length))
    this.encounter_selected = encounter[0].Vornheim_city[random]
  },
  methods: {
    generateEncounter: function (event) {
      var random = Math.floor(Math.random() * Math.floor(encounter[0].Vornheim_city.length))
      this.encounter_selected = encounter[0].Vornheim_city[random]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
