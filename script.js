//Javascriopt
let productos = [
  {
    nombre: "Batistella",
    Codigo: 001,
    Stock: 10,
    Precio: 50,
  },

  {
    nombre: "Soy",
    Codigo: 002,
    Stock: 15,
    Precio: 75,
  },
  {
    nombre: "Sofisticacion",
    Codigo: 003,
    Stock: 10,
    Precio: 70,
  },
  {
    nombre: "Summun",
    Codigo: 004,
    Stock: 5,
    Precio: 75,
  },
  {
    nombre: "Styles",
    Codigo: 005,
    Stock: 15,
    Precio: 50,
  },
  {
    nombre: "Josefa",
    Codigo: 006,
    Stock: 10,
    Precio: 40,
  },
  {
    nombre: "Cristal",
    Codigo: 011,
    Stock: 15,
    Precio: 50,
  },
  {
    nombre: "Polity",
    Codigo: 012,
    Stock: 10,
    Precio: 50,
  },
  {
    nombre: "Letinas",
    Codigo: 013,
    Stock: 15,
    Precio: 60,
  },
  {
    nombre: "Kalo",
    Codigo: 014,
    Stock: 10,
    Precio: 80,
  },
  {
    nombre: "Cristaline",
    Codigo: 015,
    Stock: 10,
    Precio: 70,
  },
  {
    nombre: "Me fui",
    Codigo: 016,
    Stock: 11,
    Precio: 90,
  },
  {
    nombre: "Celestine",
    Codigo: 017,
    Stock: 15,
    Precio: 100,
  },
];

const botones = document.querySelectorAll(".btn-light ");

const cuandoSeHaceClick = (evento) => {
  let producto = productos.filter((producto) => {
    return producto.nombre === evento.target.innerText;
  });

  swal({
    title: "Modelo: " + producto[0].nombre,
    text: " Precio: US$ " + producto[0].Precio + " Stock: " + producto[0].Stock,
    icon: "success",
    button: "Listo",
  });
};

botones.forEach((boton) => {
  boton.addEventListener("click", cuandoSeHaceClick);
});
