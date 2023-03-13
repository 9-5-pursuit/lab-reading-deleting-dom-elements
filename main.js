const allPosts = document.querySelector("li");
allPosts.remove();

const readTime = document.querySelector("span");
readTime.remove();

const stopPlanning = document.querySelector(".posts article");
stopPlanning.remove();

const titles = document.querySelectorAll(".posts h3");
    titles.forEach((title) => {
    title.remove();
    });