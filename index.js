let navHeader = document.querySelector('.home');
	navHeader.addEventListener('click',(e)=>{
		e.preventDefault();	
	})

	// ======Bagian Menu toggle======
let navigasi = document.querySelector('.wrap-nav1');
const menuToggle = document.querySelector('.menu');
	menuToggle.addEventListener('click',()=>{
		menuToggle.classList.toggle('toggle');
		navigasi.classList.toggle('geser');
	})

	// ======Bagian Drop-Down======
let drop = document.querySelectorAll('.drop-down a');
	for (let i=0; i<drop.length;i++){
		drop[i].addEventListener('click', (e)=>{
			e.preventDefault();

			let dropScroll = drop[i].getAttribute('href'),
			scrollDrop = document.querySelector(dropScroll),
			scrollElement = scrollDrop.offsetTop,
			nilaiAwal = 0,
			scroolToElem = scrollElement - nilaiAwal;
			
			window.scrollTo({
				top: scroolToElem,
				behavior: 'smooth'
			})
		})
	}
let panah = document.querySelector('.fa-angle-down');
let dropMoblie = document.querySelector('.home');
const dropMo = document.querySelector('.drop-down');
dropMoblie.addEventListener('click',(e)=>{
	panah.style.transform = 'rotate(180deg)';
	dropMo.classList.toggle('drop-mobile');
	dropMo.classList.toggle('none');
	if (!dropMo.classList.contains('drop-mobile')) {
		panah.style.transform = 'rotate(0deg)';
	}
})
	// ======Bagian UpScrool======
const up = document.querySelector('.up');
const logo 	 = document.querySelector('.logo');

window.addEventListener('scroll', ()=>{
	return (window.pageYOffset > 200 ? up.classList.add('active') : up.classList.remove('active'));
});

up.addEventListener('click', scrool);

logo.addEventListener('click', scrool);

function scrool(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

	// ======Bagian Header======
window.addEventListener('scroll', () =>{
	const logoSpan 	 = document.querySelector('.logo span'),
	header = document.getElementById('header'),
	home = document.querySelector('.home a');

	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		header.style.height = '6vmax';
		logo.style.color = '#6495ED';
		header.style.backgroundColor= 'white';
		logoSpan.style.color = '#FF7F50';
		home.style.color = '#6495ED';
		header.style.boxShadow = "0vmax -0.3vmax 1.5vmax #000000";
	} else{
		header.style.backgroundColor= 'transparent';
		logo.style.color = 'grey';
		header.style.boxShadow = "none";
		logoSpan.style.color = 'grey';
		home.style.color = 'black';	
	}
})

	// =====Bagian Article 1======
window.addEventListener('scroll', ()=>{
  const gambarArticle1 = document.getElementById('Gambar1'),
  a = window.innerHeight,
  ruler = gambarArticle1.getBoundingClientRect().top,
  b = 150;


  if (ruler < a - b) {
    gambarArticle1.style.opacity = 1;
    gambarArticle1.style.transform = 'scale(1)'
  }
})

	// =====Bagian Article 2======
window.addEventListener('scroll', ()=>{
  const gambarArticle2 = document.getElementById('Gambar2'),
  ruler = gambarArticle2.getBoundingClientRect().top,
  a = window.innerHeight,
  b = 170;

  if(ruler < a - b){
    gambarArticle2.style.opacity = 1;
    gambarArticle2.style.transform = 'scale(1)';
  }
})

	// =====Bagian Content======
window.addEventListener('scroll', ()=>{
	const content =  document.querySelectorAll('.content');
	
	for(let i= 0; i < content.length; i++){
		const roler = content[i].getBoundingClientRect().top;
		const n = window.innerHeight;
		const m = 180;

	if(roler < n - m){
		content[i].style.opacity = 1;
		content[i].style.transform = 'scale(1)';
	}}
})
// =====CONTOH=====
document.addEventListener('scroll', function(){
	let wrp = document.querySelector('.wrp')
	let team = document.querySelector('.team')
	const creat = document.querySelector('.creat'),
	a = window.innerHeight,
	scroll = creat.getBoundingClientRect().top,
	b = 200;

	if (scroll < a - b) {
		wrp.style.animation = "kontak 2s linear forwards";
		team.style.animation = "creat 2s linear forwards";
	}
})
	

	// =====Bagian Content Slide======
let awal = document.getElementById('awal'),
	mundur = document.getElementById('mundur'),
	lanjut = document.getElementById('lanjut'),
	atual	= 0,
	ruler	= true;

mundur.addEventListener('click', ()=>{
	atual--;
	ruler = false;
	if (atual == 0) {
		mundur.style.display = 'none'
	}else if(atual < 4){
		lanjut.style.removeProperty('display');
	}
	slidesShow();
})
	if (atual == 0) {
		mundur.style.display = 'none'
	}

