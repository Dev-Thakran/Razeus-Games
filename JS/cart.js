document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.cart-item-count').forEach(badge => {
        badge.style.visibility = 'hidden';
        badge.textContent = '';
    });

    const addCartButtons = document.querySelectorAll(".card-links");
    addCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const productBox = event.target.closest(".shop-cards");
            addToCart(productBox);
        });
    });

    const cartContent = document.querySelector('.cart-content');
    const addToCart = productBox => {
        const productImgSrc = productBox.querySelector("img").src;
        const productTitle = productBox.querySelector("h4").textContent;
        const productPrice = productBox.querySelector(".price").textContent;

        const cartItems = cartContent.querySelectorAll('.cart-card-title');
        for (let item of cartItems) {
            if (item.textContent === productTitle) {
                alert("This item is already in the cart.");
                return;
            }
        }

        const cartBox = document.createElement('div');
        cartBox.classList.add('card');
        cartBox.innerHTML = `
        <div class="card-body">
            <div class="row mb-2">

                <div class="col-3">
                    <img src="${productImgSrc}" style="width: auto" class="img-fluid rounded">
                </div>


                <div class="col-6">
                    <h6 class="cart-card-title" style="font-size: medium;">${productTitle}</h6>
                    <div class="input-group pt-2">
                        <button class="text-center btn btn-outline-secondary btn-sm pt-0" id="decrement"
                            type="button">-</button>
                        <span style="width: 30px; font-size: small; border: none;"
                            class="text-center quantity-input">1</span>
                        <button class="text-center btn btn-outline-secondary btn-sm pt-0" id="increment"
                            type="button">+</button>
                    </div>
                </div>


                <div class="col-3 text-end">
                    <p class="cart-price">${productPrice}</p>
                    <button class="btn btn-sm btn-outline-danger cart-remove">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>

            </div>
        </div>
    `;
        cartContent.appendChild(cartBox);

        updateTotalPrice();

        cartBox.querySelector('.cart-remove').addEventListener('click', () => {
            cartBox.remove();

            updateTotalPrice();
            updateCartCount(-1);
        });

        cartBox.querySelector('.input-group').addEventListener('click', event => {
            const numberElement = cartBox.querySelector('.quantity-input');
            const decrementButton = cartBox.querySelector('#decrement');
            let quantity = numberElement.textContent;

            if (event.target.id === "decrement" && quantity > 1) {
                quantity--;
                if (quantity === 1) {
                    decrementButton.disabled = true;
                }
            }
            else if (event.target.id === "increment") {
                quantity++;
                decrementButton.disabled = false;
            }

            numberElement.textContent = quantity;

            updateTotalPrice();

        });

        updateCartCount(1);

        updateTotalPrice();
    };

    const updateTotalPrice = () => {
        const totalPriceElement = document.querySelector('.total-price');
        const cartBoxes = cartContent.querySelectorAll('.card');
        let total = 0;
        cartBoxes.forEach(cartBox => {
            const priceElement = cartBox.querySelector('.cart-price');
            const quantityElement = cartBox.querySelector('.quantity-input');
            const price = priceElement.textContent.replace("$", "");
            const quantity = quantityElement.textContent;
            total += price * quantity;
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    let cartItemCount = 0;
    const cartBadges = document.querySelectorAll('.cart-item-count');

    const updateCartCount = change => {
        cartItemCount += change;

        cartBadges.forEach(badge => {
            if (cartItemCount > 0) {
                badge.style.visibility = 'visible';
                badge.textContent = cartItemCount;
            } else {
                badge.style.visibility = 'hidden';
                badge.textContent = '';
            }
        });
    };

    const shopDropdown = document.querySelector('#navbarDarkDropdownMenuLink');
    const closestBadge = shopDropdown.closest('.nav-cart-container');
    const shopBadge = closestBadge.querySelector('.cart-item-count');


    if (shopDropdown && shopBadge) {
        shopDropdown.addEventListener('shown.bs.dropdown', () => {
            shopBadge.style.visibility = 'hidden';
        });

        shopDropdown.addEventListener('hidden.bs.dropdown', () => {
            if (cartItemCount > 0) {
                shopBadge.style.visibility = 'visible';
            }
        });
    }

    const checkoutButton = document.querySelector('.checkout-btn');
    checkoutButton.addEventListener('click', () => {
        const cartBoxes = cartContent.querySelectorAll('.card');
        if (cartBoxes.length === 0) {
            alert("Your cart is empty. Please add items to your cart before buying.");
            return;
        }

        cartBoxes.forEach(cartBox => cartBox.remove());

        cartItemCount = 0;
        updateCartCount(0);
        updateTotalPrice();
        alert("Thank you for your purchase!");
    })
});