    // // const filters = [ "author", "publisher" , "genre"];
// for(const filteridx in filters){
// let filter = filters[filteridx];
//    var filterSelect =  document.getElementById(filter);
//    var options = document.createElement("option");
//    filterSelect.appendChild(options);
    //     for(const book in bookList) {
    //         var options = document.createElement("option");
    //         var filterText = document.createTextNode(bookList[book][filters]);
    //         options.appendChild(filterText);
    //         filterSelect.appendChild(options); 
//     }
// }


    // function getGenreValue(){
//     var genreValue = document.getElementById("genre").value;
//      ///console.log(genreValue);
     
// };
// function getPublisherValue(){
//     var publiserValue = document.getElementById("publisher").value;
//      //console.log(publiserValue);
// };
// function getAuthorValue(){
//     var authorValue = document.getElementById("author").value;
//      //console.log(authorValue);
// };
    //start
// select authors = select element name/id authors
// select publishers = select element name/id publiser
// select genre = select element name/id genre
//
//  varible selectors =  [selectauthors, selectpublishers, selectgenres];
//  for in loop of the book and booklist again 
//      create a  three varibles of options that creates an element of options
//      create three text varibles for each filter using the create textNode
//      appendChildd for all three filters either together or seperate into options
//      appendChild for each seperate select with options
//end
// fieldList = [];
// for(genres of bookList){
//     let i;
//     for(i=0;i<fieldList.length;i++){
//         if (fieldList[i].genre === genres.genre) break;
//     }
//     if (i===fieldList.length){
//         fieldList.push(genres);
//     }
//      else {
//         fieldList[i].title=fieldList[i].title.concat(genres.title);
//     }console.log(fieldList);
// }


// function deleteDuplicates(){
// const fieldList =[]

// for(const fieldidx in fieldList){
//     let field = fieldList[fieldidx]
//     var fieldSelect =  document.getElementById(genre);
//     var options = document.createElement("option");
//     fieldSelect.appendChild(options)
// if (bookList != fieldList){
// for(const book in bookList) {
//         var options = document.createElement("option")
//         var fieldText = document.createTextNode(bookList[book][field])
//         options.appendChild(fieldText)
//         fieldSelect.appendChild(options)
//         }
// }for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// 	;
// }
// console.log(fieldList.includes("genre"));
// };
// }
// function uniq(a) {
//    return bookList.from(new Set(a));
// }
// const genres = bookList;
// const uniqueGenre = Array.from(new Set(genres))

