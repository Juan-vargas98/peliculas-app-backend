const Media = require('../models/Media');

exports.createMedia = async (req, res) => {
    try {
        const media = new Media(req.body);
        await media.save();
        res.status(201).json(media);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getMedia = async (req, res) => {
    try {
        // Usa .populate() para obtener los datos de las referencias
        const media = await Media.find()
            .populate('generoPrincipal')
            .populate('directorPrincipal')
            .populate('productoraPrincipal')
            .populate('tipo');
        res.status(200).json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
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