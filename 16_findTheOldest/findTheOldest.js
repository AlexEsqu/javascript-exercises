const getAgeOfPerson = function(person){
	const age = person.yearOfDeath ? person.yearOfBirth - person.yearOfDeath : person.yearOfBirth - 2025;
	return age;
}

const getoldestOfBoth = function(person1, person2) {
	return getAgeOfPerson(person1) < getAgeOfPerson(person2) ? person1 : person2;
}

const findTheOldest = function(map) {
	return map.reduce(getoldestOfBoth, map[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
