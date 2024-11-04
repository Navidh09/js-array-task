/* Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

const books = ["poem", "novel", "javascript", "story", "thriller"];

const touristSpot = ["kuakata", "cox's bazar", "madhabkunda"];

const fruits = ["mango", "banana", "jackfruit", "apple", "orange"];

const touristBook = touristSpot.concat(books);

console.log (touristBook, touristBook.length);

console.log (books.concat(fruits, touristBook), books.concat(fruits).length);