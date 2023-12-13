const loginSect = document.querySelector(".login-sect");
const signupSect = document.querySelector(".signup-sect");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
// let navbarToggler = document.querySelector(".navbar-toggler");
const loginFormBtn = document.querySelector(".nav1 .login-form-btn");
const signupFormBtn = document.querySelector(".nav1 .signup-form-btn");
const homeView = document.querySelectorAll(".home-view");
const homeNav = document.querySelectorAll(".home-nav");
const loginNav = document.querySelectorAll(".login-nav");
const logoutBtn = document.querySelector(".logout-btn");
const hero = document.querySelector(".hero");
const productsContent = document.querySelector(".products-content");
const shopBtn = document.querySelectorAll(".shop-btn");

loginSect.innerHTML = `
    <div class="wrapper">
        <div class="position-relative form-heading"> 
            <div class="position-absolute left"> 
                <h3 class="">Smart Goodies</h3> 
            </div> 
            <div class="position-absolute right"> 
                <button class="btn fs-3 close-login-form mb-3">&times;</button> 
            </div>
        </div>
        <form class="login-form">
            <div class="form-sub">
                <label for="name">Username</label><br />
                <input type="text" name="name" placeholder="Put something" id="name" required/>
            </div>
            <div class="form-sub">
                <div style="display: inline">
                    <label for="password">Password </label>
                    <a href="#" class="align-end">Forgot Password?</a>
                </div><br />
                <input type="password" name="password" placeholder="Put something" id="password" required/>
            </div>
            <input type="submit" value="Login" class="login-submit-btn"/>
        </form>
        <p class="align-center">
            Don't have account? <a href="#">Create new account</a>
        </p>
    </div>
    <div class="overlay"></div>
    `;

signupSect.innerHTML = `
    <div class="wrapper">
        <div class="position-relative form-heading"> 
            <div class="position-absolute left"> 
                <h3 class="">Smart Goodies</h3> 
            </div> 
            <div class="position-absolute right"> 
                <button class="btn fs-3 close-signup-form mb-3">&times;</button> 
            </div>
        </div>  
        <form>
            <div class="form-sub">
                <label for="name">Name</label><br />
                <input type="text" name="name" placeholder="John Mark" id="name" required />
            </div>
            <div class="form-sub">
                <label for="email">Email</label><br />
                <input type="email" name="email" placeholder="johnmark@email.com" id="email" required />
            </div>
            <div class="form-sub">
                <label for="phonenum">Password</label><br />
                <input type="password" name="password" placeholder="Password" id="password" class="input" required/>
            </div>
            <div class="form-sub">
                <label for="phonenum">Confirm Password</label><br />
                <input type="password" name="password" placeholder="Password" id="password" required/>
            </div>
            <div class="form-sub">
                <label for="name">Male</label>
                <input type="radio" name="gender" value="male" id="male" />
                <label for="name">Female</label>
                <input type="radio" name="gender" value="female" id="female" />
            </div><br />
            <input type="submit" value="Sign up" />
        </form>
        <p class="align-center">
            Already have an account? <a href="#">Login</a>
        </p>
    </div>
    <div class="overlay"></div>
    `;

const closeLoginBtn = document.querySelector(".close-login-form");
const closeSignupBtn = document.querySelector(".close-signup-form");
const loginForm = document.querySelector(".login-form");

const removeFixedTop = function () {
	nav1.style.zIndex = "1";
	nav2.style.zIndex = "1";
};

const addFixedTop = function () {
	nav1.style.zIndex = "999";
	nav2.style.zIndex = "999";
};

const openLoginForm = function () {
	loginSect.classList.remove("hidden");
	removeFixedTop();
};

const closeLoginForm = function () {
	loginSect.classList.add("hidden");
	addFixedTop();
};

const openSignup = function () {
	signupSect.classList.remove("hidden");
	removeFixedTop();
};

const closeSignup = function () {
	signupSect.classList.add("hidden");
	addFixedTop();
};

loginFormBtn.addEventListener("click", openLoginForm);
closeLoginBtn.addEventListener("click", closeLoginForm);
signupFormBtn.addEventListener("click", openSignup);
closeSignupBtn.addEventListener("click", closeSignup);
for (let i = 0; i < shopBtn.length; i++) {
	shopBtn[i].addEventListener("click", openLoginForm);
}

