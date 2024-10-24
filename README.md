# Object: create, access, update

This exercise is meant to let you properly understand and practice basic operations we perform with objects, typically:

- creating objects
- accessing, reading their properties
- updating, modifying the values of these properties

## Task 1

Given the object below, change the value of the `read` property from `false` to `true`. Then, output the whole object to the console.

```javascript
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};

// Solution:
book.read = true;
console.log(book);
```

Expected output:

```plaintext
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}
```

## Task 2

Given the object below, increase the `age` property by 1. Then, output the whole object to the console.

```javascript
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};

// Solution:
person.age += 1;
console.log(person);
```

Expected output:

```plaintext
{
    firstName: "Martha",
    lastName: "Martin",
    age: 28
}
```

## Task 3

Given the object below, modify the value of the property `discountedPrice` so that it's half of the `price` property.

Then, output a message to the console as shown below.

```javascript
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22
};

// Solution:
product.discountedPrice = product.price / 2;
console.log(`SALE: the ${product.color} ${product.brand} hat costs now only ${product.discountedPrice}€ instead of ${product.price}€!`);
```

Expected output:

```plaintext
SALE: the green Dolphin hat costs now only 11€ instead of 22€!
```

## Task 4

Given the object below, add a new property to it called `fullName`.

The property should combine the values from `firstName` and `lastName`, separated by a space.

```javascript
const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

// Solution:
person.fullName = `${person.firstName} ${person.lastName}`;
console.log(person);
```

Expected output:

```plaintext
{
    firstName: "Jim",
    lastName: "Jameson",
    age: 37,
    fullName: "Jim Jameson"
}
```

## Task 5

Given the object below, modify the value of the property `city` so that the first letter is correctly capitalized.

```javascript
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};

// Solution:
person.city=person.city.slice(0,1).toUpperCase()+person.city.slice(1);
console.log(person);

```

Expected output:

```plaintext
{
    firstName: "Sylvia",
    lastName: "Sun",
    city: "London"
}
```