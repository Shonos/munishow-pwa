<template>
  <MenuControl/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MenuControl from '@/components/MenuControl.vue'; // @ is an alias to /src

@Options({
  components: {
    MenuControl,
  },
})
export default class Menu extends Vue {}
</script>
