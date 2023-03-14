let removedLink = document.querySelector("header nav ul li");
removedLink.remove();
console.log(removedLink);

let removedSpan = document.querySelector(".featured span");
removedSpan.remove();
console.log(removedSpan);

let removedPost = document.querySelectorAll("main .posts article");
removedPost[2].remove();
console.log(removedPost[2]);
//removedPost[removedPost.length-1].remove();
// console.log(removedPost); was removing the 1st post at 1st but need the last 1

let noPostTitle = document.querySelectorAll("main .posts h3");
//document.querySelectorAll() returns an array
console.log(noPostTitle); //returns an array
//loop through the returned array to remove the titles from each element of that array
noPostTitle.forEach((element) => element.remove());
/*for (let title of titles) {
title.remove();
}*/
