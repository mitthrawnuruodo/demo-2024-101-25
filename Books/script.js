let booklist = []; // To keep the books after getting them from the API

fetch("books.json")
.then(response => response.json())
.then(data => {
    booklist = data.myBooks;
    console.log (booklist.length);
    listBooks(booklist);
})
.catch(error => console.error("Something's wrong..."));

function listBooks (booklist) {
    console.log(booklist);
    var listElement = document.getElementById('myList');
    var str = "";
    for (var book of booklist) {
        str += `<li>${book.authorFirstName} ${book.authorLastName}: ${book.title} (${book.published})</li>`;
    }
    listElement.innerHTML = str;
}

// Buttons
const btnSortByTitle = document.querySelector("button#sortByTitle");
const btnSortByAuthor = document.querySelector("button#sortByAuthor");
const btnSortByYear = document.querySelector("button#sortByYear");
const btnOriginalOrder = document.querySelector("button#originalOrder");

// Compare functions
const byYear = (a, b) => a.published - b.published;

const byTitle = (a, b) => {
    var aTitle = a.title.toLowerCase();
    var bTitle = b.title.toLowerCase();
    if (aTitle>bTitle) return 1;
    if (aTitle<bTitle) return -1;
    return 0;
}

const byAuthor = (a, b) => {
    // Sort by last name
    var aLastName = a.authorLastName.toLowerCase();
    var bLastName = b.authorLastName.toLowerCase(); 
    if (aLastName>bLastName) return 1;   
    if (aLastName<bLastName) return -1;   
    // If equal, then by first name
    var aFirstName = a.authorFirstName.toLowerCase();
    var bFirstName = b.authorFirstName.toLowerCase(); 
    if (aFirstName>bFirstName) return 1;   
    if (aFirstName<bFirstName) return -1;                  
    // If that's equal, too...
    return 0;
}

// Event Listeners, that sorts and re-lists
btnSortByTitle.addEventListener("click", () => {
    listBooks(booklist.toSorted(byTitle));
}); 

btnSortByAuthor.addEventListener("click", () => {
    listBooks(booklist.toSorted(byAuthor));
}); 

btnSortByYear.addEventListener("click", () => {
    listBooks(booklist.toSorted(byYear));
}); 

btnOriginalOrder.addEventListener("click", () => {
    listBooks(booklist);
}); 