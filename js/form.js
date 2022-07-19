




		 const userName = document.querySelector("#userName");
		 const surName = document.querySelector("#surName");
		 const userEmail = document.querySelector("#userEmail");
		 const userTel = document.querySelector("#userTel");
		 const userPass = document.querySelector("#userPass");
		 const inputBtn = document.querySelector("#inputBtn");
			const allForm = document.forms.f1;
		const f1 = document.querySelector("#form");








		userTel.addEventListener("input", ()=>{
			let numberMask = IMask(userTel,
				{
					mask: '+{380}(00)0000000',
				});
		});


		




//імя
		 inputBtn.addEventListener("click", function(e){
					
			let regName = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}$/;





			if(regName.test(userName.value)){
				userName.style.border = "1px solid green";
				userName.nextElementSibling.style.display = "none";
			}else{
				userName.style.border = "1px solid red";
				userName.nextElementSibling.style.display = "block";
				
			};

		
	//номер тел		
			let regPass = /^[a-zA-Z]{5,}[0-9]{2,}$/;

			if(regPass.test(userPass.value)){
				userPass.style.border = "1px solid green";
				userPass.nextElementSibling.style.display = "none";
			}else{
				userPass.style.border = "1px solid red";
				userPass.nextElementSibling.style.display = "block";
				
			};

			




//прізвище
			if(regName.test(surName.value)){
				surName.style.border = "1px solid green";
				surName.nextElementSibling.style.display = "none";
			}else{
				surName.style.border = "1px solid red";
				surName.nextElementSibling.style.display = "block";
				
			};



//емаил			
			let regEmail = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;

			if(regEmail.test(userEmail.value)){
				userEmail.style.border = "1px solid green";
				userEmail.nextElementSibling.style.display = "none";
			}else{
				userEmail.style.border = "1px solid red";
				userEmail.nextElementSibling.style.display = "block";
				
			};



//тел			
			regTel = /^\+[0-9]{3}\([0-9]{2}\)[0-9]{7}$/;

			if(regTel.test(userTel.value)){
				userTel.style.border = "1px solid green";
				userTel.nextElementSibling.style.display = "none";
			}else{
				userTel.style.border = "1px solid red";
				userTel.nextElementSibling.style.display = "block";
				
			};


			
if(regName.test(userName.value) && regPass.test(userPass.value) && regName.test(surName.value) && regEmail.test(userEmail.value)){
		setTimeout(resetFunc, 9000);

		function resetFunc(){
			f1.reset()
		}
}else{
	event.preventDefault();
}

		 });


		 