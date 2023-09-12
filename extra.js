const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const [valor0, , valor2, , valor4, ...resto] = numeros;
const mascota = {
  nombre: 'Bony',
  tipo: 'Perro',
  color: 'Dorado',
  raza: 'Golden retriever',
};

const { nombre, tipo, color, raza } = mascota;

console.log(
  `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`
);

