/*Eloquent JavaScript, 3rd Edition;
Chapter 3: Functions;
Recursion;*/

//Returns a boolean when given a numerical value

function isEven(n){
	let result;
		if (n < 0){
			return isEven(-n);
		}else if (n === 0){
			return result = true;
		}else if (n === 1){
			return result = false;
		}else{
			return isEven(n - 2);
		}
}