let postTag = document.querySelector("nav ul li")
postTag.remove()

let spanTag = document.querySelector("p span")
spanTag.remove();

let lastPost = document.querySelector(".posts article:last-child")
lastPost.remove();

let hTags = document.querySelectorAll(".posts h3");
hTags.forEach((htag) => {
    htag.remove()
});
