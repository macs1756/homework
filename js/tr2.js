const editTop = document.querySelector(".top_edit");
const areaWr = document.querySelector(".pr__bottom-wr");
const area = document.querySelector("#prArea");
const prFirst = document.querySelector(".pr__first");
const save = document.querySelector(".bottom_style");
const style = document.querySelector(".top_style");
const styleContent = document.querySelector(".pr__bottom-style");

editTop.addEventListener("click", function(){
	styleContent.classList.remove("bottom-style-open");
		area.value = prFirst.innerHTML;
		areaWr.classList.toggle("pr__open");
});


save.addEventListener("click", function(){

		prFirst.innerHTML = "";
	
		prFirst.insertAdjacentHTML("beforeend", area.value);
});


style.addEventListener("click", function(){
	areaWr.classList.remove("pr__open");
	styleContent.classList.add("bottom-style-open");
});


const font = document.querySelectorAll("[data-font]");




font.forEach(item=>{
	item.addEventListener("click", ()=>{
		if(item.checked){
			
			prFirst.style.fontSize = item.value;
		};
	});
	
});




const family = document.querySelectorAll("[data-family]");

family.forEach(item=>{
	item.addEventListener("click", ()=>{
		prFirst.style.fontFamily = item.value;
	});
});

