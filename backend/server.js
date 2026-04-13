const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const empleados = [
  { nombre: 'Juan', apellidos: 'Pérez López', empleado: true },
  { nombre: 'María', apellidos: 'García Torres', empleado: false },
  { nombre: 'Carlos', apellidos: 'Ramírez Díaz', empleado: true },
  { nombre: 'Perla', apellidos: 'Dominguez Sanchez', empleado: true },
  { nombre: 'Berenice', apellidos: 'Sun García', empleado: false }
];

// Endpoint GET
app.get('/api/empleados', (req, res) => {
  res.json(empleados);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});