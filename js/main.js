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
