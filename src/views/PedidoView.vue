<template>
  <div class="pedido">
  <NavbarCom/>
    <PedidosCom/>
  </div>
</template>

<script>
import NavbarCom from '@/components/NavbarComponent.vue'
import PedidosCom from '@/components/PedidosComponent.vue'

export default {
  name: 'PasteleroView',
  components: {
    NavbarCom,
    PedidosCom
  }
}
</script>
