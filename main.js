const removedHeader = document.querySelector("nav ul li:first-child");
console.log(removedHeader);
removedHeader.remove();

const spanElements = document.querySelector("aside p:first-of-type span");
console.log(spanElements);
spanElements.remove();

const lastPost = document.querySelector(".posts > article:last-child");
console.log(lastPost);
lastPost.remove();

const allPost = document.querySelectorAll(".posts h3");
console.log(allPost);

allPost.forEach((post) => {
  post.remove();
});
