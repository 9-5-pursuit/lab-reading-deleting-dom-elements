let allPosts = document.querySelector("li");
allPosts.remove(); // removed "All Posts" element from header
let readTime = document.querySelector("aside span");
readTime.remove(); // removed "Read Time" element from aside span
let lastArticle = document.querySelector(".posts article:last-child");
lastArticle.remove(); // removed "Last Article" element from page body
