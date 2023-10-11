const dropDownContainer = document.getElementById('navbarNavDropdown');
const dropDownItem = document.querySelectorAll('.dropdown-item');

console.log(dropDownItem);

dropDownItem.forEach((e) => {
	e.addEventListener('click', () => {
		dropDownContainer.classList.remove('show');
	});
});

const closeNavbar = document.querySelectorAll('.close-navbar');
console.log(closeNavbar);
closeNavbar.forEach((e) => {
	e.addEventListener('click', () => {
		dropDownContainer.classList.remove('show');
	});
});
