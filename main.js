const removeAllPostsLink = document.querySelector("header nav ul");
removeAllPostsLink.firstElementChild.remove();

const removeSpan = document.querySelector(".featured span");
removeSpan.remove();

const removeLastPost = document.querySelector("main .posts");
removeLastPost.lastElementChild.remove();

const removeAllNonFeaturedTitles = document.querySelectorAll("main .posts h3");
for (let titles of removeAllNonFeaturedTitles) {
    titles.remove();
}