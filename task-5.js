// Task 5

const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};

// Capitalise the value of the property `city`
person.city=person.city.slice(0,1).toUpperCase()+person.city.slice(1);
console.log(person); // { firstName: 'Sylvia', lastName: 'Sun', city: 'London' }
