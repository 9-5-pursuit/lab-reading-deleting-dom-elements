const allLink = document.querySelector("nav ul li:first-child");
allLink.remove();

const featured = document.querySelector("article:first-of-type span");
featured.remove();

const last = document.querySelector("section.posts article:last-of-type");
last.remove();

const nonFeaturedTitles = document.querySelectorAll(
  "section.posts article:not(.featured) h3"
);

nonFeaturedTitles.forEach((title) => {
  title.remove();
});
