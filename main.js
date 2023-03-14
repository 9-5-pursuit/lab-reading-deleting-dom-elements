const allPosts = document.querySelector("ul li");
allPosts.remove();

const spanMove = document.querySelector("span");
spanMove.remove();

const stopRemo = document.querySelector("main .posts article");
let childRemo = document.querySelector("article:last-child");
stopRemo.remove(childRemo); 

const titleRemo = document.querySelectorAll
("main .posts h3");
titleRemo.forEach((element)=>{
    console.log(element)
element.remove();
})