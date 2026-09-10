// Welcome Message

window.onload = function(){

    alert("Welcome to Rubadharshini's Portfolio!");

    typingEffect();

};




// Typing Animation

let text = "Future Software Engineer";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}




// Dark Mode

function darkMode() {

    document.body.classList.toggle("dark");

    let button = document.querySelector("nav button");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "Light Mode";

    } else {

        button.innerHTML = "Dark Mode";

    }

}



// Scroll To Top

let btn = document.getElementById("topBtn");


window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        btn.style.display = "block";

    }

    else{

        btn.style.display = "none";

    }


    revealSections();

};



function topFunction(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}



// Current Year

document.getElementById("year").innerHTML =
new Date().getFullYear();




// Fade Animation

function revealSections(){

    let sections = document.querySelectorAll("section");

    sections.forEach(function(section){

        let position =
        section.getBoundingClientRect().top;

        let windowHeight = window.innerHeight;

        if(position < windowHeight - 100){

            section.classList.add("show");

        }

    });

}


revealSections();