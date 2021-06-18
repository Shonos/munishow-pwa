<template>
  <div class="region-tab background-default">
    <div class="region-menu">
      <div class="region-space-50">
      </div>
      <div class="region-title">
        {{ modeTitle }}
      </div>
      <div class="region-scroll">
      <div class="region-space-50">
      </div>
      <template v-for="product in products" v-bind:key="product.name">
        <div class="card card-product">
          <div class="card-product-image-container">
            <img :src="product.productImageUrl"/>
          </div>
          <div class="card-product-description-container">
            <div class="card-product-title">
              {{ product.name }}
            </div>
            <div class="card-product-description">
              {{ product.description }}
            </div>
          </div>
        </div>
        <div class="region-space-50">
        </div>
      </template>
      <img class="region-menu-logo" src="../assets/bugna-logo.png"/>
      <img class="region-menu-map" :src="getMapUrl()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/models/Product';
import { Options, Vue } from 'vue-class-component';
import { Municipality } from '../models/Municipality';

@Options({
  computed: {
    currentMunicipality(): string {
      return this.$route.query.municipalityname.toUpperCase();
    },
    products(): Array<Product> | undefined {
      const name = this.$route.query.municipalityname.toUpperCase();
      const mode = this.$route.query.mode.toLowerCase();
      const municipality = this.$store.getters.getMunicipalityByName(name) as Municipality;
      if (mode === 'localproducts' && municipality?.products) {
        // const currentMunicipality = this.$route.query.municipalityname.toUpperCase();
        // municipality.products.map((p, index) => {
        //   const prod = p;
        //   const fileSubstr = 'product';
        //   prod.productImageUrl = `/img/${currentMunicipality}/${fileSubstr}${index + 1}.png`;
        //   return prod;
        // });
        return municipality?.products;
      }

      if (mode === 'delicacies' && municipality?.delicacies) {
        // const currentMunicipality = this.$route.query.municipalityname.toUpperCase();
        // municipality.delicacies.map((p, index) => {
        //   const prod = p;
        //   const fileSubstr = 'delicacy';
        //   prod.productImageUrl = `/img/${currentMunicipality}/${fileSubstr}${index + 1}.png`;
        //   return prod;
        // });
        return municipality?.delicacies;
      }

      return undefined;
    },
    currentMode(): string {
      return this.$route.query.mode;
    },
    modeTitle(): string {
      const queryParamMode = this.$route.query.mode;
      if (queryParamMode === 'localproducts') {
        return 'Local Products';
      }
      return 'Delicacies';
    },
    municipalities(): Array<Municipality> {
      return this.$store.getters['default/getMunicipalities'];
    },
  },
  methods: {
    async init() {
      await this.$store.dispatch('getMunicipalitiesFromFile');
    },
    getMapUrl() {
      const muni = this.$route.query.municipalityname.toLowerCase();
      return `/img/maps-highlighted/${muni}.png`;
    },
  },
  async created() {
    await this.init();
  },
})
export default class ProductComponent extends Vue {

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
.region-scroll {
  height: 75%;
  overflow:scroll;
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

.card-product {
  display: flex !important;
  flex-direction: row !important;
}

.card-product-image-container {
  width: 33%;
  height: 100%;
}

.card-product-image-container img {
  height: 80%;
  width: 100%;
}

.card-product-description-container {
  width: 66%;
  height: 100%;
  padding: 10px;
}

.card-product-description {
  font-size: 12px;
  letter-spacing: 2px;
  text-align: justify;
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
