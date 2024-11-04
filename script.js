let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    slideIndex += n - 1;
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides();
}
function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalValue = 0;

    cart.forEach((item, index) => {
        const total = (item.price * item.quantity).toFixed(2);
        totalValue += parseFloat(total);

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>R$ ${item.price.toFixed(2)}</td>
                <td>R$ ${total}</td>
                <td><button onclick="removeItem(${index})">Remover</button></td>
            </tr>
        `;
    });

    document.getElementById('total-value').textContent = totalValue.toFixed(2);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}

function addProduct(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);

    cart.push({ id: cart.length + 1, name, price, quantity });

    renderCart();

    event.target.reset();
}

function applyDiscount() {
    const couponCode = document.getElementById('coupon-code').value;

    if (couponCode === 'DESCONTO10') {
        const totalValue = parseFloat(document.getElementById('total-value').textContent);
        const discount = totalValue * 0.10;
        const newTotal = (totalValue - discount).toFixed(2);

        document.getElementById

    }
}    
