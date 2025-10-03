const mongoose = require('mongoose');

// Aquí va tu cadena de conexión
const MONGODB_URI = 'mongodb+srv://jivogamer2025_db_user:MiContraseña123@cluster0.8lr6edv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Conexión exitosa a la base de datos MongoDB.');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1); // Salir del proceso con error
    }
};

module.exports = connectDB;