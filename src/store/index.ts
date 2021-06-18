import { createStore } from 'vuex';
import axios from 'axios';
import { Municipality } from '../models/Municipality';

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
              const municipalityWithImage = m;
              if (municipalityWithImage.products) {
                municipalityWithImage.products.map((d, index) => {
                  const delicacyWithImage = d;
                  const delicacyImage = new Image();
                  const fileSubstr = 'product';
                  delicacyImage.src = `/img/${municipalityWithImage.name?.toLowerCase()}/${fileSubstr}${index + 1}.png`;
                  delicacyWithImage.productImageUrl = delicacyImage.src;
                  return delicacyWithImage;
                });
              }
              if (municipalityWithImage.delicacies) {
                municipalityWithImage.delicacies.map((d, index) => {
                  const delicacyWithImage = d;
                  const delicacyImage = new Image();
                  const fileSubstr = 'delicacy';
                  delicacyImage.src = `/img/${municipalityWithImage.name?.toLowerCase()}/${fileSubstr}${index + 1}.png`;
                  delicacyWithImage.productImageUrl = delicacyImage.src;
                  return delicacyWithImage;
                });
              }

              return municipalityWithImage;
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
