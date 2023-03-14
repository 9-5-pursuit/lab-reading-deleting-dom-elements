let a = document.querySelector("li");
a.remove();

let readTime = document.querySelector("aside");
readTime.remove();

const posts = document.querySelectorAll("article");
let max = posts[0];

for (let i = 0; i < posts.length; i++) {
  if (i < posts.length) {
    max = posts[i];
  }
}
max.remove();

let postTitles = document.querySelectorAll("h3");

postTitles.forEach((post) => {
  post.remove();
});
