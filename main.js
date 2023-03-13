let postTag = document.querySelector( "ul li");
postTag.remove();

let spanTag = document.querySelector( ".featured article aside p span");
spanTag.remove();

let lastArticle = document.querySelector( ".posts");
lastArticle.removeChild(lastArticle.children[2]);

let titles = document.querySelectorAll( ".posts article h3");
titles.forEach(item => item.remove())



// let rt = document.querySelectorAll('h3')
// rt.forEach(item => item.remove())

// let arr = document.querySelectorAll("main .posts h3");
// let titles = arr.forEach((title) => {
//   title.remove();
// });

// const elements = document.querySelectorAll('.class');
// elements.forEach((element) => {
//   element.classList.remove('class');
// });