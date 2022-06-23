	// ======Bagian Waktu======
const startWaktu = 10;
let waktu = startWaktu * 60;
let cdTimer = document.getElementById('countdown');
	if (localStorage.getItem('waktu')) {
		waktu = localStorage.getItem('waktu');
		console.log('yaa')
	}

let x = setInterval(function(){

	let menit = Math.floor(waktu / 60);
	let detik = waktu % 60;
	cdTimer.innerHTML = `${menit}: ${detik}`;

	if (detik < 10) {
		cdTimer.innerHTML = `${menit}: 0${detik}`
	}

	localStorage.setItem('waktu', waktu);

	if (menit < 0) {
		clearInterval(x);
		alert('waktu anda sudah habis!!!');
		document.getElementById('countdown').innerHTML = `0: 0`;
		localStorage.clear(waktu)
		window.close();
	}
	waktu--
},1000)

	// ======Bagian Vote======
const spanVisi1 = document.querySelector('.visiMisi1');
const spanVisi2 = document.querySelector('.visiMisi2');
const spanI1 = document.querySelector('.visiMisi1 i');
const spanI2 = document.querySelector('.visiMisi2 i');
const vote1 = document.querySelector('.paslon1 button');
const vote2 = document.querySelector('.paslon2 button');
const visiMisi = document.querySelectorAll('.wrapping span');
	
visiMisi[0].addEventListener('click',()=>{
		spanVisi1.style.height = '95%';
		spanVisi1.style.opacity= '1';
	})
visiMisi[1].addEventListener('click',()=>{
		spanVisi2.style.height = '95%';
		spanVisi2.style.opacity= '1';
	})
spanI1.addEventListener('click',()=>{
	spanVisi1.style.height = '0%';
	spanVisi1.style.opacity= '0';
})
spanI2.addEventListener('click',()=>{
	spanVisi2.style.height = '0%';
	spanVisi2.style.opacity= '0';
})
vote1.addEventListener('click', akhir);
vote2.addEventListener('click', akhir);

function akhir(){
	let	yakin = confirm('Apakah anda sudah yakin dengan pilihan anda?');
	if (yakin){
		localStorage.clear(waktu);
		clearInterval(x);
		alert('Terima kasih sudah memilih');
		window.close();
	}
}