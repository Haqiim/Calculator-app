var operations = document.querySelector("#operations");
var numbers = document.querySelectorAll(".number");
var operators= document.querySelectorAll(".operator");
var equals = document.querySelector(".equals");
var clear = document.querySelector("#clear");
var back = document.querySelector("#delete");
operations.innerText = "0";

let counter = 0;
let count = 0;

// engine

//numbers

numbers.forEach((number)=>{
number.addEventListener("click", (event) => {
	counter = 0;
	if(count == 1){
		count = 0;
	 	operations.innerText = '';
	}
	if(operations.innerText == "0" && event.target.id !=="zero"){
	operations.innerText ='';
	operations.innerText += e.target.innerText;
	counter2 = 0;
}
else if(operations.innerText == "O" && event.target.id == "point"){
	operations.innerText = '0' +  e.target.innerText;
}
else{
	operations.innerText += e.target.innerText;

};
});
});

//backspace
back.addEventListener("click",()=>{
	if(operations.innerText ==="0")
		{return}else{
let obj = operations.innerText;
arr = obj.split("");
arr.pop();
let abc = arr.join("");
operations.innerText = abc;}
});

//clear
clear.addEventListener("click",()=>{ 
	operations.innerText ="0";
});

//operators
operators.forEach(operator =>{
	operator.addEventListener("click", (e) =>{
		if(counter == 0){
		operations.innerText += e.target.value;
		counter = 1;
		count = 0;
	}else{
			if(counter==1){
				return;
			}
		}
	});
});
//equals
equals.addEventListener("click",() =>{
	solve = operations.innerText;
	solution = eval(solve);
	operations.innerText = solution;
	count = 1;
});
