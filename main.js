const allPost = document.querySelector("header nav ul");
allPost.firstElementChild.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();

const lastPost = document.querySelector("main .posts");
lastPost.lastElementChild.remove();

const removedTitle = document.querySelectorAll("main .posts h3");
for (let titles of removedTitle) {
  titles.remove();
}
