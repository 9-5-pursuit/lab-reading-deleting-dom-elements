let post = document.querySelector("header nav ul li" );
post.remove();

let span = document.querySelector("main span");
span.remove();

let lastPost = document.querySelectorAll(".post article")
let stopPost = lastPost[2];
stopPost.remove();

let allTitles= document.querySelectorAll("main .post, h3")
allTitles.forEach((element)=>element.remove)
