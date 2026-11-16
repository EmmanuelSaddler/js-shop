const cart = [];
const products = [
    {
        productName: "T-Shirt",
        price: 24.99,
        inStock: true,
        category: "Clothing",
    },
    {
        productName: "Hat",
        price: 9.99,
        inStock: true,
        category: "Clothing",
    },
    {
        productName: "Pants",
        price: 19.99,
        inStock: true,
        category: "Clothing",
    },
    {
        productName: "Figure",
        price: 25.99,
        inStock: true,
        category: "Object",
    },
]

function addToCart(productName) {
  const product = products.find(
    item => item.productName === productName
  );

  if (!product) {
    console.log("Product not found.");
  }
  else if (!product.inStock) {
    console.log(`${productName} is out of stock.`);
  }
  else {
    cart.push(product);
    console.log(`${productName} added to cart.`);
  }
}

addToCart("T-Shirt");
addToCart("Hat");
addToCart("Pants");
addToCart("Figure");

function viewCart() {
  let total = 0;

  for (let item of cart) {
    console.log(`${item.productName} - $${item.price}`);
    total += item.price;
  }

  console.log(`Total: $${total.toFixed(2)}`);
}

viewCart();

function filterByCategory(category) {
  const filteredProducts = products.filter(
    product => product.category === category
  );

  filteredProducts.forEach(product => {
    console.log(`${product.productName} - $${product.price}`);
  });
}

filterByCategory("Clothing");

console.log("Product:", products);