

const btnBurger = document.querySelector(".header__burger");
const contentBurger = document.querySelector(".burger__active");

btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
		contentBurger.classList.toggle("burger__open");
});

///////

const createBtn = document.querySelector(".createBtn");
const createContent = document.querySelector(".createTask");
const listContent = document.querySelector(".book__written");









createBtn.addEventListener("click", function(e){
			
if(createContent.value){
	document.querySelector(".create__null").style.display = "none";
	let str = createContent.value[0].toUpperCase() + createContent.value.substring(1);
			
	let listStyle =
		`
		<div class="listStyle"><img class="list__img" src="img/delete.svg" alt=""><span>${str}</span></div>

		`;
	listContent.insertAdjacentHTML("beforeend", listStyle);
	createContent.value = "";
}else{
	document.querySelector(".create__null").style.display= "block";
};
});




window.addEventListener("click", function(e){
	if(e.target.className === "list__img"){
		let deleteCurentEl = e.target.closest(".listStyle");
		deleteCurentEl.remove();
	};
});


	





const btn1 = document.querySelector(".scroll_btn");
const btn2 = document.querySelector(".btn2");
const p1 = document.querySelector("#p1");

btn1.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({
		top: 1020,
		behavior: "smooth",
	});
});



btn2.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({
		top: 510,
		behavior: "smooth",
	});
});






window.addEventListener("scroll", function(e){
	if(scrollY > 816){
		p1.classList.add("sc");
	}else{
		p1.classList.remove("sc");
	}
})



const line = document.querySelector("#slide_line");
const scrollImg = document.querySelector(".scrollImg_img");


window.addEventListener("scroll", function(e){
	console.log(scrollY);
	if(scrollY > 920){
		line.classList.add("line2");
	}else{
		line.classList.remove("line2");
	}

	if(scrollY > 1120){
		line.classList.add("line3");
	}else{
		line.classList.remove("line3");
	}

	if(scrollY > 1300){
		scrollImg.classList.add("scrollImg2");
	}else{
		scrollImg.classList.remove("scrollImg2");
	}
	
	if(scrollY > 1400){
		scrollImg.classList.add("scrollImg3");
	}else{
		scrollImg.classList.remove("scrollImg3");
	}










})