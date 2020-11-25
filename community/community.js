//Navbar initialisation
const navbar = document.getElementById("myTopNav");
const openNavButton = document.getElementById("open-nav");
openNavButton.onclick = function () {
	if (navbar.className === "nav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "nav";
	}
};
