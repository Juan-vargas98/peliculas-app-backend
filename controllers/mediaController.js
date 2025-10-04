const Media = require('../models/Media');

// ------------------------------------------------------------------
// SOLUCIÓN FINAL PARA RENDER: 
// Forzamos la carga de los modelos de referencia antes del .populate()
require('../models/Director'); 
require('../models/Genero');
require('../models/Productora');
require('../models/Tipo');
// ------------------------------------------------------------------


exports.createMedia = async (req, res) => {
// ... (código sin cambios)
};

exports.getMedia = async (req, res) => {
    try {
        // --- 🚨 CAMBIO DE LOGGING y RETORNO FIJO 🚨 ---
        // Intentamos la consulta con un find simple, sin populate
        const media = await Media.find();
        
        // Si la consulta es exitosa, devolvemos los datos
        res.status(200).json(media);

    } catch (err) {
        // ¡IMPORTANTE! Logueamos el error específico en la consola del servidor (Render)
        console.error("ERROR EN GETMEDIA:", err.message); 
        // Devolvemos el mensaje de error 500 al frontend
        res.status(500).json({ message: "Fallo interno al consultar Media. Revise logs del servidor." });
    }
};

exports.getMediaById = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id)
            .populate('generoPrincipal')
            .populate('directorPrincipal')
            .populate('productoraPrincipal')
            .populate('tipo');
        if (!media) return res.status(404).json({ message: 'Media no encontrada' });
        res.status(200).json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('generoPrincipal')
            .populate('directorPrincipal')
            .populate('productoraPrincipal')
            .populate('tipo');
        if (!media) return res.status(404).json({ message: 'Media no encontrada' });
        res.status(200).json(media);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndDelete(req.params.id);
        if (!media) return res.status(404).json({ message: 'Media no encontrada' });
        res.status(200).json({ message: 'Media eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
