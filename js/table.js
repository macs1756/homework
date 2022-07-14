

const tableBtn = document.querySelector(".table__button");
const spaceCreate = document.querySelector(".table__item-wr");







tableBtn.addEventListener("click", function(){


	let colRemove = document.querySelectorAll("#col");
	colRemove.forEach(item=>{
	item.remove();
		});




	let TR = +document.querySelector("#TR").value;
	let TD =+document.querySelector("#TD").value;

	const countItem = TR * TD;

	
	spaceCreate.style.gridTemplateColumns = `repeat(${TR}, 1fr)`;



	for(index=0; index<countItem; ++index){
		spaceCreate.insertAdjacentHTML("beforeend", `<div id='col'>${index+1}</div>`);

	}
	
	let cc = document.querySelectorAll("#col");
	let ww = document.querySelector("#WW").value;
	let hh = document.querySelector("#HH").value;
	let wwBd = document.querySelector("#widthBd").value;
	let typeBd = document.querySelector("#typeBd").value;
	let colorBd = document.querySelector("#colorBd").value;
	


	cc.forEach(item=>{
		item.style.width = ww;
		item.style.height = hh;
		item.style.border = `${wwBd} ${typeBd} ${colorBd}`;
	})
	


		
	
	




TR = "";
TD = "";
ww = "";
hh = "";
wwBd = "";
typeBd = "";
colorBd ="";
});


//////////////////


///window.setInterval(()=>{
//	console.log("interval");
//},2000);




const les2In = document.querySelector("#les2");
const les2btn = document.querySelector("#les2btn");


if(!les2In.value){
	les2btn.disabled = true;
}

les2In.addEventListener("input", function(){

	if(les2In.value.length<5){
		les2btn.disabled = true;
	}else{
		les2btn.disabled = false;
	}
})


les2btn.addEventListener("click", ()=>{
	console.log(`Дані передано: ${les2In.value}`);
})




//console.log(d.getDay());
//console.log(d.getDate());
//console.log(d.getMonth());
//console.log(d.getFullYear());
//console.log(d.getHours());
//console.log(d.getMinutes());
//console.log(d.getSeconds());


let tHours = document.querySelector(".date__hours");
let tMin = document.querySelector(".date__minuts");
let tSecond = document.querySelector(".date__second");
let wrDate = document.querySelector(".date");




function timeOn(){
const d = new Date();

if(d.getHours()<10){
	tHours.innerText = `0${d.getHours()}`;
}else{
	tHours.innerText = d.getHours();
}


if(d.getMinutes()<10){
	tMin.innerText = `0${d.getMinutes()}`;
}else{
	tMin.innerText = d.getMinutes();
}

if(d.getSeconds()<10){
	tSecond.innerText = `0${d.getSeconds()}`;
}else{
	tSecond.innerText = d.getSeconds();
}









}



setInterval(timeOn , 1);