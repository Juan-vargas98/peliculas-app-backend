const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    serial: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    sinopsis: { type: String },
    url: { type: String, required: true, unique: true },
    imagen: { type: String },
    anioEstreno: { type: Number },
    generoPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
    directorPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
    productoraPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Media', MediaSchema);