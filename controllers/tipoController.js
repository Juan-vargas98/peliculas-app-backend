const Tipo = require('../models/Tipo');

exports.createTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        await tipo.save();
        res.status(201).json(tipo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.status(200).json(tipos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTipoById = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.status(200).json(tipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tipo) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.status(200).json(tipo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndDelete(req.params.id);
        if (!tipo) return res.status(404).json({ message: 'Tipo no encontrado' });
        res.status(200).json({ message: 'Tipo eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};