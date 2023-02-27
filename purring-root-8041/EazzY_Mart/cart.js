function makeCartUI(products) {
  const cartDiv = document.getElementById("cart-div");
  const UIArray = Object.keys(products).map((productkey) =>
    ProductUI(products[productkey])
  );
  cartDiv.innerHTML = UIArray.join("\n");
}

function ProductUI(productData) {
  return `
    <div class="cart-product">
      <div class="product-img">
        <img
          src=${productData.product.image}
          alt=${productData.product.name}
        />
      </div>
      <div class="product-description">
        <div class="cart-info">
          <p class="product-quantity">Quantity: ${productData.quantity}</p>
          <p class="price">Rs. ${productData.product.price}</p>
        </div>
        <h3>${productData.product.name}</h3>
        <p>${productData.product.description}</p>
      </div>
    </div>
    `;
}

const products = localStorage.getItem("products_cart");

if (products) {
  makeCartUI(JSON.parse(products));
}

console.log("From cart page");
