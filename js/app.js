var firstNumber = 100; //assign value to the firstNumber
var secondNumber = 500; //assign value to the secondNumber
var thirdNumber = 300; //assign value to the thirdNumber
if(firstNumber < secondNumber) //comparing firstNumber with secondNumber
	if(secondNumber < thirdNumber) //comparing secondNumber with thirdNumber
		console.log("thirdNumber is greatest among three numbers "+thirdNumber); //greatest number is thirdNumber
	else
		console.log("secondNumber is greatest among three numbers "+secondNumber); //greatest number is secondNumber
else if(firstNumber < thirdNumber) //comparing firstNumber with thirdNumber
	console.log("thirdNumber is greatest among three numbers "+thirdNumber); //greatest number is thirdNumber
else
	console.log("firstNumber is greatest among three numbers "+firstNumber); //greatest number is firstNumber
