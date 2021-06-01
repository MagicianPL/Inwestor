const button = document.getElementById("ask");
const divResult = document.getElementById("result");
button.addEventListener("click", showResult);

function showResult() {
	const answer = document.getElementById("pole").value;
	const bigAnswer = answer.toUpperCase();
	
	if (bigAnswer == "BITCOIN") {
		const myAnswer = document.getElementById("result");
		divResult.style.display = "flex";
		myAnswer.innerHTML = "<div></div><div></div><p>" + bigAnswer + "? Bitcoina wymyśliłem ja, jako kilkulatek! Niestety, mój cenny pomysł został skradziony :( Chlip...</p>";
	}
	
	else if (bigAnswer == "DOGE" || bigAnswer == "DOGECOIN") {
		const myAnswer = document.getElementById("result");
		divResult.style.display = "flex";
		myAnswer.innerHTML = "<div></div><div></div><p>" + bigAnswer + "? Doge jest super! DogeCoin to the mooooooooon! Hau hau!</p>";
	}
	
	else if (bigAnswer == "ETHEREUM"){
		const myAnswer = document.getElementById("result");
		divResult.style.display = "flex";
		myAnswer.innerHTML = "<div></div><div></div><p>" + bigAnswer + "? Ależ to urośnie! To prawie jak święta!</p>";
	}
	
	else if (answer == "") {
		const myAnswer = document.getElementById("result");
		divResult.style.display = "flex";
		myAnswer.innerHTML = "<div></div><div></div><p>" + bigAnswer + "Halo, halo! Nic nie zostało wpisane! Nie rób mnie za bozna, dobre? </p>";
	}
	
	else {
		const myAnswer = document.getElementById("result");
		divResult.style.display = "flex";
		myAnswer.innerHTML = "<div></div><div></div><p>" + bigAnswer + "? Niestety nie mam zdania na temat takiej kryptowaluty</p>";
	}
}

//x.style.display = "block";

