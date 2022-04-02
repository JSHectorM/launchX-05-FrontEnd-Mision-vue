<template>
  <div class="home">
    <NavbarCom/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavbarCom from '@/components/NavbarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavbarCom
  }
}
</script>
