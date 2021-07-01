const fruits = [
  {
    name: "Manzana",
    price: 300,
    stock: 10,
  },
  {
    name: "Pera",
    price: 450,
    stock: 1,
  },
  {
    name: "Banana",
    price: 800,
    stock: 5,
  },
  {
    name: "Frutilla",
    price: 1000,
    stock: 30,
  },
  {
    name: "Maracuya",
    price: 2000,
    stock: 0,
  },
  {
    name: "Kiwi",
    price: 1200,
    stock: 1,
  },
  {
    name: "Naranja",
    price: 300,
    stock: 40,
  },
  {
    name: "Mandarina",
    price: 100,
    stock: 10,
  },
];

//1. Mostrar por consola cuantos productos quedan en stock
const isFruitsAvailable = (fruit) => fruit.stock > 0;

const fruitsAvailables = fruits.filter(isFruitsAvailable);

console.log(fruitsAvailables);

//2. Aumentar el precio de los productos cuando quede poca existencia (cuando quede solo uno)

const fruitsWithLowStock = fruits.map((fruit) => {
  if (fruit.stock !== 1) return fruit; //si el stock es distinto a 1 devuelve fruits sin alterar
  return {
    ...fruit,
    newPrice: fruit.price * 1.2,
  };
});
console.table(fruitsWithLowStock);

//3 Averiguar si pueden vender un producto (si hay suficiente en stock)

const itHasStock = (fruitName, frutas) => {
  return frutas.find((fruta) => fruta.name === fruitName)?.stock > 0;
};
console.log(itHasStock("Naranja", fruits));

//4  Valor total de los productos
const totalProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reducer = fruits.reduce(
        (acum, item) => acum + item.price * item.stock,
        0
      );
      resolve(reducer);
    }, 3000);
  });
};

async function fetchingData() {
  try {
    const totalFetched = await totalProducts();
    console.log(totalFetched);
  } catch (err) {
    console.log(err);
  }
}

fetchingData();
console.log("final");
