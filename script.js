
let buttons = document.querySelectorAll(".button");
let body = document.querySelector(".container");

buttons.forEach(function(button) {
    button.addEventListener("click", function(details) {
        // console.log(details);
        // console.log(details.target);

        if(details.target.id === "grey"){
            body.style.backgroundColor = details.target.id;
        }
        if(details.target.id === "red"){
            body.style.backgroundColor = details.target.id;
        }
        if(details.target.id === "yellow"){
            body.style.backgroundColor = details.target.id;
        }
        if(details.target.id === "black"){
            body.style.backgroundColor = details.target.id;
        }
        // if(details.target.id === "white"){
        //     body.style.backgroundColor = details.target.id;
        // }
    })
})

// buttons.addEventListener("click", function() {
//     body.style.backgroundColor = "grey";
// })