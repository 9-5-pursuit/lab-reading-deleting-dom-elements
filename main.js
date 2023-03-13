const removeAllPost = document.querySelector("header nav ul li")
removeAllPost.remove();

const removeSpan = document.querySelector( ".featured span")
removeSpan.remove();

const removeArticle = document.querySelector('main .posts article:last-of-type');
removeArticle.remove()

const removeTitle = document.querySelectorAll("main .posts h3")
removeTitle.forEach(element => element.remove())