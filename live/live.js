const nav = document.querySelector('.live');
	nav.addEventListener('click',(e)=>{
		e.preventDefault();
	})

let navigasi = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menu');
	menuToggle.addEventListener('click',()=>{
		menuToggle.classList.toggle('toggle');
		navigasi.classList.toggle('geser');
	})