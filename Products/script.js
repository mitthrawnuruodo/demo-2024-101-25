console.log("Hello world");

const out = document.querySelector('div#productsContainer');

fetch("products.json")
.then(response => response.json())
.then(data => listProducts(data.products))
.catch(error => console.error("Something's wrong..."));

function listProducts (products) {
    //console.log(products);
    let output = "";
    for (let product of products) {
        output += productTemplate(product);
    }
    console.log(output);
    out.innerHTML = output;
}

function productTemplate(product) {
    return `
    <div>
        <h2>${product.name}</h2>
        <p>Price: ${product.price} kr</p>
        <p>Product ID: ${product.id} in ${product.group} </p>
        <p>${product.description}</p>
        <img src="${product.image}" alt="${product.name}">
    </div>    
    `;
}