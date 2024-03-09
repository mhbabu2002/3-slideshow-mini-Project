const elements = document.querySelectorAll(".element");
let count = 1;
console.log(elements)

setInterval(() => {
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current")
    count++;
    if( count > elements.length ){
        elements[0].classList.add("current");
        count = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }

    
},2000)