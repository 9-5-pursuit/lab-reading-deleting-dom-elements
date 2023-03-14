// JS path = document.querySelector("body > header > nav > ul > li:nth-child(1)")
const allPostsRemoval = document.querySelector("nav ul li");
allPostsRemoval.remove();

// JS path = document.querySelector("body > main > section.featured > article > aside > p > span")
const spanElementRemoval = document.querySelector(
  ".featured article aside p span"
);
spanElementRemoval.remove();

// JS path = document.querySelector("body > main > section.posts > article:nth-child(3)")
const lastPostRemoval = document.querySelector(".posts article:nth-child(3)");
lastPostRemoval.remove();

// JS path = document.querySelector("body > main > section.posts > article:nth-child > h3")
const postTitlesRemoval = document.querySelectorAll(".posts article h3");
postTitlesRemoval.forEach((postTitlesRemoval) => postTitlesRemoval.remove());
