//Manejador de variables de entorno
require("dotenv").config();

const express =  require("express");
const cors  = require ("cors");

//Iniciamos express
const app = express();

const { sequelize } = require('./db/models/index')
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

sequelize
    .authenticate()
    .then(() => {
        console.log('DB Connection Local')
    })
    .catch(error => {
        console.log('Failed to Connection DB Local\n', error)
    })


app.use("/api", require('./routes/estado.router'));
app.use("/api", require('./routes/habitacion.router'));
app.use("/api", require('./routes/cliente.router'));
app.use("/api", require('./routes/tipopago.router'));
app.use("/api", require('./routes/reserva.router'));
app.use("/api", require('./routes/factura.router'));

app.listen(port, () =>{
    console.log(`Tu app esta lista por http://localhost:${port}`);
});

// dbConnectMySql();