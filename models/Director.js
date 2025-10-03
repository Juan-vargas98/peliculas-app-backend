const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    estado: { type: String, required: true, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Director', DirectorSchema);