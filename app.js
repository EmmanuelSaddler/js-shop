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

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

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

    updateCartCount();
  }
}

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

      if (category === "All") {
        renderProducts(products);
        return;
    }

    const filteredProducts = products.filter(
        product => product.category === category
    );

    renderProducts(filteredProducts);
    
}

function renderProducts(productArray) {

    const productGrid =
        document.getElementById("product-grid");

    productGrid.innerHTML = "";

    productArray.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        const productName =
            document.createElement("h3");

        productName.textContent =
            product.productName;

        const category =
            document.createElement("p");

        category.textContent =
            `Category: ${product.category}`;

        const price =
            document.createElement("p");

        price.textContent =
            `Price: $${product.price}`;

        const button =
            document.createElement("button");

        button.textContent =
            "Add to Cart";

        button.addEventListener("click", () => {
            addToCart(product.productName);
        });

        card.appendChild(productName);
        card.appendChild(category);
        card.appendChild(price);
        card.appendChild(button);

        productGrid.appendChild(card);
    });
}

function renderCategoryButtons() {

    const categoryContainer =
        document.getElementById("category-filters");

    const categories = [
        "All",
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.textContent = category;

        button.addEventListener("click", () => {
            filterByCategory(category);
        });

        categoryContainer.appendChild(button);
    });
}

filterByCategory("Clothing");

renderCategoryButtons();
renderProducts(products);

console.log("Product:", products);