let productos = [
  {
    id: "1",
    categoria: "botines",
    name: "Botines Nike Mercurial",
    price: 38999,
    image: "/public/NikeMercurial.jpeg",
    description:
      "Los Nike Mercurial son botines de fútbol diseñados para ofrecer velocidad y agilidad en el campo. Son ligeros y cuentan con una suela de goma diseñada para proporcionar una tracción óptima en superficies de césped y tierra.",
  },
  {
    id: "2",
    categoria: "botines",
    name: "Botines Adidas X Speedportal",
    price: 61999,
    image: "/public/AdidasSpeedPortal2.jpeg",
    description:
      "Se destacan por su diseño futurista y su tecnología de puntera Speedportal, que mejora el control y la precisión del balón. Además, cuentan con una suela ligera y flexible que ofrece una mayor agilidad y rapidez en el campo.",
  },
  {
    id: "3",
    categoria: "botines",
    name: "Botines Nike Phantom",
    price: 86999,
    image: "/public/NikePhantom.jpeg",
    description:
      "Se caracterizan por su diseño elegante y su tecnología de última generación que proporciona una experiencia de juego superior. Incorporan una malla Flyknit para un ajuste cómodo y una suela con diseño específico para ofrecer una tracción óptima en el campo.",
  },
  {
    id: "4",
    categoria: "botines",
    name: "Botines Adidas Predator",
    price: 35999,
    image: "/public/AdidasPreadtor.jpeg",
    description:
      "Destacado por su tecnología innovadora y su diseño único desde su lanzamiento en 1994. La línea Predator se enfoca en proporcionar un mayor control y precisión en el manejo del balón. Incorporan tecnologias como la puntera de goma texturizada, la suela con diseño específico para mayor tracción, y amortiguación para un mayor confort.",
  },
  {
    id: "5",
    categoria: "zapatillas",
    name: "Zapatillas Nike Air Max Sc",
    price: 35399,
    image: "/public/NikeAirMaxSc.jpeg",
    description:
      "Se caracterizan por su estilo atemporal y su tecnología de amortiguación Air Max, que proporciona una comodidad duradera. La parte superior está hecha de malla y cuero sintético y cuentan con una suela de goma duradera.",
  },
  {
    id: "6",
    categoria: "zapatillas",
    name: "Zapatillas Nike Court",
    price: 24959,
    image: "/public/NikeCourt.jpeg",
    description:
      "Nike Court es una línea de zapatos de tenis de la marca Nike. Ofrecen una combinación de estilo y rendimiento en el campo de juego, con materiales de alta calidad y tecnología avanzada para mejorar la comodidad y el rendimiento del jugador.",
  },
  {
    id: "7",
    categoria: "zapatillas",
    name: "Zapatillas Converse Chuck Taylor",
    price: 19299,
    image: "/public/ConverseChuck.jpeg",
    description:
      "Se han convertido en un icono de la moda y la cultura popular. La parte superior está hecha de lona y cuenta con una suela de goma duradera. La marca Chuck Taylor se refiere a una versión de alto rendimiento de los zapatos Converse originales.",
  },
  {
    id: "8",
    categoria: "zapatillas",
    name: "Zapatillas Nike Dunk Hi Retro",
    price: 44399,
    image: "/public/NikeDunk.jpeg",
    description:
      "Se inspiran en los clásicos zapatos de baloncesto Nike Dunk y se han convertido en un icono de la moda y la cultura popular. La parte superior está hecha de cuero y cuentan con una suela de goma duradera.",
  },
  {
    id: "9",
    categoria: "zapatillas",
    name: "Zapatillas adidas Forum Low",
    price: 37999,
    image: "/public/AdidasForum.jpeg",
    description:
      "Ofrecen un estilo clásico y atemporal, con materiales de alta calidad y una suela de goma duradera. Son adecuados para un uso diario y son una elección popular entre aquellos que buscan un estilo clásico y elegante.",
  },
  {
    id: "10",
    categoria: "zapatillas",
    name: "Zapatillas Adidas Superstar",
    price: 47999,
    image: "/public/AdidasSuper.jpeg",
    description:
      "Se ha convertido en un icono de la moda y la cultura popular. La parte superior está hecha de cuero y cuenta con una suela de goma duradera. Los Adidas Superstar son conocidos por su característica rayas laterales y su logotipo de la marca en el lateral. Han sido popularizados por músicos y atletas desde su lanzamiento y siguen siendo una elección popular entre aquellos que buscan un estilo clásico y atemporal.",
  },
  {
    id: "11",
    categoria: "zapatillas",
    name: "Zapatillas Nike Air Force 1 High",
    price: 45599,
    image: "/public/NikeAirForce1.jpeg",
    description:
      "Fueron lanzados por primera vez en 1982 y se han convertido en un icono de la moda y la cultura popular. Ofrecen un estilo clásico con materiales de alta calidad y una suela de goma duradera.",
  },
  {
    id: "12",
    categoria: "zapatillas",
    name: "Zapatillas Puma Future Rider",
    price: 26039,
    image: "/public/PumaRider.jpeg",
    description:
      "Ofrecen un estilo retro con un diseño moderno, materiales de alta calidad y tecnología avanzada para mejorar la comodidad y el rendimiento. Han sido popularizados por su diseño distintivo y su estilo único, que los hace una elección popular entre aquellos que buscan un estilo clásico con un toque moderno.",
  },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};
