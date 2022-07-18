
let daysT = document.querySelector(".action__days");
let hrsT = document.querySelector(".action__hrs");
let minT = document.querySelector(".action__min");
let secT = document.querySelector(".action__sec");

function time2(){
	//дата до якої буде відлік
		let myDate = new Date(2022,6,24,0,0,0,0).getTime();
	
	//поточна дата
		let currentDate = new Date().getTime();
	
	
	//віднімаємо
		let distance = +myDate - +currentDate;
	
	
	//	витягуємо в змінні дані
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor(distance% (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
		let min = Math.floor(distance% (1000 * 60 * 60)/(1000 * 60 ));
		let sec = Math.floor(distance% (1000 * 60)/1000);

	if(days<10){
		days = "0"+days;
	}
	if(hours<10){
		hours = "0"+hours;
	}
	
	if(min<10){
		min = "0"+min;
	}
	
	if(sec<10){
		sec = "0"+sec;
	}
	
daysT.innerText = days;
hrsT.innerText = hours;
minT.innerText = min;
secT.innerText = sec;
	
	}
	
	setInterval(time2, 1000);





	///////////////////////

	const inputCar = document.querySelector("#car");
	const part2 = document.querySelector(".part2");
	const allP = part2.querySelectorAll("p");


	inputCar.addEventListener("input", ()=>{
		let inp = inputCar.value;
		let reg = /bm/ ;
		allP.forEach(item=>{
			if(reg.test(item.innerText)){
				item.style.display = "block";
			}else{
				item.style.display = "none";
			}
		})
	});

////////////////////////
	const in74 = document.querySelector("#in74");
	const in74Wr = document.querySelector(".in74_wr");
	const in74p = in74Wr.querySelector("p");

	
	//in74.addEventListener("input", ()=>{
	//	const regIn74 = /^[0-9]{12}$/
	//	
//
//
//
	//	if(regIn74.test(in74.value)){
	//		in74.style.border = "1px solid green";
	//		in74p.style.color = "green";
	//		in74p.innerText = "yes";
	//	}else{
	//		in74.style.border = "1px solid red";
	//		in74p.style.color = "red";
	//		in74p.innerText = "now";
	//	}
	//});



	let numberMask = IMask(in74,
		{
			mask: '+{380}(00)00-00-000',
		});

	