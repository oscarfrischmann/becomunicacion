import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
import {
	getFirestore,
	collection,
	addDoc,
	setDoc,
	doc,
	getDocs,
	deleteDoc,
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

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

//*contact FORM
//*animation
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`
		)
		.join('');
});

//* form functionality
const firebaseConfig = initializeApp({
	apiKey: 'AIzaSyDfjRthkU5Rmh5MIH4E6CBf5quLyEPaQd0',
	authDomain: 'be-comunicacion.firebaseapp.com',
	projectId: 'be-comunicacion',
	storageBucket: 'be-comunicacion.appspot.com',
	messagingSenderId: '499964412994',
	appId: '1:499964412994:web:16f832a42443b0751159db',
});

//*databes write
const db = getFirestore(firebaseConfig);

const form = document.getElementById('contactForm');
function submitForm(e) {
	e.preventDefault();
	const email = form['email'].value;
	const text = form['text'].value;

	const contacto = {
		email: email,
		text: text,
	};
	(async function () {
		try {
			await addDoc(collection(db, 'contacto'), contacto).then(() => {
				const modalForm = document.getElementById('modalForm');
				modalForm.classList.toggle('display-none');
				modalForm.classList.toggle('animate__animated');
				setTimeout(() => {
					modalForm.classList.toggle('display-none');
					modalForm.classList.toggle('animate__animated');
					location.reload();
				}, 2000);
			});
		} catch (e) {
			console.log('Error enviando document:', e);
		}
	})();
}
if (window.location.href.includes('login')) {
	console.log('');
} else {
	form.addEventListener('submit', submitForm);
	console.log('no');
}

//* google auth

const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();

//* SIGN IN GOOGLE
const signInButton = document.getElementById('googleLogIn');
signInButton.addEventListener('click', () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(result);
			const userID = { userID: user.uid };
			console.log(userID);
			(async function () {
				try {
					await setDoc(doc(db, 'Users', user.displayName), userID).then(
						console.log('User ID added')
					);
				} catch (e) {
					console.error('User ID NOT added: ', e);
				}
			})();
			// IdP data available using getAdditionalUserInfo(result)
			// ...
			// console.log(getMessages(db));
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
});

//sign out
const signOutButton = document.getElementById('googleLogOut');
signOutButton.addEventListener('click', () => {
	signOut(auth)
		.then(() => {
			console.log('Signed Out succesfully');
		})
		.catch((error) => {
			console.log('We couldn´t sign you Out', error);
		});
});

// detect auth state
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		console.log('User Logged In');
		console.log(user);
		getMessages(db);
	} else {
		console.log('No User Logged In');
	}
});

//GET INFO
const msgContainer = document.getElementById('messages');
let allMessagesInDB;
async function getMessages(db) {
	try {
		const mensajes = collection(db, 'contacto');
		const mensajesSnapshot = await getDocs(mensajes);
		console.log(mensajesSnapshot);
		allMessagesInDB = mensajesSnapshot.docs.map((doc) => doc.data());
		const withID = mensajesSnapshot.docs.map((doc) => doc.id);
		console.log(withID);
		console.log(allMessagesInDB);

		allMessagesInDB.forEach((msg, i) => {
			msg.id = withID[i];
			let newMsgDiv = document.createElement('div');
			newMsgDiv.className = 'msgContainer';

			const email = document.createElement('span');
			email.textContent = ` ${msg.email}`;

			const text = document.createElement('span');
			text.textContent = ` ${msg.text}`;

			msgContainer.appendChild(newMsgDiv);
			newMsgDiv.appendChild(email);
			newMsgDiv.appendChild(text);

			const deleteMsg = document.createElement('button');
			deleteMsg.innerHTML = 'Borrar Mensaje';
			deleteMsg.setAttribute('data-id', msg.id);
			newMsgDiv.appendChild(deleteMsg);
		});
		const deleteBTNS = msgContainer.querySelectorAll('#messages button ');
		console.log(deleteBTNS);
		for (let btn of deleteBTNS) {
			btn.addEventListener('click', async ({ target: { dataset } }) => {
				deleteMsg(dataset.id);
				setTimeout(() => {
					location.reload();
				}, 1000);
			});
		}

		return allMessagesInDB;
	} catch (e) {
		console.error('Error getting documents', e);
	}
}
// console.log(getMessages(db));
const getData = document.getElementById('getData');

getData.addEventListener('click', () => {
	location.reload();
	// getMessages(db);
	// 	setTimeout(() => {

	// 	}, 3000);
});

function deleteMsg(tg) {
	deleteDoc(doc(db, 'contacto', tg));
}
