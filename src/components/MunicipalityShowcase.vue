<template>
  <div class="region-tab">
    <img id="choose-municipality-img" v-on:click="municipalityImageClicked"
      src="../assets/choose-municipality.jpg"
      class="municipality-img"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import pointInPolygon from 'point-in-polygon';
import { EventCoords } from '../models/EventCoords';
import { Municipality } from '../models/Municipality';

@Options({
  computed: {
    municipalities(): Array<Municipality> {
      return this.$store.getters['default/getMunicipalities'];
    },
  },
  methods: {
    init() {
      this.$store.dispatch('getMunicipalitiesFromFile');
    },
    municipalityImageClicked(event: EventCoords) {
      const imgElement = document.getElementById('choose-municipality-img');
      const maxWidth = 500;
      const maxHeight = 892;
      const actualWidth = imgElement?.scrollWidth || 0;
      const actualHeight = imgElement?.scrollHeight || 0;
      let offsetLeft = 0;
      let offsetTop = 0;
      if (imgElement != null) {
        offsetLeft = imgElement.offsetLeft;
        offsetTop = imgElement.offsetTop;
      }

      let pointX = 0;
      let pointY = 0;
      if (event.clientX != null && event.clientY != null) {
        pointX = event.clientX - offsetLeft;
        pointY = event.clientY - offsetTop;
        console.log(`[${pointX}, ${pointY}]`);
      }

      if (maxWidth !== actualWidth) {
        pointX = (pointX / actualWidth) * maxWidth;
        pointY = (pointY / actualHeight) * maxHeight;
      }

      const munis: Array<Municipality> = this.$store.getters.getMunicipalities;
      let municipalityClicked: Municipality = {};
      for (let i = 0; i < munis.length; i += 1) {
        const currMuni = munis[i];
        const coordsToTest: number[][] = currMuni?.coords || [];
        if (pointInPolygon([pointX, pointY], coordsToTest)) {
          municipalityClicked = currMuni;
          break;
        }
      }

      if (municipalityClicked.name !== undefined) {
        this.$router.push({ path: `/menu/${municipalityClicked.name}` });
      }
    },
  },
  created() {
    this.init();
  },
})
export default class MunicipalityShowcase extends Vue {
  // msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.municipality-img {
  height: fit-content;
  max-width: 100%;
}
</style>
