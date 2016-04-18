//Array to test the user's input
var signArray = ["AQUARIUS","ARIES","CANCER",
                 "CAPRICORN","GEMINI","LEO",
                 "LIBRA","PISCES","SAGITTARIUS",
                 "SCORPIO","TAURUS","VIRGO"]

//function that is called when button is pushed
function horoscope() {
	//set initial value to false
	var signMatch = false
	//bring in user's entry
	var userSign = document.getElementById("sign").value
	console.log(userSign)
	//I want to clean up their entry if they enter the 
	//correct letters, but mixed capital letters and spaces
	userSign = userSign.toUpperCase()
	console.log(userSign)
	//Don't ask.  I just googled this.
	userSign = userSign.replace(/\s/g,'')
	console.log(userSign)

	//Test to see if they entered a sign
	for (var i = 0; i < signArray.length; i++) {
		if (userSign == signArray[i]) {
			signMatch = true
		}
	}
	console.log(signMatch)

	if (!signMatch) {
		var signList = ""
		for (i = 0; i < signArray.length; i++) {
			signList = signList + (i+1) + ". " + signArray[i] + "<br>"
		}
		document.getElementById("output").innerHTML = 
		"Are you sure you spelled that correctly? " + 
		"Please type one of the following and try again:<br><br>"
		 + signList		
	}
	else {
		//switch takes in the userSign and does something
		//specific for each of the possible values.
		//I will fill in their horoscopes later....or link to
		//a cool site for their sign.
		switch (userSign) {
			case "AQUARIUS":
				document.getElementById("output").textContent = "Aquarius"
			break
			case "ARIES":
				document.getElementById("output").textContent = "Aries"
			break
			case "CANCER":
				document.getElementById("output").textContent = "Cancer"
			break
			case "CAPRICORN":
				document.getElementById("output").textContent = "Capricorn"
			break
			case "GEMINI":
				document.getElementById("output").textContent = "Gemini"
			break
			case "LEO":
				document.getElementById("output").textContent = "Leo"
			break
			case "LIBRA":
				document.getElementById("output").textContent = "Libra"
			break
			case "PISCES":
				document.getElementById("output").textContent = "Pisces"
			break
			case "SAGITTARIUS":
				document.getElementById("output").textContent = "Sagittarius"
			break
			case "SCORPIO":
				document.getElementById("output").textContent = "Scorpio"
			break
			case "TAURUS":
				document.getElementById("output").textContent = "Taurus"
			break
			case "VIRGO":
				document.getElementById("output").textContent = "Virgo"
			break
			default:
			break
		}
		document.getElementById("sign").value = ""
	}
}