// Login
loginForm.addEventListener("submit", function (e) {
	e.preventDefault();

	hero.classList.toggle("hidden");
	productsContent.classList.toggle("hidden");

	for (let i = 0; i < homeView.length; i++) {
		homeView[i].classList.toggle("hidden");
	}

	for (let i = 0; i < homeNav.length; i++) {
		homeNav[i].classList.toggle("hidden");
	}

	for (let i = 0; i < loginNav.length; i++) {
		loginNav[i].classList.toggle("hidden");
	}

	productsContent.style.marginTop = "100px";
	productsContent.style.marginBottom = "50px";

	closeLoginForm();
});

// Logout
logoutBtn.addEventListener("click", function (e) {
	e.preventDefault();

	hero.classList.toggle("hidden");
	productsContent.classList.toggle("hidden");

	for (let i = 0; i < homeView.length; i++) {
		homeView[i].classList.toggle("hidden");
	}

	for (let i = 0; i < homeNav.length; i++) {
		homeNav[i].classList.toggle("hidden");
	}

	for (let i = 0; i < loginNav.length; i++) {
		loginNav[i].classList.toggle("hidden");
	}

	productsContent.style.marginTop = "0px";
	productsContent.style.marginBottom = "0px";
});

// console.log(tg);

// Cart
const cartDisplayBtn = document.querySelector(".cart-display");
const cart = document.querySelector(".cart");
const cartSection = document.querySelector(".cart-section");
let cartBtns = document.querySelectorAll(".cart-btn");
let cartBoxes, removeCartBtns, quantityInputs;

cartDisplayBtn.addEventListener("click", () => {
	cart.style.marginTop = "100px";
	cart.classList.toggle("hidden");
	productsContent.classList.toggle("hidden");
	document.querySelector(".cart-text").classList.toggle("hidden");
	document.querySelector(".cart-arrow").classList.toggle("hidden");
});

function cartHandler() {
	for (let i = 0; i < cartBtns.length; i++) {
		cartBtns[i].onclick = function () {
			let product = cartBtns[i].parentElement.parentElement.parentElement;
			let title = product.querySelector(".card-title").innerText;
			let price = product.querySelector(".product-price").innerText;
			let productImg = product.parentElement.querySelector(".product-img").src;
			cartSection.innerHTML += `
				<div class="cart-box d-flex p-2 mb-3">
					<img src="${productImg}">
					<div class="details-box ps-3">
						<div class="cart-title pb-2"><h5>${title}</h5></div>
						<div class="cart-price pb-2"><h5>${price}</h5></div>
						<input type="number" value="1" class="cart-quantity text-center">
					</div>
					<button class="btn cart-remove ms-auto"><span class="material-icons">delete</span></button>
				</div>`;
			cartBoxes = document.querySelectorAll(".cart-box");
			removeCartBtns = document.querySelectorAll(".cart-remove");
			quantityInputs = document.querySelectorAll(".cart-quantity");
			alert("You have successfully added the product to your cart.");
			updateTotalPrice();

			for (let i = 0; i < removeCartBtns.length; i++) {
				removeCartBtns[i].onclick = function () {
					removeCartBtns[i].parentElement.remove();
					updateTotalPrice();
				};
			}

			for (let i = 0; i < quantityInputs.length; i++) {
				quantityInputs[i].addEventListener("input", function () {
					if (isNaN(quantityInputs[i].value) || quantityInputs[i].value <= 0) {
						input.value = 1;
					}
					updateTotalPrice();
				});
			}
		};
	}

	// Buy Products
	let btnBuy = document.querySelector(".btn-buy");
	btnBuy.addEventListener("click", function () {
		for (let i = 0; i < cartBoxes.length; i++) {
			cartBoxes[i].remove();
		}
		alert("Your Order is placed!");
		updateTotalPrice();
	});
}
cartHandler();

// For Cart Total Price
function updateTotalPrice() {
	let total = 0;
	cartBoxes = document.querySelectorAll(".cart-box");
	for (let i = 0; i < cartBoxes.length; i++) {
		let cartBox = cartBoxes[i];
		let priceElement = cartBox.querySelector(".cart-price");
		let quantityElement = cartBox.querySelector(".cart-quantity");
		let price = parseFloat(
			priceElement.innerText.replace("$", "").replace(" ", "")
		);
		let quantity = quantityElement.value;
		total += price * quantity;
		document.querySelector(".total-price").innerText = "$" + total;
	}

	if (cartBoxes.length == 0)
		document.querySelector(".total-price").innerText = "$" + 0;
}
updateTotalPrice();
