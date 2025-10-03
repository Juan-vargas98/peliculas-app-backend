const mongoose = require('mongoose');

const ProductoraSchema = new mongoose.Schema({
    nombreProductora: { type: String, required: true, unique: true },
    slogan: { type: String },
    descripcion: { type: String },
    estado: { type: String, required: true, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Productora', ProductoraSchema);