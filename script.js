// Start when page loads

document.addEventListener("DOMContentLoaded", function(){


    // Create floating hearts automatically

    createHearts();


});





// Open letter button

function openLetter(){

    const letter = document.getElementById("letter");

    if(letter){

        letter.scrollIntoView({

            behavior:"smooth"

        });

    }

}








// Floating hearts


function createHearts(){


    const container = document.querySelector(".hearts-container");


    if(!container){

        return;

    }



    for(let i=0;i<20;i++){


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";


        heart.style.left=Math.random()*100+"vw";


        heart.style.animationDuration=
        (3+Math.random()*5)+"s";


        heart.style.fontSize=
        (15+Math.random()*25)+"px";


        container.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },8000);



    }


}








// Change your name easily here

const yourName = document.querySelector(".letter-card span");


if(yourName){


    yourName.innerHTML="Your Name ❤️";


}

