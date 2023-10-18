const dropDownContainer = document.getElementById('navbarNavDropdown');
const valoresH2 = document.querySelector('.valores__h2');
const dropDownItem = document.querySelectorAll('.dropdown-item');
dropDownItem.forEach((e, i) => {
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

function scrollAnimations(domObject, animationRemove, animationAdd) {
	const triggerBottom = (window.innerHeight / 5) * 4;
	domObject.forEach((animatedObject) => {
		const top = animatedObject.getBoundingClientRect().top;
		if (top < triggerBottom) {
			animatedObject.classList.remove(animationRemove);
			animatedObject.classList.add(animationAdd);
		} else {
			animatedObject.classList.remove(animationAdd);
			animatedObject.classList.add(animationRemove);
		}
	});
}

//* titulos nuestros valores - comunicacion.interna.emocional.externa
const tittlesInRigth = document.querySelectorAll('.in-rigth');
window.addEventListener('scroll', () => {
	scrollAnimations(tittlesInRigth, 'animate__fadeOutRight', 'animate__fadeInRight');
});

//*about us cards flip
const flipY = document.querySelectorAll('.quienes-somos__card');
window.addEventListener('scroll', () => {
	scrollAnimations(flipY, 'animate__flipOutY', 'animate__flipInY');
});

//*logos
const fadeInDown = document.querySelectorAll('.in-down');
window.addEventListener('scroll', () => {
	scrollAnimations(fadeInDown, 'animate__fadeOutUp', 'animate__fadeInDown');
});

const fadeIn = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
	scrollAnimations(fadeIn, 'animate__fadeOut', 'animate__fadeIn');
});

const internaLi = document.querySelectorAll(' .com-interna__ul.first > li');
// console.log(internaLi);
internaLi.forEach((e, i) => {
	e.classList.add('animate__animated');
	e.style.setProperty('--animate-delay', `${i * 1000 + 1000}ms`);
	e.style.setProperty('--animate-duration', `${i * 1000 + 1000}ms`);
});

window.addEventListener('scroll', () => {
	scrollAnimations(internaLi, 'animate__fadeOutRight', 'animate__fadeInRight');
	// if (internaLi.includes('fadeInRight')) {
	// 	console.log('despegaa');
	// }
	// console.log(
	// 	internaLi[0].classList.value === 'animate__animated animate__fadeInRight'
	// );
});
// console.log(internaLi[0]);

const emocionalLi = document.querySelectorAll(' .com-interna__ul.second > li');
emocionalLi.forEach((e, i) => {
	e.classList.add('animate__animated');
	e.style.setProperty('--animate-delay', `${i * 1000 + 1000}ms`);
	e.style.setProperty('--animate-duration', `${i * 1000 + 1000}ms`);
});

window.addEventListener('scroll', () => {
	scrollAnimations(emocionalLi, 'animate__fadeOutLeft', 'animate__fadeInLeft');
});

const externaLi = document.querySelectorAll(' .com-interna__ul.third > li');
externaLi.forEach((e, i) => {
	e.classList.add('animate__animated');
	e.style.setProperty('--animate-delay', `${i * 1000 + 1000}ms`);
	e.style.setProperty('--animate-duration', `${i * 1000 + 1000}ms`);
});

window.addEventListener('scroll', () => {
	scrollAnimations(externaLi, 'animate__fadeOutLeft', 'animate__fadeInLeft');
});

//*list type image

// const allMainLi = document.querySelectorAll('main li');
// allMainLi.forEach((e) => {
// 	const listIconImg = document.createElement('img');
// 	listIconImg.className = 'list-icon';
// 	e.insertAdjacentElement('afterbegin', listIconImg).setAttribute(
// 		'src',
// 		'../../img/logo-simple.png'
// 	);
// });

//* HAND show

dropDownItem.forEach((e, i) => {
	e.addEventListener('click', () => {
		if (i === 3 || i === 4) {
			const hand = document.getElementById('hand');
			hand.classList.toggle('display-none');
			setTimeout(() => {
				hand.classList.add('display-none');
			}, 4000);
		}
	});
});
