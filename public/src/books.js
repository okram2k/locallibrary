function findAuthorById(authors, id) {
  //set up author variable as an empty object to be the output
  let author = {};
  //cycle through authors for each element see if the element id matches the id
  authors.forEach((element) => {
    if (element.id === id){
       author = element;
    }
  })
  //return author that matches the element id
  return author;
}

function findBookById(books, id) {
  //exactly the same as findAuthorbyID except change authors to books
  let book = {};
  books.forEach((element) => {
    if (element.id === id){
       book = element;
    }
  })
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  //set up output array with two empty arrays: [[],[]];
  let output = [[],[]];
  //cycle through books using forEach
  books.forEach((element) => {
    let returned = [];
    //make a temporary array containing each return status of element.borrowers
    element.borrows.forEach((element2) => {
        returned.push(element2.returned);
  //use some on the temporary array to determine if any of the values are false
    })
     //if any are false push to first output array, else push to second output array
    const arrayTarget = (returned.some((test) => test == false)) ? 0 : 1;
    output[arrayTarget].push(element);
  });
  //return output array
  return output;
}

function getBorrowersForBook(book, accounts) {
//set up the output array
let output = [];
//go through each part of the borrows array with the foreach loop
book.borrows.forEach((element) => {
  //go through accounts list to find the matching id for each iteration of the borrows array
  accounts.forEach((account) => {
    //push onto the output array both the matching account object and borrows object. id will override but they match so it won't matter
    if (element.id === account.id && output.length < 10){
      output.push({...element, ...account});
    }
  });
});

//return output array
return output;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
