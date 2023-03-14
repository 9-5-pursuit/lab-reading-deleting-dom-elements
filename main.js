// const headerTag = document.querySelector("header");
// const navTag = headerTag.querySelector("nav");
// const ulTag = navTag.querySelector("ul");
// const liTag = ulTag.querySelector("li");
// liTag.remove();

// -- OR --

const liTag = document.querySelector("header nav ul li");
liTag.remove();

const spanTag = document.querySelector(".featured  p span");
spanTag.remove();

const lastPost = document.querySelector("main .posts article");
lastPost.remove();

const h3Titles = document.querySelectorAll("main .posts article h3");
h3Titles.forEach(function (title) {
  title.remove();
});
