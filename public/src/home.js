function popularity(list){
  //the function sorts a lilst by count and returns only the top 5.
  //sort list by count from highest to lowest
  list.sort((listA, listB) => (listA.count < listB.count ? 1 : -1));
  //set output array's length to 5
  list.length = 5;
  //output array
  return list;
}

function totalBooksCount(books) {
  //return the books.length value
  return books.length;
}

function totalAccountsCount(accounts) {
  //return the accounts.length value
  return accounts.length;

}

function booksBorrowedCount(books) {
  //setup counter integer at 0
  let counter = 0;
  //cycle through books with forEach
  books.forEach((book) => {
      //cycle through each books.borrows to find any false on returned
      book.borrows.forEach((returned) => {
        //add to the counter by one for each false
      if (returned.returned == false){
        counter += 1;
      }
    });
  });
  //return counter
  return counter;
}

function getMostCommonGenres(books) {
  //create an empty output array
  let output = [];
  //cycle through books with forEach array
  books.forEach((book) =>{
      //get genre of that book with element.genre
    const name = book.genre;
      //check to see if that genre is already in the output array make a needToPush flag, default true.
      let needToPush = true;
      output.forEach((element) => {
        //if genre is found in the output add to it's count and set needToPush to false
      if (element.name === name){
          element.count +=1;
          needToPush = false;
      }
    });
    //if needToPush is still true, push the genre name onto the array with a count of 1
    if (needToPush == true){
      output.push({name, count: 1});
    }
  });
  // use the popularity helper function to sort the list and reduce it to top 5
  return popularity(output);
}

function getMostPopularBooks(books) {
  //create an empty output array
  let output = [];
  //cycle through books with forEach array
  books.forEach((book) => {
      //push to array {name: book.title, count: book.borrows.length}
    output.push({name: book.title, count: book.borrows.length});
  });

  // use the popularity helper function to sort the list and reduce it to top 5
  return popularity(output);
}

function getMostPopularAuthors(books, authors) {
  //create an empty output array
  let output = [];
  let name = "";
  //cycle through the books with a forEach Array
  books.forEach((book) => {
  //cycle through the atuhors array with forEach to find the author with the matching id
    authors.forEach((author) => {
      if (book.authorId === author.id){
        name = `${author.name.first} ${author.name.last}`;
      }
    });
    //check to see if author is already in the output array, if they are add to their count list
    let needToPush = true;
    output.forEach((element) => {
      //if genre is found in the output add to it's count and set needToPush to false
    if (element.name === name){
        element.count += book.borrows.length;
        needToPush = false;
    }
  });
  //if needToPush is still true, push the genre name onto the array with a count of 1
  if (needToPush == true){
    output.push({name, count: book.borrows.length});
  }
  });
  
  //if they are not push to the array: {name, count: 1}
  // use the popularity helper function to sort the list and reduce it to top 5
  return popularity(output);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
