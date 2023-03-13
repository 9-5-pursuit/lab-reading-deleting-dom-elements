let headerTag = document.querySelector("header nav ul li");
// console.log(headerTag)
headerTag.remove();

let spanTag = document.querySelector(".featured span");
// console.log(spanTag)
spanTag.remove();

let articleTag = document.querySelectorAll(".posts article");
// console.log(articleTag)
articleTag[articleTag.length - 1].remove();

const titleTag = document.querySelectorAll(".posts h3");
// console.log(titleTag)
titleTag.forEach((element) => {
  element.remove();
});
