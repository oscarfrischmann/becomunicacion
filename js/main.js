const dropDownContainer = document.getElementById('navbarNavDropdown');

const dropDownItem = document.querySelectorAll('.dropdown-item');
dropDownItem.forEach((e) => {
	closeNavbar(e);
});

const navbarLinks = document.querySelectorAll('.close-navbar');
navbarLinks.forEach((e) => {
	closeNavbar(e);
});

function closeNavbar(e) {
	e.addEventListener('click', () => {
		dropDownContainer.classList.remove('show');
	});
}

//*LOGO simple animation
setTimeout(() => {
	logoSimple.classList.remove('animate__animated');
	logoSimple.classList.toggle('animate__bounceInDown');
}, 1000);
const logoSimple = document.querySelector('.logo-simple');
logoSimple.addEventListener('click', () => {
	logoSimple.classList.toggle('animate__animated');
	logoSimple.classList.toggle('animate__bounceInDown');
	setTimeout(() => {
		logoSimple.classList.remove('animate__animated');
		logoSimple.classList.toggle('animate__bounceInDown');
	}, 1000);
});

(function getResolution() {
	console.log(`
	Hola Aniela!!!
	
	  Ancho: ${window.screen.width}
	  Alto: ${window.screen.height}
	`);
})();
