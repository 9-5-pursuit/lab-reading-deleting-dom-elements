const removeHeaderLink = document.querySelector("header nav ul");
removeHeaderLink.firstElementChild.remove();

const readTime = document.querySelector("main span");
readTime.remove();

const removeLastPost = document.querySelector("main .posts");
removeLastPost.lastElementChild.remove();

const removeAllNonFeatTitles = document.querySelectorAll("main .posts h3");
for (let titles of removeAllNonFeatTitles) {
  titles.remove();
}

// To remove a class from all HTML DOM elements with JavaScript:
// Get a list of all the elements in the DOM with document. querySelectorAll('*') .
// Iterate over the list with forEach() .
// For each element, call classList. remove(class) to remove the class from each element.
