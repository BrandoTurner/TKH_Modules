//https://codepen.io/brandoturner/pen/QWvVzrZ

let weeklyIncome = parseInt(prompt("What is your weekly income?"))
let foodCost = parseInt(prompt("How much do you spend on food ?"))
let housingCost = parseInt(prompt("How much goes to housing per week?"))
let transportationCost = parseInt(prompt("Transportation Costs?"))
let otherCost = parseInt(prompt("Any other expenses?"))
let yearlySavings = parseInt(prompt("How much do you to save in a year?"))

	let weeklySavings  = yearlySavings / 52
	let amntToSave = parseInt(weeklySavings.toFixed(2);

	let totalCost = foodCost + housingCost + transportationCost + otherCost
	let revenue = weeklyIncome - totalCost

		if( revenue > amntToSave){
			console.log("You're on the right track!")
			}

			else{
				console.log("You need to save: $" + revenue - amntToSave)
			}




