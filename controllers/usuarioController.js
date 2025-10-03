const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'TU_SECRETO_JWT';

exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const usuario = await Usuario.create({ nombre, email, password });
        res.status(201).json({ id: usuario.id, nombre: usuario.nombre, email: usuario.email });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

        const valid = await bcrypt.compare(password, usuario.password);
        if (!valid) return res.status(401).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
