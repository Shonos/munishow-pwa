import { createStore } from 'vuex';
import axios from 'axios';
import { Municipality } from '../models/Municipality';
import { Product } from '../models/Product';
/* eslint-disable global-require */
const images = [
  {
    name: 'altavas',
    delicacyImages: [
      require('../assets/img/altavas/delicacy1.png'),
      require('../assets/img/altavas/delicacy2.png'),
    ],
    productImages:
    [
      require('../assets/img/altavas/product1.png'),
      require('../assets/img/altavas/product2.png'),
    ],
  },
];
/* eslint-enable global-require */
export default createStore({
  state: {
    municipalities: {},
  },
  mutations: {
    updateMunicipalitiesOnState(state: any, newMunicipalities: any) {
      state.municipalities = newMunicipalities;
    },
  },
  actions: {
    getMunicipalitiesFromFile(com: any) {
      axios.get('data/municipalities.json')
        .then((result) => {
          if (result && result.data) {
            result.data.municipalities.map((m: Municipality) => {
              const municipality = m as Municipality;
              if (municipality.delicacies) {
                municipality.delicacies.map((d: Product, i2: number) => {
                  const delicacy = d as Product;
                  const muniImages = images.find((mm) => mm.name.toLocaleLowerCase() === municipality.name?.toLowerCase());
                  if (muniImages) {
                    delicacy.productImageUrl = muniImages.delicacyImages[i2];
                  }
                  return delicacy;
                });
              }
              return municipality;
            });
            com.commit('updateMunicipalitiesOnState', result.data.municipalities);
          }
        })
        .catch((error) => {
          throw error.response.data;
        });
    },
  },
  modules: {
  },
  getters: {
    getMunicipalities(state: any) {
      if (state.municipalities) {
        return state.municipalities;
      }
      return {};
    },
    getMunicipalityByName: (state: any) => (name: string) => {
      if (state.municipalities && state.municipalities.length > 0) {
        const municipalities = state.municipalities as Array<Municipality>;
        return municipalities.find((m) => m.name?.toLocaleLowerCase() === name.toLocaleLowerCase());
      }
      return {};
    },
  },
});
