<template>
  <div class="pastelero">
  <NavbarCom/>
  <PateleroCom/>
  </div>
</template>

<script>
import NavbarCom from '@/components/NavbarComponent.vue'
import PateleroCom from '@/components/PasteleroComponent.vue'

export default {
  name: 'PasteleroView',
  components: {
    NavbarCom,
    PateleroCom
  }
}
</script>
