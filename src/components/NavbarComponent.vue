<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">
            <img src="../assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Jasmín
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <!-- <a class="nav-link active" href="#">Inicio</a> -->
                    <router-link class="nav-link active" to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="pages/pasteles.html">Pasteles</a> -->
                    <router-link class="nav-link" to="/pasteles">Pasteles</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="pages/pedido.html">Pedido</a> -->
                    <router-link class="nav-link" to="/pedido">Pedido</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <router-link class="btn btn-outline-secondary" role="button" to="/pastelero">Pastelero</router-link>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarCom'
}
</script>

<style>

</style>
