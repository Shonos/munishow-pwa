<template>
  <MunicipalityShowcase/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MunicipalityShowcase from '@/components/MunicipalityShowcase.vue'; // @ is an alias to /src

@Options({
  components: {
    MunicipalityShowcase,
  },
})
export default class Home extends Vue {}
</script>
