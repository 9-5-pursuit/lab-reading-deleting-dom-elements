// Method 1: Using the remove() method

let linkSection = document.querySelector("header nav ul li");
linkSection.remove();

// Method 2: Removing the first span element

let spanSection = document.querySelector("section article aside p span");
spanSection.remove();

// Method 3: Is removing the last element from the list

let allArticles = document.querySelectorAll("article");
allArticles[3].remove();

let allH3 = document.querySelectorAll("h3");

for (let i = 0; i < allH3.length; i++) {
  allH3[i].remove();
}
