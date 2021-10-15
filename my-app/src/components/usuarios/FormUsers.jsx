import React,{useState,useEffect} from "react";

function FormUsers() {
  const [users,setUsers]=useState([]);
  const getUsers = async()=>{
    try{
      const response = await fetch("http://localhost:3001/get-usuarios");
      const jsonResponse = await response.json();
      const responseUsers = jsonResponse.data;
      const listUsers = responseUsers.map((users)=>
      <tr>
        <td>{users.id}</td>
        <td>{users.name}</td>
        <td>{users.estado}</td>
        <td>{users.rol}</td>
        <td>{users.ciudad}</td>
      </tr>
      );
      setUsers(listUsers);
      console.log(jsonResponse.data);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
      getUsers();
  },[])
  return (
    <div class="container container-margen">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="mx-auto"  style={{width: 300 + 'px'}}>
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
                    Datos Usuario
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
                      id="registroUsuarios"
                      name="formularioUser"
                    >
                      <div class="col-md-12 position-relative">
                        <label for="NombreUsuario" class="form-label">
                          Nombre
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="NombreUsuario"
                          name="NombreUsuario"
                          placeholder="Nombre Usuario"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="IdUsuario" class="form-label">
                          ID
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text">#</span>
                          <input
                            type="text"
                            class="form-control"
                            id="IdUsuario"
                            name="IdUsuario"
                            placeholder="ID Usuario"
                            required
                          />
                          <div class="invalid-tooltip">
                            Please choose a unique and valid username.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="CiudadUsuario" class="form-label">
                          Ciudad
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="CiudadUsuario"
                          name="CiudadUsuario"
                          placeholder="Ingrese su Ciudad"
                          required
                        />
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="RolUsuario" class="form-label">
                          Rol de Usuario
                        </label>
                        <select
                          class="RolUsuario"
                          id="RolUsuario"
                          name="RolUsuario"
                        >
                          <option value="Administrador">Administrador</option>
                          <option value="Vendedor">Vendedor</option>
                        </select>
                        <div class="valid-tooltip">Looks good!</div>
                      </div>
                      <div class="col-md-12 position-relative">
                        <label for="EstadoUsuario" class="form-label">
                          Estado
                        </label>
                        <select
                          class="estadoUsuario"
                          id="EstadoUsuario"
                          name="EstadoUsuario"
                        >
                          <option value="Activo">Activo</option>
                          <option value="Inactivo">Inactivo</option>
                        </select>
                        <div class="valid-tooltip">Looks good!</div>
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
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Buscar Usuario
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
                        <label for="NombreUsuario" class="form-label">
                          Nombre
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="IdUsuario"
                          placeholder="Ingresa el Nombre del Usuario"
                          required
                        />
                        <label for="NombreUsuario" class="form-label">
                          ID
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="IdUsuario"
                          placeholder="Ingresa el ID del Usuario"
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
          <table class="table listadop" id="usersTable">
            <thead>
              <tr>
                <th scope="col">ID Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Rol</th>
                <th scope="col">Ciudad</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormUsers;