const editTop = document.querySelector(".top_edit");
const areaWr = document.querySelector(".pr__bottom-wr");
const area = document.querySelector("#prArea");
const prFirst = document.querySelector(".pr__first");
const save = document.querySelector(".bottom_style");
const style = document.querySelector(".top_style");
const styleContent = document.querySelector(".pr__bottom-style");

editTop.addEventListener("click", function () {
	styleContent.classList.remove("bottom-style-open");
	area.value = prFirst.innerHTML;
	areaWr.classList.toggle("pr__open");
});


save.addEventListener("click", function () {

	prFirst.innerHTML = "";

	prFirst.insertAdjacentHTML("beforeend", area.value);
});


style.addEventListener("click", function () {
	areaWr.classList.remove("pr__open");
	styleContent.classList.add("bottom-style-open");
});


const font = document.querySelectorAll("[data-font]");




font.forEach(item => {
	item.addEventListener("click", () => {
		if (item.checked) {

			prFirst.style.fontSize = item.value;
		};
	});

});




const family = document.querySelectorAll("[data-family]");
const sel = document.querySelector("#family");



family.forEach(item => {
	item.addEventListener("click", () => {
		prFirst.style.fontFamily = sel.value;
	});
});



const fontCheck = document.querySelectorAll("#fontCheck");

fontCheck.forEach(item => {
	item.addEventListener("click", () => {



		if (item.value === "900" && item.checked) {
			prFirst.style.fontWeight = item.value;
		} else {
			prFirst.style.fontWeight = "400";
		}


		if (item.value === "italic" && item.checked) {
			prFirst.style.fontStyle = item.value;
		} else {
			prFirst.style.fontStyle = "normal";
		}




	});


});


const colorText = document.querySelector("#textColor");
const col = document.querySelector(".col");
const color2 = document.querySelector(".color2");
const currentColor = document.querySelectorAll(".colChildren");
const currentColor2 = document.querySelectorAll(".colChildren2");
const colorBg = document.querySelector("#bgColor");



colorText.addEventListener("click", () => {

	col.classList.toggle("col__open");
	currentColor.forEach(item => {
		item.addEventListener("click", function (e) {
			col.classList.remove("col__open");
			let bgcol = getComputedStyle(e.target);
			prFirst.style.color = bgcol.backgroundColor;
		});
	});
});







colorBg.addEventListener("click", function (e) {

		color2.classList.toggle("col__open");


		currentColor2.forEach(item => {
			item.addEventListener("click", function (e) {
				color2.classList.remove("col__open");
				let bgcol = getComputedStyle(e.target);
				prFirst.style.backgroundColor = bgcol.backgroundColor;

			});
		});

});


