let navigasi = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menu');
	menuToggle.addEventListener('click',()=>{
		menuToggle.classList.toggle('toggle');
		navigasi.classList.toggle('geser');
		console.log(navigasi);
	})

const nav =  document.querySelector('.simulasi');
	nav.addEventListener('click', (e)=>{
		e.preventDefault();
	})

	// ======Bagian Inputan======
const regexNik = /^\d{16}$/;
const regexNik1 = /^\d{15}$/;
const span = document.querySelector('#form span');
const notif = document.querySelectorAll('form i');
const inputNik = document.getElementById('NIK');
	inputNik.addEventListener('keydown', ()=>{
		input();
		span.style.opacity='0';
	})

function input(){
	if (regexNik1.test(inputNik.value)) {
		notif[2].style.opacity='1';
		notif[1].style.opacity='0';
		console.log('benar')
	}else{
		notif[1].style.opacity='1';
		notif[2].style.opacity='0';
		console.log('salah')
	}
	inputNik.addEventListener('blur',()=>{
		if(inputNik.value==''){
			notif[1].style.opacity='0';
			notif[2].style.opacity='0';
		}
		})
}
const kirim = document.getElementById('form');
	kirim.addEventListener('submit',(e)=>{
		e.preventDefault();
	if(regexNik.test(inputNik.value)) {
		window.open("voting/voting.html","_blank","channelmode=yes, toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes width=1500, height=1500");
			notif[1].style.opacity='0';
			notif[2].style.opacity='0';
		kirim.reset(console.log('berhasil'))
	}
	else{
		console.log(span)
		span.style.opacity='1';
	}
	})
