<template>
  <div class="region-tab background-default">
    <div class="region-menu">
      <div class="region-space-50">
      </div>
      <div  class="region-title">
        {{ currentMunicipality }}
      </div>
      <div class="region-space-50">
      </div>
      <div v-on:click="localProductsClicked" class="card">
        Local
        <br/>
        Products
      </div>
      <div class="region-space-50">
      </div>
      <div v-on:click="delicaciesClicked" class="card-alt">
        Delicacies
      </div>
      <div class="region-space-50">
      </div>
      <div v-on:click="whereToBuyClicked" class="card">
        Where to buy
      </div>
      <img class="region-menu-logo" src="../assets/bugna-logo.png"/>
      <img class="region-menu-map" :src="getMapUrl()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Municipality } from '../models/Municipality';

@Options({
  computed: {
    currentMunicipality(): string {
      return this.$route.params.municipalityname.toUpperCase();
    },
    currentMunicipalityLowerCase(): string {
      return this.$route.params.municipalityname.toLowerCase();
    },
    municipalities(): Array<Municipality> {
      return this.$store.getters['default/getMunicipalities'];
    },
  },
  methods: {
    init() {
      // this.$store.dispatch('getMunicipalitiesFromFile');
    },
    localProductsClicked() {
      const currMunicipality = this.$route.params.municipalityname.toLowerCase();
      const mode = 'localproducts';
      this.$router.push({ path: '/product', query: { municipalityname: currMunicipality, mode } });
    },
    delicaciesClicked() {
      const currMunicipality = this.$route.params.municipalityname.toLowerCase();
      const mode = 'delicacies';
      this.$router.push({ path: '/product', query: { municipalityname: currMunicipality, mode } });
    },
    whereToBuyClicked() {
      const currMunicipality = this.$route.params.municipalityname.toLowerCase();
      const mode = 'wheretobuy';
      this.$router.push({ path: '/product', query: { municipalityname: currMunicipality, mode } });
    },
    getMapUrl() {
      const muni = this.$route.params.municipalityname.toLowerCase().replace(' ', '');
      return `/img/maps-highlighted/${muni}.png`;
    },
  },
  created() {
    this.init();
  },
})
export default class MenuControl extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.region-menu {
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.region-menu-logo {
  position: absolute;
  bottom: 5px;
  left: 0px;
  height: 5em;
}

.region-menu-map {
  position: absolute;
  bottom: 5px;
  right: 0px;
  height: 5em;
}

.region-space-50 {
  height: 30px;
  width: 100%;
}

.card {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  padding: 20px;
  background-color: #a5210a;
  color: #edbf09;
  box-shadow: 2px 6px #edbf09;
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  letter-spacing: 5px;
  min-height: 75px;
}

.card-alt {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  padding: 20px;
  background-color: #edbf09;
  color: #a5210a;
  box-shadow: 2px 6px #a5210a;
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  letter-spacing: 5px;
  min-height: 75px;
}

.region-title {
  font-family: 'Shrikhand';font-size: 40px;
  color: #ea8643;
}
</style>
