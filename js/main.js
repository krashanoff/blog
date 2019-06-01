const tog = document.getElementById('toggleday');
const day = document.getElementById('day');

var status;

function init() {
	day.style.transition = 'none';

	if (sessionStorage.getItem('daymode') == 'true') {
		day.style.opacity = 1;
		return;
	}

	sessionStorage.setItem('daymode', 'false');
}

function toggleDay() {
	status = sessionStorage.getItem('daymode');
	day.style.transition = "opacity .75s ease-in";

	if (status == 'true') {
		sessionStorage.setItem('daymode', 'false');
		day.style.opacity = 0;
	}
	else {
		sessionStorage.setItem('daymode', 'true');
		day.style.opacity = 1;
	}
}

tog.addEventListener('click', toggleDay);
init();