let removedAllPosts = document.querySelector("header ul li");
removedAllPosts.remove();

let removedSpan = document.querySelector(".featured span");
removedSpan.remove();

let removedLastPost = document.querySelectorAll("main .posts article");
removedLastPost[2].remove();

// let removedNonFeaturedPosts =
let arr = document.querySelectorAll("main .posts h3");
let titles = arr.forEach((title) => {
  title.remove();
});
