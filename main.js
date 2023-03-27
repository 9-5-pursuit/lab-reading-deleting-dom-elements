// const heading = document.querySelector("h1")
// const aside = document.querySelector("aside");
// aside.remove();
// attach js to html without editing html file. 1. creat new script 2.set my js as source 3. attach to html ussing append
let script = document.createElement("script")
script.src = "main.js"
document.head.appendChild(script)



const removeAllPost = document.querySelector("header li")
for(let removeAllPost of removeAllPost){
    removeAllPost[0].remove()
}

// removeAllPost.remove
// did not work will hap to loop then remove const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((paragraph) => {
//     console.log(paragraph);
//   });



const removeReadTime = document.querySelector('.featured span')
removeReadTime.remove()



const lastPost = document.querySelector('h3:last-of-type')
lastPost.remove()
