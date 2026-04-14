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

const productos = [
  { producto: 'Laptop', precio: 15000, stock: 10, categoria: 'Electrónica' },
  { producto: 'Mouse', precio: 300, stock: 50, categoria: 'Accesorios' },
  { producto: 'Teclado', precio: 800, stock: 20, categoria: 'Accesorios' }
];


// Endpoint GET
app.get('/api/empleados', (req, res) => {
  res.json(empleados);
});

// Endpoint GET
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});