import React from "react";
import {Link} from "react-router-dom";

function Cards() {
  return (
    <section class="tarjetas">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card" style={{width:18 +"rem"}}>
              <img
                src="assets/imagenes/vendedores.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <Link className="btn btn-primary borde" aria-current="page" to="/pedidos">
                  Vendedores
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card" style={{width:18 +"rem"}}>
              <img
                src="assets/imagenes/usuarios.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <Link className="btn btn-primary borde" aria-current="page" to="/usuarios">
                  Usuarios
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card" style={{width:18 +"rem"}}>
              <img
                src="assets/imagenes/pedidos.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <Link className="btn btn-primary borde" aria-current="page" to="/pedidos">
                  Pedidos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
