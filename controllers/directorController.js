const Director = require('../models/Director');

exports.createDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.status(200).json(directores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.status(200).json(director);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.status(200).json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director no encontrado' });
        res.status(200).json({ message: 'Director eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};