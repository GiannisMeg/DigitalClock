const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let ampm = "AM";

	// logic change am to pm cause doenst exist in the computer
	if (h > 12) {
		h = h - 12;
		ampm = "PM";
	}

	// make use of con rendering cause we want to display 08 before 10 o'clock
	h = h < 10 ? "0" + h : h;
	//
	m = m < 10 ? "0" + m : m;
	//
	s = s < 10 ? "0" + s : s;

	hourEl.innerText = h;
	minuteEl.innerText = m;
	secondEl.innerText = s;
	ampmEl.innerText = ampm;

	// code run up to down so whenever we reach the point the function is called and update the state
	setTimeout(() => {
		updateClock();
	}, 1000);
}

updateClock();
