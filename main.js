let allPost = document.querySelector("header nav ul li").remove();

let featuredPost = document.querySelector(".featured aside span").remove();

let lastPost = document.querySelectorAll(".posts article");

lastPost[lastPost.length - 1].remove();

let noHeadings = document.querySelectorAll(".posts h3");
noHeadings.forEach((heading)=> {
    heading.remove();
})