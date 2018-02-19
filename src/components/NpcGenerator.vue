<template>
  <div class="npc_gen">
    <router-link :to="{ name : 'HelloWorld' }">Menu</router-link>
    <h1>NPC Generator</h1>
    <p>
      This generator creates a framework for an original NPC
    </p>
    <form>
      <div class="group">
        <label>Race</label>
        <select v-on:change="onRaceChange">
          <option value="">Random</option>
          <option v-for="(race, index) in races" :key="index">
            {{ race }}
          </option>
        </select>
        <label>Sexe</label>
        <select v-on:change="onSexChange" v-model="sexSelected">
          <option value="">Random</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label v-if="hasClass">Power</label>
        <select v-on:change="onPowerChange" v-if="hasClass" v-model="powerSelected">
          <option value="">Random</option>
          <option value="Male">Normal</option>
          <option value="Female">Heroïc</option>
          <option value="Female">Legendary</option>
        </select>
      </div>
      <div class="group">
        <label for="hasClass">Has a class</label>
        <input type="checkbox" v-model="hasClass" name="hasClass">
        <label for="hasShop">Has a shop</label>
        <input type="checkbox" v-model="hasShop" name="hasShop">
        <label for="hasMagicItem">Has a magic item</label>
        <input type="checkbox" v-model="hasMagicItem" name="hasMagicItem">
      </div>
      <div class="group">
        <p>A {{ sexSelected }} {{ raceSelected }} named {{ nameSelected }}.</p>
        <p v-if="hasClass">Is a {{ classSelected }} level {{ levelSelected }}.</p>
        <p>{{ traitSelected }}.</p>
        <p>{{ quirkSelected }}.</p>
        <p v-if="hasShop">{{ quirkShopSelected }}.</p>
      </div>
      <button v-on:click="generateEncounter" type="button">Reload</button>
    </form>
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
      raceRandom: true,
      races: races,
      traits: traits,
      nameSelected: '',
      physicSelected: '',
      quirkSelected: '',
      quirkShopSelected: '',
      raceSelected: '',
      traitSelected: '',
      sexSelected: '',
      powerSelected: '',
      selectedRace: null,
      hasClass: false,
      hasShop: false,
      hasMagicItem: false
    }
  },
  created () {
    this.generateEncounter()
  },
  methods: {
    generateEncounter: function (event) {
      if (this.raceSelected === '' || this.raceRandom) {
        console.log('pouet')
        var randomRaces = Math.floor(Math.random() * Math.floor(races.length - 1))
        this.raceSelected = races[randomRaces]
      }
      if (this.sexSelected === '') {
        var randomSex = Math.floor(Math.random() * Math.floor(1))
        var sex = ['Male', 'Female']
        this.sexSelected = sex[randomSex]
      }

      var nameList = names.find(o => o.Race === this.raceSelected)
      var randomName = Math.floor(Math.random() * Math.floor(nameList[this.sexSelected].length - 1))
      this.nameSelected = nameList[this.sexSelected][randomName]

      var randomQuirks = Math.floor(Math.random() * Math.floor(quirks[0].Vornheim.length - 1))
      this.quirkSelected = quirks[0].Vornheim[randomQuirks]
      console.log(this.hasShop)
      if (this.hasShop) {
        var randomShopQuirks = Math.floor(Math.random() * Math.floor(quirks[1].Vornheim_shop.length - 1))
        this.quirkShopSelected = quirks[1].Vornheim_shop[randomShopQuirks]
      }

      var randomTraits = Math.floor(Math.random() * Math.floor(traits[0].Vornheim.length - 1))
      this.traitSelected = traits[0].Vornheim[randomTraits]
    },
    onRaceChange: function (event) {
      this.raceSelected = event.target.value
      if (event.target.value !== '') this.raceRandom = false
      this.generateEncounter()
    },
    onSexChange: function (event) {
      this.sexSelected = event.target.value
      this.generateEncounter()
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
.v-select {
  display: inline-block;
  width: 400px;
}
.group {
  padding-top: 10px;
}
</style>
