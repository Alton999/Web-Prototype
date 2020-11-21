// Conditional rendering by using get element by ID
// Initalising variables
const form = document.getElementById("signin-modal");
const signupButton = document.getElementById("openModal");
//Only selects the first element with the class name of close. Ensure that we don't
//Use any other class name called close.
const closeButton = document.getElementsByClassName("close")[0];
const submitButton = document.getElementsByClassName("submit")[0];

//Navbar initialisation
const navbar = document.getElementById("myTopNav");
const openNavButton = document.getElementById("open-nav");

//Toggle initialisation
var toggleBar = document.getElementById("interactive-bar");
var btns = toggleBar.getElementsByClassName("btn");

//Handle events (Open) but pass in no props (Not required)
signupButton.onclick = function () {
	form.style.display = "block";
};
//Handle events (Close) but pass in no props (Not required)
closeButton.onclick = function () {
	form.style.display = "none";
};
submitButton.onclick = function () {
	form.style.display = "none";
};
//Clicking anywhere outside the modal should close it as well passing in
//Event property
window.onclick = function (event) {
	//Checks if the event target is actually the modal
	if (event.target == form) {
		form.style.display = "none";
	}
};

//Navbar toggle script (Esssentially just add the className in)
openNavButton.onclick = function () {
	if (navbar.className === "nav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "nav";
	}
};

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
