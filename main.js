const allPosts = document.querySelector("li");
allPosts.remove();

const pSpan = document.querySelector("p span");
pSpan.remove();

const articles = document.querySelectorAll(".posts article");
articles[2].remove();

const h3s = document.querySelectorAll(".posts h3");
h3s[0].remove();
h3s[1].remove();