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
function navbarToggle() {
	if (navbar.className === "nav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "nav";
	}
}
