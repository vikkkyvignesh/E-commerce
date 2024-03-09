const product = [
  {
    id: 0,
    image: "./nike.png",
    title: "NIKE",
    price: 1500,
  },
  {
    id: 1,
    image: "./hoka.png",
    title: "ADIDAS",
    price: 1800,
  },
  {
    id: 2,
    image: "./images.jpeg",
    title: "PUMA",
    price: 2000,
  },
  {
    id: 3,
    image: "./download.jpeg",
    title: "NIKE",
    price: 1750,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `<div class='box' >
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}</h2> 
      <button onclick='addtocart(
      ${i++} 
      )'>Add To Cart </button> 
      </div>
        </div>`;
  })
  .join("");

var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
var trash = "./trash.jpg";
function displaycart(a) {
  document.getElementById("count").innerHTML = cart.length;
  let j = 0,
    total = 0;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$" + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total += price;
        document.getElementById("total").innerHTML = "$" + total + ".00";
        return `<div class='cart-item'>
        <div class='row-img'>
        <img class='rowimg' src=${image}>
        </div>
        <p>${title}</p>
        <h2> ${price}.00</h2> 
          <img src=${trash}  class="trash" onclick='delElement(
          ${j++} 
          )'></div>`;
      })
      .join("");
  }
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
