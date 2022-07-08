<template>
<div>
<stock-disponible></stock-disponible>
</div>
</template>

<script>
// @ is an alias to /src
import StockDisponible from '@/components/StockDisponible.vue'

export default {
  name: 'stockdisponible-view',
  components: {
    'stock-disponible':StockDisponible
  }
}
</script>
