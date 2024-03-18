
const div = document.querySelector(".j")
const button = document.querySelector("button")


button.addEventListener("click" , ()=>{
    // div.innerHTML 
    div.style.backgroundColor =   `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    button.style.backgroundColor =  `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    button.style.color =  `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

}

);