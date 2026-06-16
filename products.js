const products = [
{
id:1,
name:"Laptop",
price:50000,
image:"https://picsum.photos/300?1"
},
{
id:2,
name:"Mobile",
price:25000,
image:"https://picsum.photos/300?2"
},
{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/300?3"
},
{
id:4,
name:"Smart Watch",
price:5000,
image:"https://picsum.photos/300?4"
}
];

const container =
document.getElementById("product-container");

products.forEach(product => {

container.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button>Buy Now</button>
</div>
`;

});
