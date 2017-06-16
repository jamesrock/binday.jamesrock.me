(function() {

	var
	today = new Date(),
	// today = new Date(2017, 5, 23),
	// today = new Date(2017, 5, 30),
	year = new Date().getFullYear(),
	firstday = new Date(year, 0, 1),
	day = 86400000,
	getWeek = function(date) {

		// week runs from sunday to saturday
		return Math.ceil((((date - firstday) / day) + firstday.getDay() + 1) / 7);

	},
	week = getWeek(today),
	isEven = week%2===0,
	node = document.createElement("div"),
	body = document.body,
	message,
	className;

	// console.log(today);
	// console.log(week);

	body.appendChild(node);

	if(isEven) {

		message = "it's green week. this week it's food, clear bags and garden sacks to go out.";
		className = "green";

	}
	else {

		message = "it's blue week. this week it's food, black bags and the green box to go out.";
		className = "blue";

	};

	node.innerHTML = message;
	body.classList.add(className);

})();
