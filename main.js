const allPostsLink = document.querySelector("li");
allPostsLink.remove(); // removes "All Posts" link from top

const readTime = document.querySelector("aside span");
readTime.remove(); // removes "Read Time" from first post;

const lastPost = document.querySelectorAll("article");
lastPost[3].remove(); // index of last post to remove

const titles = document.querySelectorAll("main .posts h3");
for (let title of titles) {
  title.remove();
}
