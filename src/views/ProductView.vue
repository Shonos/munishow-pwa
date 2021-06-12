<template>
  <ProductComponent/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductComponent from '@/components/ProductComponent.vue'; // @ is an alias to /src

@Options({
  components: {
    ProductComponent,
  },
})
export default class ProductView extends Vue {}
</script>
