function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
}

function numberOfBorrows(account, books) {
 //set up borrows array which we will extract all ids from books.borrows
  const borrows = books.map((book) => book.borrows);
  let counter = 0;
  //counter variable to return number of matches, start at 0 add for each time an element in the id array pops up
  //search inside each part of borrows then inside each of those to check ids
  borrows.forEach((element) => {
    element.reduce((ids, acc)=>{
      if (ids.id === account.id){
        counter += 1;
    }
    return acc;
    })
  });
      
  //return counter
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  //make an empty array for output
  let output = [];
  let author = {};
  //loop through books to find all books that match account id and returned === false
  books.forEach((element) => {
    ///cycle through authors to find the author id that matches the book's authorId
    authors.forEach((element3) => {
      if (element3.id == element.authorId){
        author = element3;
      }
    })
    element.borrows.forEach((element2) =>{
        if (element2.id === account.id && element2.returned === false){
            //push each matching book into the output array
              //add author info to the output via spread operator          
            output.push({...element, author});
      }
    })
  })

  //return the output array
  return output;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
