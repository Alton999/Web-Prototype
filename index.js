const form = document.getElementById("signin-modal");
const signupButtons = document.getElementsByClassName("openModal");
//Only selects the first element with the class name of close. Ensure that we don't
//Use any other class name called close.
const closeButton = document.getElementsByClassName("close")[0];
const submitButton = document.getElementsByClassName("submit")[0];

//Navbar initialisation
const navbar = document.getElementById("myTopNav");
const openNavButton = document.getElementById("open-nav");

//Toggle initialisation
const togglePage = document.getElementById("fullwidth-container");
const toggleBar = document.getElementById("interactive-bar");
const btns = toggleBar.getElementsByClassName("btn");
const toggleDiv = togglePage.getElementsByClassName("toggle-div");

//Handle events (Open) but pass in no props (Not required)
for (let i = 0; i < signupButtons.length; i++) {
	signupButtons[i].onclick = function () {
		form.style.display = "block";
	};
}

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

//This for loop loops over the three toggle buttons and adds a click listener
//Since we didnt want to individually select each button using the in built
//Js onclick doesn't work anymore. We use these buttons to inject the class
//Active
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		activeBtn[0].className = activeBtn[0].className.replace(" active", "");
		this.className += " active";
		activeDiv[0].className = activeDiv[0].className.replace(" activated", "");
		toggleDiv[i].className += " activated";
	});
}
