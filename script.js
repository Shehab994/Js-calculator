


let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = '';

let buttonsArray = Array.from(buttons);


buttons.forEach((btn) => {
	btn.addEventListener('click',(e) => {
		if(e.target.innerHTML == '='){
			string = eval(string);
			display.value = string;
		}else if(e.target.innerHTML == 'AC'){
                string = '';
				display.value = string;
		}else if(e.target.innerHTML == 'DEL'){
			string = string.toString().slice(0,-1);
			display.value = string;
		}else if(e.target.innerHTML == '%'){
			string = string.toString().slice(0,-1);
			display.value = string;
		} else{
			string += e.target.innerHTML;
			display.value = string;
		}
		
	})
})





