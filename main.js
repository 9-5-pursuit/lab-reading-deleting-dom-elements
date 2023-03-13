const allPosts = document.querySelector("header nav ul li");
allPosts.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();

const stopPlanning = document.querySelector("main .posts article:last-child");
stopPlanning.remove();


const h3 = document.querySelectorAll("main .posts h3");
h3.forEach(item => item.remove());


