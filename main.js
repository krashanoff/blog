const tog = document.getElementById('toggleday');
const day = document.getElementById('day');

function dayToggle() {
	day.classList.toggle('dayfilter');
	tog.classList.toggle('dayfilter');
}

tog.addEventListener('click', dayToggle);