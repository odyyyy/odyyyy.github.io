
let cart = [
    {
        name: '����� 1',
        price: 160,
        quantity: 1
    },
    {
        name: '����� 2',
        price: 250,
        quantity: 5
    },
    {
        name: '����� 3',
        price: 321,
        quantity: 3
    }
];

let productContainerDiv = document.querySelector('.product-container');

function render_cart() {

    let productDiv;
    for (let i = 0; i < cart.length; i++) {
        
        productDiv = document.createElement('div');

        productDiv.className = "product";

        let productInfoTags = createAndGetProductInfoTags(i);


        // ���������� ������
        (function (index) {
            productInfoTags.deleteButton.addEventListener('click', function (event) {
                cart.splice(index, 1);
                event.currentTarget.parentNode.remove();

            });

            productInfoTags.plusButton.addEventListener('click', function (event) {
                cart[index].quantity++;
                updateCartItem(index);


            });

        })(i);

        addProductInfoTagsToProduct(productDiv, productInfoTags);


        productContainerDiv.appendChild(productDiv);
    }
}


function createAndGetProductInfoTags(i) {
    // ������� div � ����������� � ������



    nameParagraph = document.createElement('p');
    nameParagraph.textContent = cart[i].name;

    priceSpan = document.createElement('span');
    priceSpan.className = "price-span";
    priceSpan.textContent = `����� ����: ${cart[i].price * cart[i].quantity}`;

    quantitySpan = document.createElement('span');
    quantitySpan.className = "quantity-span";
    quantitySpan.textContent = `����������: ${cart[i].quantity}`;

    deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.textContent = "�������";

    plusButton = document.createElement('button');
    plusButton.className = "plus-button";
    plusButton.textContent = "+";

    productInfoTags = {
        nameParagraph,
        priceSpan,
        quantitySpan,
        deleteButton,
        plusButton
    };

    return productInfoTags;
    

}

function addProductInfoTagsToProduct(productDiv, productInfoTags){

    for (let product_info_tag in productInfoTags){
        productDiv.appendChild(productInfoTags[product_info_tag])
    }

}


function updateCartItem(index) {
    let products = document.querySelectorAll('.product')
    let change_product = products[index];
    let quantitySpan = change_product.querySelector('.quantity-span');
    let priceSpan = change_product.querySelector('.price-span');
    quantitySpan.textContent = `����������: ${cart[index].quantity}`;
    priceSpan.textContent = `����� ����: ${cart[index].price * cart[index].quantity}`;
}


let clearButton = document.querySelector('.clear-button');

// ������� �������
clearButton.addEventListener('click', function () {
    cart = [];
    productContainerDiv.innerHTML = '';
})

function sortAscending() {
    cart.sort((a, b) => a.price * a.quantity - b.price * b.quantity);
    removeCurrentProductTags();
    render_cart();
}

function sortDescending() {
    cart.sort((a, b) => b.price * b.quantity - a.price * a.quantity);
    removeCurrentProductTags();
    render_cart();
}

function removeCurrentProductTags(){
    // ��������������� ������� ��� ������� ������� ��� ���������� ����������
    let products = document.querySelectorAll('.product')
    for (let i = 0; i < products.length; i++){
        products[i].remove();
    }
}

// ������ �� ����
function filterCartByPrice(cart, minPrice, maxPrice) {
    let filteredCart = cart.filter(function(product) {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    return filteredCart;
}

let filteredProducts = filterCartByPrice(cart, 150, 300);

console.log(filteredProducts);


// ��������� ��������� �������� ������� � �������
render_cart();
