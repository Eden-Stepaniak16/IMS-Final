function initializeProject3() {
  // PUT ALL JAVASCRIPT FOR YOUR THIRD PROJECT IN THIS FUNCTION
  /* You can remove the console.log - it is only used for initial testing. */
  console.log("Project 3 JavaScript loaded!");
}
const products = [
  {
    Name: "Blueberry Nut Brownie",
    Price: "3.50",
    Image: "brownie.jpg",
  },
  {
    Name: "Raspberry Lemon Cupcake",
    Price: "3.45",
    Image: "cupcake.jpg",
  },
  {
    Name: "Chocolate Sprinkled Donut",
    Price: "4.95",
    Image: "donuts.jpg",
  },
  {
    Name: "Scoop of Ice Cream",
    Price: "2.50",
    Image: "ice__cream.jpg",
  },
  {
    Name: "Macaroons",
    Price: "5.25",
    Image: "macaroons.jpg",
  },
  {
    Name: "Chocolate Chip Cream Ice Cream",
    Price: "4.25",
    Image: "sandwich.jpg",
  },
];

for (let product of products) {
  const productName = document.createElement("h2");
  const productPrice = document.createElement("h3");
  const productImage = document.createElement("img");
  const productCard = document.createElement("div");
  const productButton = document.createElement("button");

  productName.innerText = product.Name;
  productPrice.innerText = `$${product.Price}`;
  productImage.src = product.Image;
  productImage.alt = product.Name;
  productImage.classList.add("circle-image");

  productButton.innerText = "Add to Cart";
  productButton.classList.add("product-button");

  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productPrice);
  productCard.appendChild(productButton);

  productCard.classList.add("product-card");

  const productlist = document.querySelector("#productlist");
  productlist.appendChild(productCard);

  productCard.addEventListener("click", () => showProductDetails(product));

  productButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showPopupCard(product);
  });
}

function showProductDetails(product) {
  const modal = document.querySelector("#modal");
  modal.innerHTML = `
    <h2>${product.Name}</h2>
    <img src="${product.Image}" alt="${product.Name}" class="circle-image">
    <p>Price: $${product.Price}</p>
    <button id="close-modal">Close</button>
  `;
  modal.showModal();

  const closeModalButton = document.querySelector("#close-modal");
  closeModalButton.addEventListener("click", () => modal.close());
}

function showPopupCard(product) {
  const popupCard = document.getElementById("popup-card");
  const popupItemName = document.getElementById("popup-item-name");
  const popupItemPrice = document.getElementById("popup-item-price");

  popupItemName.innerText = `Product: ${product.Name}`;
  popupItemPrice.innerText = `Price: $${product.Price}`;

  popupCard.classList.remove("hidden");

  const closeButton = document.getElementById("close-popup");
  closeButton.addEventListener("click", () => {
    popupCard.classList.add("hidden");
  });
}

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
