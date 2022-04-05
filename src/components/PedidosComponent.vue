<template>
  <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Formulario</h1>
            <div class="lead">
                <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Correo Electrónico</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <small id="emailHelp" class="form-text text-muted">A Este correo se le mandara la confirmacion del pedido.</small>
                    </div>
                    <div class="form-row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Nombre">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Apellido">
                        </div>
                      </div>
                    <div class="mt-2 form-group">
                        <label for="exampleInputPassword1">Teléfono</label>
                        <input type="number" class="form-control" placeholder="5512345678" name="" id="">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Descripción general del pastel</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Sabores y adornos</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Indica que adornos y la cantidad, ademas de el o los sabores"></textarea>
                      </div>
                    <button type="submit" class="btn btn-outline-secondary btn-lg btn-block">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PedidosCom'
}
</script>
