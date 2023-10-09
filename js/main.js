const dropDownContainer = document.getElementById('navbarNavDropdown');

const dropDownItem = document.querySelectorAll('.dropdown-item');

console.log(dropDownItem);

dropDownItem.forEach((e) => {
	e.addEventListener('click', () => {
		dropDownContainer.classList.remove('show');
	});
});
