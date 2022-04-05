<template>
  <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Pasteles</h1>
            <p>
                <ul>
                    <li>
                        Se pueden escojer de 1 a 3 sabores de pan (dependiendo de el tamaño de pastel).
                    </li>
                    <li>
                        Se puede escojer de 1 a 3 adornos.
                    </li>
                </ul>
            </p>
            <hr>
            <h2 class="h2">Sabores de pan</h2>
            <div class="lead">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Chocolate</h5>
                            <p class="card-text">
                                Chico ... $150
                                <br>
                                Mediano ... $220
                                <br>
                                Grande ... $360
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Vainilla</h5>
                            <p class="card-text">
                                Chico ... $150
                                <br>
                                Mediano ... $220
                                <br>
                                Grande ... $360
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Guayaba</h5>
                            <p class="card-text">
                                Chico ... $150
                                <br>
                                Mediano ... $220
                                <br>
                                Grande ... $360
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Platano</h5>
                            <p class="card-text">
                                Chico ... $150
                                <br>
                                Mediano ... $220
                                <br>
                                Grande ... $360

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <h2>Adornos</h2>
            <div class="lead">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Chocolates</h5>
                                <p class="card-text">
                                    5 a 7 ... $100
                                    <br>
                                    8 a 12 ... $180
                                    <br>
                                    13 a 15 ... $230
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Flores</h5>
                                <p class="card-text">
                                    3 a 5 ... $100
                                    <br>
                                    6 a 8 ... $180
                                    <br>
                                    9 a 11 ... $230
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Frutas</h5>
                                <p class="card-text">
                                    Fresa, durazno, uva, kiwi, manzana, moras ... $30
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatelesCom'
}
</script>
