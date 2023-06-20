const leftArrow = document.querySelector(".left")
const rightArrow = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom");


let slideNumber = 1;
const length = images.length;


// genarating bottom round buttons
for(let i = 0; i < length; i++){
    const div = document.createElement("div")
    div.className = "button";
    bottom.appendChild(div);
}


// after append the child (div) the querySelector will work
// if this quertSelector function is in the top of the script then it will not working
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = `blue`;


const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = `transparent`;
    });
};


buttons.forEach((button, i)=>{
    button.addEventListener("click", () => {
        resetBg()
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = `blue`;
    });
});


const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
    console.log(slideNumber);
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
    console.log(slideNumber);
};

const goToFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const goToLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

const changeColor = () => {
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = `blue`;
};

// Function for right arrow 
rightArrow.addEventListener("click", ()=>{
    if(slideNumber < length){
        nextSlide()
    } else{
        goToFirstSlide()
    } 
    changeColor();
});

//Function for left arrow
leftArrow.addEventListener("click", ()=>{
    if(slideNumber > 1){
        prevSlide()
    } else {
        goToLastSlide()
    }
    changeColor();
});