lanjut.addEventListener('click', ()=>{
	atual++;
	ruler = false;
	if(atual >= 4) {
		lanjut.style.display = 'none'
	}else if(atual > 0){
		mundur.style.removeProperty('display');
	}
	slidesShow();
})
function slidesShow(){
	if(atual >= 5){
		atual =0;
	}else if(atual < 0){
		atual = 4;
	}
	awal.style.marginLeft = -27*atual+'vmax';
}

 	//Bagian Kontak
const notifForm = document.querySelector('.alert');
	notifForm.addEventListener('click',()=>{
		notifForm.style.transform = 'translateY('+'50px)';
		notifForm.style.opacity='0';
	})
const i = document.querySelectorAll('.cekNama i')
let polaregex = /^[a-zA-Z\s]{2,100}$/;
const nama = document.getElementById('nama');
	nama.addEventListener('keydown',()=>{
		i[0].style.opacity='0'
		i[1].style.opacity='0'
		if (polaregex.test(nama.value)) {
			i[1].style.opacity='1';
			i[0].style.opacity='0';
		}else{
			i[0].style.opacity='1';
			i[1].style.opacity='0';
		}
	})
	nama.addEventListener('blur',()=>{
		if (nama.value=='') {
			i[0].style.opacity='0';
			i[1].style.opacity='0';
			notifForm.style.transform = 'translateY('+'50px)';
			notifForm.style.opacity='0';
		}
	})
const iNumber = document.querySelectorAll('.cekNomor i');
const textNumber = document.querySelector('.textNumber');
let polaregexNumber = /^0\d{5,11}$/;
const nomor = document.getElementById('number');
	nomor.addEventListener('keydown',()=>{
		let polaregexNumber = /^0\d{5,11}$/;
		if (polaregexNumber.test(nomor.value)) {
			iNumber[0].style.opacity='0';
			iNumber[1].style.opacity='1';
			textNumber.style.opacity='0';
		}else{
			iNumber[0].style.opacity='1';
			iNumber[1].style.opacity='0';
			textNumber.style.opacity='1';
		}
		
	})
	nomor.addEventListener('blur',()=>{
		if (nomor.value=='') {
			iNumber[0].style.opacity='0'
			iNumber[1].style.opacity='0'
			textNumber.style.opacity='0'
		}
	})
const iEmail = document.querySelectorAll('.cekEmail i');
const textEmail = document.querySelector('.textEmail');
let polaregexEmail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
let regexEmail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
const email = document.getElementById('email');
	email.addEventListener('keydown',()=>{
		let polaregexEmail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
		let regexEmail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
		if (polaregexEmail.test(email.value) || regexEmail.test(email.value)) {
			iEmail[0].style.opacity='0';
			iEmail[1].style.opacity='1';
			textEmail.style.opacity='0';
		}else{
			iEmail[0].style.opacity='1';
			iEmail[1].style.opacity='0';
			textEmail.style.opacity='1';
		}
	})
	email.addEventListener('blur',()=>{
		if (email.value=='') {
			iEmail[0].style.opacity='0';
			iEmail[1].style.opacity='0';
			textEmail.style.opacity='0';
		}
	})

const kirim = document.querySelector('.kirim');
const loading = document.querySelector('.load');
const buttonKirim = document.getElementById('form');
	buttonKirim.addEventListener('submit', (e)=>{
		e.preventDefault();
		if (polaregex.test(nama.value) && polaregexNumber.test(nomor.value) &&(polaregexEmail.test(email.value) || regexEmail.test(email.value))) {
			i[0].style.opacity='0';
			i[1].style.opacity='0';
			iNumber[0].style.opacity='0'
			iNumber[1].style.opacity='0'
			textNumber.style.opacity='0'
			iEmail[0].style.opacity='0';
			iEmail[1].style.opacity='0';
			textEmail.style.opacity='0';
			console.log(true)
		}else{
			console.log(false)
		}
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbyCInVX8vYSamqAdDWuKdZpTX394XyrDMTOfbHvEweP0W1m6zOC8hCpgd5zZ4i9s50alw/exec'
const form = document.forms["form-kontak-evoting"];
form.addEventListener('submit', e => {
    e.preventDefault()
    if (polaregex.test(nama.value) && polaregexNumber.test(nomor.value) &&(polaregexEmail.test(email.value) || regexEmail.test(email.value))) {
    	kirim.classList.toggle('loading')
      	loading.style.opacity='1'
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
    	kirim.classList.toggle('loading')
      	loading.style.opacity='0'
      	notifForm.style.transform = 'translateY('+'0px)';
		notifForm.style.opacity='1';
      	console.log('Success!', response)
      	buttonKirim.reset(console.log('Success!'));
      })
    }else{
    	alert('silahkan masukan data yang benar')
    }
})