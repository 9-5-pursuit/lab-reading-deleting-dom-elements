// Remove the "All Posts" link from the header
const allPosts = document.querySelector("header nav ul li:first-child");
allPosts.remove();

// Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const firstFeaturedPost= document.querySelector(".featured");
const readTimeSpan= firstFeaturedPost.querySelector("span")
readTimeSpan.remove();
 
// Remove the last post from the page, titled "Stop Planning".
       // array with three elements
const lastPostArticle= document.querySelectorAll("main .posts article")
lastPostArticle[2].remove()

// Remove all titles from all non-featured posts
      // array with titles
const titles = document.querySelectorAll("main .posts article h3")
// loop through since remove only does one, we need all
titles.forEach(element => {
    element.remove();
});