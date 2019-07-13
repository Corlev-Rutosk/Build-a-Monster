'use strict';

let budget = 500;
let alePrice = 3.5;

let monster = {
	head: '',
	torso: '',
	arms: '',
	legs: '',
};

function monsterNeeds() {
	let needs = [];
	if (monster.head == '') {
		needs += "a head, ";
	}
	if (monster.torso == '') {
		needs += "a torso, ";
	}
	if (monster.arms == '') {
		needs += "arms, ";
	}
	if (monster.legs == '') {
		needs += "legs,";
	}
	return needs;
}



while (monster.head == "" || monster.torso == "" || monster.arms == "" || monster.legs == "") {	
	let choice = prompt(`You must build a terrifying monster.

You have £${budget} left to spend.

The monster still needs: ${monsterNeeds()}.

What will you purchase next?`);
	

if (choice == "head") {
	let headchoice = prompt(`There are three heads to choose from.
	
	A rotting head costs £13.
	An ugly head costs £30.
	A sad head costs £47.
	
	Which head will you buy?`);
	switch(headchoice) {
		case "rotting":
			monster.head = "rotting";
			budget -= 13;
			break;
		case "ugly":
			monster.head = "ugly";
			budget -= 30;
			break;
		case "sad":
			monster.head = "sad";
			budget -= 47;
			break;
	}
	alert (`The monster has been given the ${monster.head} head`);
}


if (choice == "torso") {
	let torsochoice = prompt(`There are three torsos to choose from.
	
	A bulky torso costs £87.
	A slimy torso costs £62.
	An iron torso costs £120.
	
	Which torso will you buy?`);
	switch(torsochoice) {
		case "bulky":
			monster.torso = "bulky";
			budget -= 87;
			break;
		case "slimy":
			monster.torso = "slimy";
			budget -= 62;
			break;
		case "iron":
			monster.torso = "iron";
			budget -= 120;
			break;
	}
	alert (`The monster has been given the ${monster.torso} torso`);
}


if (choice == "arms") {
	let armschoice = prompt(`There are three pairs of arms to choose from.
	
	A stunted pair of arms costs £53.
	A burnt pair of arms costs £17.
	A strong pair of arms costs £100.
	
	Which pair of arms will you buy?`);
	switch(armschoice) {
		case "stunted":
			monster.arms = "stunted";
			budget -= 53;
			break;
		case "burnt":
			monster.arms = "burnt";
			budget -= 17;
			break;
		case "strong":
			monster.arms = "strong";
			budget -= 100;
			break;
	}
	alert (`The monster has been given the ${monster.arms} arms`);
}


if (choice == "legs") {
	let legschoice = prompt(`There are three pairs of legs to choose from.
	
	A long pair of legs costs £75.
	A hairy pair of legs costs £90.
	An odd pair of legs costs £80.
	
	Which pair of legs will you buy?`);
	switch(legschoice) {
		case "long":
			monster.legs = "long";
			budget -= 75;
			break;
		case "hairy":
			monster.legs = "hairy";
			budget -= 90;
			break;
		case "odd":
			monster.legs = "odd";
			budget -= 80;
			break;
	}
	alert (`The monster has been given the ${monster.legs} legs`);
}
}
	
	
alert(`The monster has been built. Its head is ${monster.head}. It has ${monster.arms} arms. Its torso is ${monster.torso}. Its legs are ${monster.legs}.`);

let ales = budget/3.5;

alert("With the left-over money, you buy " + Math.floor(ales) + " bottles of ale. You share one with the monster.");