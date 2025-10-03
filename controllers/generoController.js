const Genero = require('../models/Genero');

exports.createGenero = async (req, res) => {
    try {
        const genero = new Genero(req.body);
        await genero.save();
        res.status(201).json(genero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.status(200).json(generos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGeneroById = async (req, res) => {
    try {
        const genero = await Genero.findById(req.params.id);
        if (!genero) return res.status(404).json({ message: 'Género no encontrado' });
        res.status(200).json(genero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateGenero = async (req, res) => {
    try {
        const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!genero) return res.status(404).json({ message: 'Género no encontrado' });
        res.status(200).json(genero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteGenero = async (req, res) => {
    try {
        const genero = await Genero.findByIdAndDelete(req.params.id);
        if (!genero) return res.status(404).json({ message: 'Género no encontrado' });
        res.status(200).json({ message: 'Género eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};