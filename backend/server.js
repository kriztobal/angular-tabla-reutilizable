const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const empleados = [
  { nombre: 'Juan', apellidos: 'Pérez López', empleado: true },
  { nombre: 'María', apellidos: 'García Torres', empleado: false },
  { nombre: 'Carlos', apellidos: 'Ramírez Díaz2', empleado: true }
];

// Endpoint GET
app.get('/api/empleados', (req, res) => {
  res.json(empleados);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});