const { response } = require("express");
const express = require("express");
const cors = require("cors")
const app = express();
const mysql= require("mysql2/promise");
const bluebird = require("bluebird");
const port = 3001;

let connection;


app.use(express.json());
app.use(cors({origin:true}))

app.get("/get-producto",async(request,response) =>{
    const [rows,fields] = await connection.execute("SELECT * FROM productos");
    response.json({data:rows});
});

app.get("/get-usuarios",async(request,response)=>{
    const [rows,fields] = await connection.execute("SELECT * FROM users");
    response.json({data:rows});
});

app.post("/add-producto",async (request,respons)=>{
    const product =request.body
    const idProduct = product.id;
    const nameProduct = product.producto;
    const stockProduct = product.stock;
    const precioProduct = product.precio; 
    await connection.execute(
        `INSERT INTO productos (id,name,stock,precio) VALUES (${idProduct},'${nameProduct}',${stockProduct},${precioProduct})`);
    respons.json(request.body);
});

app.post("/add-usuarios",async (request,respons)=>{
    const usuarios =request.body
    const idUsuario=usuarios.id;
    const nameUsuario = usuarios.name;
    const estadoUsuario = usuarios.estado;
    const rolUsuario = usuarios.rol;
    const ciudadUsuario = usuarios.ciudad;
    await connection.execute(
        `INSERT INTO  users (id,name,estado,rol,ciudad) VALUES (${idUsuario},'${nameUsuario}','${estadoUsuario}','${rolUsuario}','${ciudadUsuario}')`);
    respons.json(request.body);
});


app.listen(port, async () => {
    connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Hellopyfonsecajs13-",
        database:"tecnoseller",
        Promise :bluebird
    });
    console.log("voy a cumplir mis sueños, en el puerto "+port)
}); 