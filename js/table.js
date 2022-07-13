

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