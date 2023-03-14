let postLink = document.querySelectorAll("li");
postLink[0].remove();
let spanTag = document.querySelector("span");
spanTag.remove();
let allPosts = document.querySelectorAll(".posts article");
allPosts[2].remove();
let titles = document.querySelectorAll(".posts h3");
titles.forEach((title) => {
  title.remove();
});