// console.log(uniqueGenre);
//function(){
// feildlist = [];
// (already have this)loop booklist
// if (
//      check for genre value using possible includes method 
//      if not there print
//      if it is there than skip or do nothing   
//            
//) end the if statment 
//}
    // function uniq(a) {
    //     return Array.from(new Set(a));
    //  }
    //function myAuthors(){
    //     var x = document.getElementsByClassName("book");
    //     for (var i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //  }
    // };
    // function myTitles(){
    //     var x = document.getElementsByClassName("authors");
    //     for (var i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //  }
    // }
    // TODO THML Select for authors titles and genres, then move on to populate with javascript
    //     let selection = document.querySelector('select');
    // let result = document.querySelector('h2');
    // selection.addEventListener('change', ()=> {
    //     result.innerText = selection.options[selection.selectedIndex].text;
    // });
    // let section = document.querySelector('select');
    // let result = document.getElementById('bookList');
    // section.addEventListener('change',()=> {
    //   result.innerText = selection.options[selection.selectedIndex].text;
    // });
    // const authorName = bookList.i.author;
    //     function authorName(i){
    //         return [i.author].join('');
    //     };
    // document.getElementsById("bookList").innerHTML = bookList.map((i, index)=> 
    // `<div class="book" id="book"> ${i.bookId}
    // <div class="genre">${i.genre}</div>
    // </div>` 
    // ).join("");
    // function myGenres(){
    //     return [i, index.genre].join("");   
    // };
    // document.getElementById("genres").innerHTML = bookList.map((getGenre));
    // function getGenre(item) {
    //     return [item.genre].join(" ");
    // // }  
    // function checkGenre(genre){
    //     document.getElementById("genre").value;
    // }
    // function myFunction(){
    //      document.getElementById("genres").innerHTML = bookList.find(i.genre)
    // }
    //   var authors = document.createTextNode("Stephan King");
    //  document.forms["myform"].submit();
    //  document.getElementById("myform").reset();

        // var publisherDisplay = document.getElementById("pubShown");
    // for(const book in bookList) {
    //     var section = document.createElement("section");
    //     var pubText = document.createTextNode(bookList[book].publisher);
    //     console.log(publisherDisplay);
    //     section.appendChild(pubText);
    //     publisherDisplay.appendChild(section);   
    // }
    // const button = document.querySelector("input");
    // const sections = document.querySelector("p");
    // button.addEventListener("click",updateButton);
    // function updateButton(){
    //     if(button.value === "Search"){
    //         button.value = "No Search";
    //         var section = document.createElement("p");
    //         var sectionText = document.createTextNode(bookList.i);
    //         section.appendChild(sectionText);
    //         sections.appendChild(section);
    //     } else {
    //         button.value = "Search";
    //         var section = " Nothing";
    //     }
    //     console.log(sections);
    // };
        // const button = document.querySelector("input");
    // const paragraph = document.querySelector("p");

    // button.addEventListener("click",updateButton);

    // function updateButton(button,value = "Search"){
    //         button.value = "No Search";
    //         paragraph.textContent = "Working"; 
    //     console.log(paragraph);
        
    // };
    // var genreSelect =  document.getElementById("genres");
    // var publishersSelect = document.getElementById("publishers");
    // var authorsSelect = document.getElementById("authors");

    //     for (const book in bookList) {
    //         console.log(bookList[book].author);  
    //          var options = document.createElement("option");
    //          var authorText = document.createTextNode(bookList[book].author);
    //          options.appendChild(authorText);
    //          authorsSelect.appendChild(options);
    //          var publisherText = document.createTextNode(bookList[book].publisher);
    //          console.log(bookList[book].publisher);
    //          options.appendChild(publisherText);
    //          publishersSelect.appendChild(options);
    //          var genreText = document.createTextNode(bookList[book].genre);
    //          console.log(bookList[book].genre)
    //          options.appendChild(genreText,publisherText,authorText);
    //          genreSelect.appendChild(options);
    // //      };
    //      var genreSelect =  document.getElementById("genres");
    //      var publishersSelect = document.getElementById("publishers");
    //      var authorsSelect = document.getElementById("authors");
    //          for (const book in bookList) {
    //              console.log(bookList[book].author);  
    //               var options = document.createElement("option");
    //               var authorText = document.createTextNode(bookList[book].author);
    //               options.appendChild(authorText);
    //               authorsSelect.appendChild(options);
    //               var options = document.createElement("option");
    //               var publisherText = document.createTextNode(bookList[book].publisher);
    //               console.log(bookList[book].publisher);
    //               options.appendChild(publisherText);
    //               publishersSelect.appendChild(options);
    //               var options = document.createElement("option");
    //               var genreText = document.createTextNode(bookList[book].genre);
    //               console.log(bookList[book].genre)
    //               options.appendChild(genreText,publisherText,authorText);
    //               genreSelect.appendChild(options);
    //           };
    // const bookInfo = 
//     { title: "Hunger Games", 
//     genre: 'Fiction', 
//     author: 'Suzzanne Collins', 
//     price: '20.00', 
//     date: '2008-09-14', 
//     publisher: 'Scholastic' };
//     const myArray = Objects.value(bookInfo);
//     document.getElementById("bookList").innerHTML = myArray,

//     { title: 'The Subtle Art of Not Giving AFuck ', 
//     genre: 'Nonfiction', 
//     author: 'Mark Manson', 
//     price: '25.99',
//     date: '2016-09-13', 
//     publisher: 'Harper' },

//     { title: 'Twilight', 
//     genre: 'Romance', 
//     author: 'Stephenie Meyer', 
//     price: '10.99', 
//     date: '2005-10-05', 
//     publisher: 'Little, Brown and Company' },

