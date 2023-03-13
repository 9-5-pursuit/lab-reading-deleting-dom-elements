// const allPostsLink = document.getElementById("all_posts_list_item");
const allPostsLink = document.querySelector("#all_posts_list_item");
allPostsLink.remove();

const readTimeEL = document.querySelector(".featured span");
readTimeEL.remove();

const allTitles = document.querySelectorAll(".posts h3");
allTitles.forEach((title) => {
  title.remove();
});

const allPosts = document.querySelectorAll(".posts article"); // [{}, {}, {}, {}, {}, {}] arr[arr.length - 1]
//                                                                 0   1    2  3   4   5
const lastPost = allPosts[allPosts.length - 1];
lastPost.remove();
