const allPosts = document.querySelector("header nav ul li");
allPosts.remove();

const removeSpan = document.querySelector(".featured span")
removeSpan.remove();

const removePost = document.querySelector("main .posts article") 
const lastArticle =document.querySelector("article:last-child")

removePost.remove(lastArticle)

const removeHeaders = document.querySelectorAll("main .posts h3")

removeHeaders.forEach((element) => {
    console.log(element);
    element.remove();
})
