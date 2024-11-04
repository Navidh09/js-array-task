/* Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not. */

const books = ["poem", "novel", "javascript", "story", "thriller"];

if (books.includes("java")) {
    console.log ("The book You are looking for is available here");
}
else {
    console.log ("Sorry, It isn't  available here")
}