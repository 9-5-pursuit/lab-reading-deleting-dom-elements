let allPosts = document.querySelector("header nav ul li:first-child");
allPosts.remove();

let readTimeSpan = document.querySelector(".featured article aside p span");
readTimeSpan.remove();

let stopPlanning = document.querySelector(".posts article:last-child");
stopPlanning.remove();

let allNonFeaturedTitles = document.querySelectorAll(".posts article h3");
allNonFeaturedTitles.forEach(element => element.remove());

