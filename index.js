const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Importar rutas de cada módulo
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaroutes');

// const mediaRoutes = require('./routes/mediaroutes'); 

// FORZANDO CAMBIO DE GIT

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
// ------------------------------------------------------------------
// CAMBIO CLAVE: Especificar el origen para solucionar el error de CORS.
app.use(cors({
    origin: '*' // Permite peticiones desde CUALQUIER dominio (incluido tu Frontend en Netlify)
})); 
// ------------------------------------------------------------------
app.use(express.json()); // Permite a la API procesar cuerpos de petición en formato JSON

const port = process.env.PORT || 3000;

// Definir la ruta raíz de la API
const apiPath = '/api';

// Usar rutas de los módulos
app.use(`${apiPath}/generos`, generoRoutes);
app.use(`${apiPath}/directores`, directorRoutes);
app.use(`${apiPath}/productoras`, productoraRoutes);
app.use(`${apiPath}/tipos`, tipoRoutes);
app.use(`${apiPath}/media`, mediaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Películas y Series está funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor de API en ejecución en el puerto: ${port}`);
});