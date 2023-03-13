let postTag = document.querySelector( "ul li");
postTag.remove();

let spanTag = document.querySelector( ".featured article aside p span");
spanTag.remove();

let lastArticle = document.querySelector( ".posts");
lastArticle.removeChild(lastArticle.children[2]);

let titles = document.querySelectorAll( ".posts article h3");
titles.forEach(title => title.remove())