let postlink = document.querySelector("header nav ul li");
postlink.remove();

let spanDel = document.querySelector(".featured span");
spanDel.remove();

let collection = document.querySelector("main .posts article");
const lastArt = document.querySelector("article:last-child");
collection.remove(lastArt);

let parentQuery = document.querySelectorAll("main .posts h3");

parentQuery.forEach((element) => {
  console.log(element);
  element.remove();
});
