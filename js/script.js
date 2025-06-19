$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header").addClass("white");
        } else {
            $(".header").removeClass("white");
        }
    });
});


//sidebar cart
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart-icon");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const closeCart = document.querySelector(".close-cart");
    const cartCount = document.querySelector(".cart-count");
    const addToCartBtn = document.querySelector(".add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
    const emptyCartMessage = document.querySelector(".empty-cart-message");
    const cartFooter = document.querySelector(".cart-footer");

    let cart = [];

    function updateCartUI() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            emptyCartMessage.style.display = "block";
            cartFooter.style.display = "none";
            cartCount.innerText = "0";
            return;
        }

        emptyCartMessage.style.display = "none";
        cartFooter.style.display = "block";

        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <div style="display: flex; gap: 10px; align-items: center;">
                    <img src="${item.image}" alt="${item.title}" width="60">
                    <div>
                        <p><strong>${item.title}</strong></p>
                        <p>₹${item.price}</p>
                        <p>Color: ${item.color}, Size: ${item.size}</p>
                        <div style="margin-top: 5px;">
                            <button onclick="updateQty(${index}, -1)">−</button>
                            ${item.qty}
                            <button onclick="updateQty(${index}, 1)">+</button>
                            <button onclick="removeItem(${index})">🗑️</button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.qty;
        });

        cartCount.innerText = cart.length;
        cartTotal.innerText = `₹${total.toFixed(2)}`;
    }

    // Add to cart button click
    addToCartBtn.addEventListener("click", function () {
        const product = {
            image: document.getElementById("image1").src || "placeholder.jpg",
            title: document.getElementById("product-title").innerText,
            price: parseFloat(document.getElementById("product-price").innerText.replace(/[₹,]/g, '')),
            color: "Black",
            size: "M",
            qty: 1,
        };

        const existingIndex = cart.findIndex(p => p.title === product.title && p.size === product.size);
        if (existingIndex > -1) {
            cart[existingIndex].qty += 1;
        } else {
            cart.push(product);
        }

        updateCartUI();
        cartSidebar.classList.add("active");
    });

    cartIcon.addEventListener("click", () => cartSidebar.classList.add("active"));
    closeCart.addEventListener("click", () => cartSidebar.classList.remove("active"));
    document.addEventListener("click", function (event) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove("active");
        }
    });

    // Make functions accessible in global scope
    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    window.updateQty = function (index, change) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        updateCartUI();
    };
});


/*
//cart pop-up window
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart-icon");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const closeCart = document.querySelector(".close-cart");

    cartIcon.addEventListener("click", function () {
        cartSidebar.classList.add("active");
    });

    closeCart.addEventListener("click", function () {
        cartSidebar.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove("active");
        }
    });
});
*/


//menu bar pop-up window
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuWindow = document.querySelector('.menu-window');
    const menuIcon = document.querySelector('.menu-icon i');
    const closeMenu = document.querySelector('.close-menu');

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuWindow.classList.toggle('open');

        if(menuWindow.classList.contains('open')) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else{
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });

    closeMenu.addEventListener('click', function() {
        menuWindow.classList.remove('open');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    });
});

//search bar pop-up window
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const closeSearch = document.createElement("span");
    
    closeSearch.classList.add("close-search");
    closeSearch.textContent = "×";
    document.querySelector(".search-bar").appendChild(closeSearch);

    searchInput.addEventListener("click", function () {
        searchInput.classList.toggle("active");
    });

    closeSearch.addEventListener("click", function () {
        searchInput.classList.remove("active");
    });
});

//products details
document.querySelectorAll('.product-link').forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            window.location.href = `products.html?product=${productId}`;
        });
});

function showProduct(productId) {
        const products = {
            gd1: {
                title: "HipHop Culture T-Shirt",
                price: "₹2,295.00",
                desc: "Inspired by Hip-Hop Culture.",
                specs: ["100% Cotton", "260 GSM", "Drop Shoulder"]
            }
        };
        const product = products[productId];
        window.open('product-modal.html');
        setTimeout(() => {
            openProductModal(product.title, product.price, product.desc, product.specs);
        }, 500);
    }