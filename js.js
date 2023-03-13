let linkSection = document.querySelector("header nav ul li");
linkSection.remove();
let spanSection = document.querySelector("section article aside p span");
spanSection.remove();
let allArticles = document.querySelectorAll("article")
allArticles[3].remove();
let allH3 = document.querySelectorAll("h3")
for(let i=0;i<allH3.length;i++)
{
    allH3[i].remove();
}