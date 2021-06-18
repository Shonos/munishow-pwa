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
