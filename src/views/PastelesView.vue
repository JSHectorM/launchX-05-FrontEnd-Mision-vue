<template>
  <div class="pasteles">
  <NavbarCom/>
    <PatelesCom/>
  </div>
</template>

<script>
import NavbarCom from '@/components/NavbarComponent.vue'
import PatelesCom from '@/components/PastelesComponent.vue'

export default {
  name: 'PastesView',
  components: {
    NavbarCom,
    PatelesCom
  }
}
</script>
