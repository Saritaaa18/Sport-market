const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");


window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
  // 1. Recorrer el array
products.map(element => {
    if (event.target.value === element.name) {
    nameProduct = element.name;
    imgProduct = element.img;
    priceProduct = element.price;
    }
})
createCard(nameProduct, imgProduct, priceProduct)

}

function loadSelect() {
    products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
    });    
}

function createCard(nameProduct, imgProduct, priceProduct) {
    const card = document.createElement('div');
    const imgCard = document.createElement('img');
    const title = document.createElement('h3');
    const price = document.createElement("p");
    const btn = document.createElement("button");
    const eliminar = document.createElement("button");
    imgCard.setAttribute('src',imgProduct);
    imgCard.setAttribute('alt',nameProduct);
    title.textContent = nameProduct;
    price.textContent = priceProduct;
    eliminar.textContent = "X";
    btn.textContent = "Comprar"
    main.appendChild(card);
    card.appendChild(eliminar);
    card.appendChild(title);
    card.appendChild(imgCard);
    card.appendChild(price);
    card.appendChild(btn);
    card.classList.add("card");
    imgCard.classList.add("img-card");
    title.classList.add("p-title");
    btn.classList.add("btn-add");
    price.classList.add("p-price");
    eliminar.classList.add("delete-btn");
    // card.classList.remove("cardPrueba")
    
    eliminar.addEventListener("click", deleteCard)
    
    function deleteCard(){
      main.removeChild(card);
    }

}


// products.map(element => { console.log(element.name) });




