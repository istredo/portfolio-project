let isChecked = false;
let x = 0;
let backgroundColor = "#827D96";
let size = "20px";


function onBtnUp() {
	const tl = gsap.timeline();
	x = 0;
	backgroundColor = "#827D96";
	size = "20px";
	isChecked = !isChecked;

	if (isChecked) {
		x = 28;
		backgroundColor = "#FFFFFF";
		size = "80px";
		document.body.classList.add('dark');
		localStorage.setItem('darkMode', 'dark')
	} else {
		document.body.classList.toggle('dark');
		localStorage.setItem('darkMode', 'light')
	}
	tl.to(".knob", { x, duration: 0.7 }, "up");
	tl.to(".top", { backgroundColor, duration: 0.7 }, "up");
	tl.to(".light", { width: size, height: size, duration: 1 }, "up");
}

const btn = document.querySelector(".btn");
btn.addEventListener("mouseup", onBtnUp);

const btnDarkMode = document.querySelector(".btn");

// Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') == 'dark') {
	document.body.classList.add("dark");
}



// Проверка системных настроек
// var darkSystem = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches);
// if (darkSystem) {
// 	document.body.classList.add("dark");
// }

// Включение ночного режима по кнопке
// btnDarkMode.onclick = () => {
// 	const isDark = document.body.classList.toggle('dark');

// 	if (isDark) {
// 		localStorage.setItem('darkMode', 'dark')
// 	} else {
// 		localStorage.setItem('darkMode', 'light')
// 	}
// }