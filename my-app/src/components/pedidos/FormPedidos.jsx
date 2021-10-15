import React,{useState,useEffect}from "react";


function FormPedidos() {
  const [products,setProducts] = useState([]);
  const getProduct = async()=>{
    try{
      const response = await fetch("http://localhost:3001/get-producto");
      const jsonResponse = await response.json();
      const responseProducts = jsonResponse.data;
      const listproducts = responseProducts.map((products)=>
      <tr>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.stock}</td>
        <td>{products.precio}</td>
      </tr>
      );
      setProducts(listproducts);

    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div class="container container-margen">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="mx-auto" style={{width:300 + "px"}}>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Registrar Productos
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <form
                      class="row g-3 needs-validation"
                      id="registroProductos"
                      name="registroProductos"
                    >
                      <div class="col-md-12 position-relative">
                        <label for="NombreProducto" class="form-label">
                          Producto
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="NombreProducto"
                          name="NombreProducto"
                          placeholder="Nombre del producto"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="IdProducto" class="form-label">
                          ID
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text">#</span>
                          <input
                            type="text"
                            class="form-control"
                            id="IdProducto"
                            name="IdProducto"
                            placeholder="Id producto"
                            required
                          />
                          <div class="invalid-tooltip">
                            Please choose a unique and valid username.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-8 position-relative">
                        <label for="precioProducto" class="form-label">
                          Precio
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="precioProducto"
                          name="precioProducto"
                          placeholder="$"
                          required
                        />
                        <div class="invalid-tooltip">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-md-4 position-relative">
                        <label for="cantidadProducto" class="form-label">
                          Cantidad
                        </label>
                        <input
                          class="range"
                          id="cantidadProducto"
                          name="cantidadProducto"
                          type="number"
                          min="0"
                          max="10000"
                        />
                        <div class="invalid-tooltip">
                          Please select a valid state.
                        </div>
                      </div>
                      <div class="botones col-6">
                        <button id="botonEnvio" class="save">
                          Save
                        </button>
                      </div>
                      <div class="botones col-6">
                        <button id="botonEditar" class="edit">
                          Edit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Buscar Producto
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-md-12 position-relative">
                        <label for="validationTooltip01" class="form-label">
                          ID Producto
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip01"
                          placeholder="Ingresa la venta"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="validationTooltip01" class="form-label">
                          Descripción producto
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip01"
                          placeholder="Nombre del producto"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Buscar Venta
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-md-12 position-relative">
                        <label for="validationTooltip01" class="form-label">
                          Buscar Ventas
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip01"
                          placeholder="Ingresa la venta"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="validationTooltip01" class="form-label">
                          ID Cliente
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationTooltip01"
                          placeholder="Nombre del producto"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-8">
          <table class="table listadop" id="productTable">
            <thead>
              <tr>
                <th scope="col">ID Producto</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {products}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormPedidos;
