const formProduct = document.getElementById("registroProductos");

formProduct.addEventListener("submit",function(event){
    event.preventDefault();
    let dataProducts = new FormData(formProduct);
    let productTableRef = document.getElementById("productTable");
    let newRowProductT = productTableRef.insertRow(-1);
    let newCellProductT = newRowProductT.insertCell(0);
    newCellProductT.textContent = dataProducts.get("IdProducto");
    newCellProductT = newRowProductT.insertCell(1);
    newCellProductT.textContent = dataProducts.get("NombreProducto");
    newCellProductT = newRowProductT.insertCell(2);
    newCellProductT.textContent = dataProducts.get("cantidadProducto");
    newCellProductT = newRowProductT.insertCell(3);
    newCellProductT.textContent = dataProducts.get("precioProducto");
    
        }
)