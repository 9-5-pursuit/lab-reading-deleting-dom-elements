let ap = document.querySelector('header nav ul li');

ap.remove()

let rp = document.querySelectorAll('p')

rp.forEach(item => { if (item.textContent.includes('Read Time')) item.remove() })

let sp = document.querySelectorAll('article')

sp[sp.length - 1].remove()

let rt = document.querySelectorAll('h3')

rt.forEach(item => item.remove())