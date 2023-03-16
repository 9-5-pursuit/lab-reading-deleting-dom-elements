let removeAllPosts = document.querySelector("header nav ul li");

// console.log(removeAllPosts);

removeAllPosts.remove();

let removeSpanElement = document.querySelector(".featured article aside p span");

// console.log(removeSpanElement);

removeSpanElement.remove();

let removeLastPost = document.querySelector(".posts article:last-child");

// console.log(removeLastPost); // shows all posts

removeLastPost.remove();

let removeAllTitles = document.querySelectorAll("main .posts article h3")

// console.log(removeAllTitles);

for (let i = 0; i < removeAllTitles.length; i++) {
    removeAllTitles[i].remove();
}