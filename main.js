let postLinkRemove = document.querySelector("header nav ul li:first-child");
postLinkRemove.remove();


// console.log(document.querySelector("h1"));

// allPostLink.remove();

const removeSpanElement = document.querySelector(".featured article aside span");
removeSpanElement.remove();

let removeLastPost = document.querySelector(".posts article:last-child");
removeLastPost.remove();

let allTitlesNonFeatured = document.querySelectorAll(".posts article h3");
allTitlesNonFeatured.forEach((item) => { 
       item.remove();
    })

