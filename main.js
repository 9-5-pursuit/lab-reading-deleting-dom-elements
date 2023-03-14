let post = document.querySelector("header nav ul li" );
post.remove();

let span = document.querySelector(".featured article aside p span");
span.remove();

let lastPost = document.querySelector(" .posts article:last-child")
lastPost.remove();

let allTitles= document.querySelectorAll("main .posts, h3")
allTitles.forEach((element)=>element.remove)
