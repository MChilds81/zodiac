//Array of zodiac sign objects
var signArray = [{name:"CAPRICORN",upperMonth: 1,upperDay: 19,horoscope:"Just don't even leave the house!"},
				 {name:"AQUARIUS",upperMonth: 2,upperDay: 18,horoscope:"You're a freaking gossip!"},
				 {name:"PISCES",upperMonth: 3,upperDay: 20,horoscope:"You're paranoid!"},
				 {name:"ARIES",upperMonth: 4,upperDay: 19,horoscope:"You work too hard!"},
				 {name:"TAURUS",upperMonth: 5,upperDay: 20,horoscope:"You're too sexually promiscuous!"},
				 {name:"GEMINI",upperMonth: 6,upperDay: 20,horoscope:"You're too messy!"},
				 {name:"CANCER",upperMonth: 7,upperDay: 22,horoscope:"You stay too busy!"},
				 {name:"LEO",upperMonth: 8,upperDay: 22,horoscope:"You are a perfect MOFO!"},
                 {name:"VIRGO",upperMonth: 9,upperDay: 22,horoscope:"You don't get along with people!"},
                 {name:"LIBRA",upperMonth: 10,upperDay: 22,horoscope:"You're mean to people!"},
                 {name:"SCORPIO",upperMonth: 11,upperDay: 21,horoscope:"You're broke!"},
                 {name:"SAGITTARIUS",upperMonth: 12,upperDay: 21,horoscope:"You're careless!"},]

//function called on click of first button for zodiac sign entry
function horoscope() {
	//set initial value to false
	var signMatch = false
	//bring in user's entry
	var userSign = document.getElementById("sign").value
	//I want to clean up their entry if they enter the 
	//correct letters, but mixed capital letters and spaces
	userSign = userSign.toUpperCase()
	//Don't ask.  I just googled this.  Removes all spaces.
	userSign = userSign.replace(/\s/g,'')

	//Test to see if they entered a sign and output horoscope.
	for (var i = 0; i < signArray.length; i++) {
		if (userSign == signArray[i].name) {
			signMatch = true
			document.getElementById("output").innerHTML = 
			signArray[i].name + "<br><br>" + signArray[i].horoscope
		}
	}
	//If they did not enter a matchable zodiac sign, gives user error message
	if (!signMatch) {
		var signList = ""
		for (i = 0; i < signArray.length; i++) {
			signList = signList + (i+1) + ". " + signArray[i].name + "<br>"
		}
		document.getElementById("output").innerHTML = 
		"Are you sure you spelled that correctly? " + 
		"Please type one of the following and try again:<br><br>"
		 + signList	
	}
}
//function called on click of second button
function horoscopeDate() {
	//set initial value to false
	var signMatch = false
	//bring in user's entries of Birth month and day
	var userMonth = document.getElementById("month").value
	var userDay = document.getElementById("day").value
	//I want to clean up their entry of any spaces - if it matters
	//and convert strings to numbers
	userMonth = userMonth.replace(/\s/g,'')
	userDay = userDay.replace(/\s/g,'')
	userMonth = Number(userMonth)
	userDay = Number(userDay)
	//Test to see what their zodiac sign is and output horoscope if non-error.
	for (var i = 0; i < signArray.length; i++) {
		if (userMonth == signArray[i].upperMonth) {
			if (userDay <= signArray[i].upperDay) {
				signMatch = true
				document.getElementById("output").innerHTML = 
				signArray[i].name + "<br><br>" + signArray[i].horoscope
			} 
			else if (userDay > signArray[i].upperDay) {
				signMatch = true
				if (userMonth != 12) {
					document.getElementById("output").innerHTML = 
					signArray[i+1].name + "<br><br>" + signArray[i+1].horoscope
				}
				else if (userMonth = 12) {
					document.getElementById("output").innerHTML = 
					signArray[0].name + "<br><br>" + signArray[0].horoscope
				}
				//else do nothing
			}
			//else do nothing
		}
		//else do nothing
	}
	//if no match, give error message
	if (!signMatch) {
		document.getElementById("output").innerHTML = 
		"Are you sure you put in a correct month and day? " + 
		"Please fix your numeric month and day and try again."
	}
}