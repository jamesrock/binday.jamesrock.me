(function() {

	var
	today = new Date(),
	// today = new Date(2017, 1, 3),
	// today = new Date(2017, 1, 10),
	// today = new Date(2017, 1, 17),
	// today = new Date(2017, 1, 24),
	// today = new Date(2017, 2, 9),
	// today = new Date(2017, 1, 5),
	// today = new Date(2017, 2, 5),
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

		message = "it's blue week. this week it's food, paper/cardboard in clear bags, the green box, and clothes in clear bags to go out.";
		className = "blue";

	}
	else {

		message = "it's green week. this week it's food, plastic and garden waste to go out.";
		className = "green";

	};

	node.innerHTML = message;
	body.classList.add(className);

})();
