<template>
  <div class="npc_gen">
    <router-link :to="{ name : 'HelloWorld' }">Menu</router-link>
    <h1>NPC Generator</h1>
    <p>
      This generator creates a framework for an original NPC
    </p>
    <button v-on:click="generateEncounter">Reload</button>
    <p>
      A {{ raceSelected }} named {{ nameSelected }} . Is {{ traitSelected }} .
      {{ quirkSelected }} .
    </p>
  </div>
</template>

<script>
import names from '@/assets/json/names.json'
import physics from '@/assets/json/physics.json'
import quirks from '@/assets/json/quirks.json'
import races from '@/assets/json/races.json'
import traits from '@/assets/json/traits.json'
export default {
  name: 'NpcGenerator',
  data: function () {
    return {
      names: names,
      physics: physics,
      quirks: quirks,
      races: races,
      traits: traits,
      nameSelected: '',
      physicSelected: '',
      quirkSelected: '',
      raceSelected: '',
      traitSelected: ''
    }
  },
  created () {
    var randomRaces = Math.floor(Math.random() * Math.floor(races.length))
    this.raceSelected = races[randomRaces]

    var randomQuirks = Math.floor(Math.random() * Math.floor(quirks[0].Vornheim.length))
    this.quirkSelected = quirks[0].Vornheim[randomQuirks]

    var randomTraits = Math.floor(Math.random() * Math.floor(traits[0].Vornheim.length))
    this.traitSelected = traits[0].Vornheim[randomTraits]
  },
  methods: {
    generateEncounter: function (event) {
      var randomRaces = Math.floor(Math.random() * Math.floor(races.length))
      this.raceSelected = races[randomRaces]

      var randomQuirks = Math.floor(Math.random() * Math.floor(quirks[0].Vornheim.length))
      this.quirkSelected = quirks[0].Vornheim[randomQuirks]

      var randomTraits = Math.floor(Math.random() * Math.floor(traits[0].Vornheim.length))
      this.traitSelected = traits[0].Vornheim[randomTraits]
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
