const form = document.getElementById("registroUsuarios");

let dataUsers;
let usersTableRef;
let newRowUserT;
let newCellUserT;

form.addEventListener("submit",function(event){
    event.preventDefault();
    dataUsers = new FormData(form);
    usersTableRef = document.getElementById("usersTable");
    newRowUserT = usersTableRef.insertRow(-1);
    newCellUserT = newRowUserT.insertCell(0);
    newCellUserT.textContent = dataUsers.get("IdUsuario");
    newCellUserT = newRowUserT.insertCell(1);
    newCellUserT.textContent = dataUsers.get("NombreUsuario");
    newCellUserT = newRowUserT.insertCell(2);
    newCellUserT.textContent = dataUsers.get("EstadoUsuario");
    newCellUserT = newRowUserT.insertCell(3);
    newCellUserT.textContent = dataUsers.get("RolUsuario");
    newCellUserT = newRowUserT.insertCell(4);
    newCellUserT.textContent = dataUsers.get("CiudadUsuario");
    }

)
