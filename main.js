let allPostItem = document.querySelector("ul > li");
allPostItem.remove();

let spanElement = document.querySelector("span");
spanElement.remove();

let articleElement = document.querySelector(".posts article:last-child");
articleElement.remove();

let nonFeaturedTitles = document.querySelectorAll(".posts h3");

nonFeaturedTitles.forEach((title) => {
title.remove();
})