//     { title: 'The 48 Laws of Power', 
//     genre: 'Nonfiction',  
//     author: 'Robert Greene', 
//     price: '13.99', 
//     date: '2000-09-01' , 
//     publisher: 'Peguin Books' },

//     { title: 'The Creative Act', 
//     genre: 'Nonficiton', 
//     author: 'Rick Rubin', 
//     price: '27.99', 
//     date: '2023-01-17' , 
//     publisher: 'Peguin Books' },

//     { title: 'Reminders of Him', 
//     genre: 'Romance', 
//     author: 'Collen Hoover', 
//      price: '9.99', 
//      date: '2022-01-18', 
//      publisher: 'Montlake' },

//     { title: 'Spare', 
//     genre: 'Nonfiction', 
//     author: 'Prince Harry The Duke of Sussex', 
//     price: '22.99', 
//     date: '2023-01-10', 
//     publisher: 'Random House' },

//     { title: 'Sapiens', 
//     genre: 'Historical', 
//     author: 'Yuval Noah Harai', 
//     price: '21.99', 
//     date: '2015-02-10', 
//     publisher: 'Harper' },

//     { title: 'Verity', 
//     genre: 'Thriller', 
//     author: 'Collen Hoover', 
//     price: '10.99', 
//     date:' 2021-10-26', 
//     publisher: 'Grand Central Publishing' },

//     { title: 'Fairy Tale', 
//     genre: 'Ficton', 
//     author: 'Stephan King', 
//     price: '16.99', 
//     date: '2022-09-02', 
//     publisher: 'Scribner' },

//     { title: 'The Mamba Mentality: How I Play', 
//     genre: 'Sports', 
//     author: 'Kobe Bryant', 
//     price: '15.99', 
//     date: '2018-10-23', 
//     publisher: 'MCD' },

//     { title: 'Never Finished: Unshackle Your Mind Win the War Within',
//     genre: 'Sports', 
//     author: 'David Goggins', 
//     price: '18.99', 
//     date:' 2022-12-04', 
//     publisher: 'Lioncrest Publishing' },

//     { title: "The Things They Carried", 
//     genre: 'Historical', 
//     author: 'Tim OBrien', 
//     price: '13.99', 
//     date: '2009-0o1-01', 
//     publisher: 'Mariner' }
 
// console.log(bookInfo); 
// // let genre = book.filter(book => (book.genre = "Fiction"));
// // function myFunction(){
// //     book.filter(values => ( values.genre == "Nonfiction"));
// // export {book}; 
//    var authorsSelect = document.getElementById("authors");
//    authorsSelect.innerHTML = "";
//    var options = document.createElement("option");
//    authorsSelect.appendChild(options);
//    for (const book in bookList) {
//        //console.log(bookList[book].author);  
//         var options = document.createElement("option");
//         var authorText = document.createTextNode(bookList[book].author);
//         options.appendChild(authorText);
//         authorsSelect.appendChild(options);
//     };

//     var publishersSelect = document.getElementById("publishers");
//     publishersSelect.innerHTML = "";
//     var options = document.createElement("option");
//     publishersSelect.appendChild(options);
//     for(const book in bookList) {
//         var options = document.createElement("option");
//         var publisherText = document.createTextNode(bookList[book].publisher);
//         options.appendChild(publisherText);
//         publishersSelect.appendChild(options);

//   };
//     var genreSelect =  document.getElementById("genres");
//     genreSelect.innerHTML = "";
//     var options = document.createElement("option");
//     genreSelect.appendChild(options);
//     for(const book in bookList) {
//         var options = document.createElement("option");
//         var genreText = document.createTextNode(bookList[book].genre);
//         options.appendChild(genreText);
//         genreSelect.appendChild(options);
//     };
// const res = bookList.filter(function(item, index) {
//     return index === bookList.findIndex(function(obj){
//         return (item.id === obj.id) && (item.genre === obj.genre) &&
//         ((item.f && obj.f) ? (item.f).toString()===(obj.f).toString(): true);
//     })
// })
// 