
function randomFox() {
    var randomNumber = Math.floor(Math.random() * 122);
    var img = document.querySelector(".img-fluid")[0];
    img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;
}
console.log(randomFox);


function createSpeechBubble(){
    var newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.classList.add("talkbubble");
    var tickerInput = document.querySelector("#ticker-symbol").value;
    var companyNameInput = document.querySelector("#company-name").value;
    newDiv.innerHTML = "The fox says your stock is " + tickerInput + "<br>" + companyNameInput;
    document.body.appendChild(newDiv);
}
console.log(createSpeechBubble);

document.getElementById('search').addEventListener("click", function (e) {
    e.preventDefault();
    createSpeechBubble();
    console.log(createSpeechBubble);
    // randomFox();
    console.log(randomFox);
})







// var getFoxImg = document.getElementById("img-fluid");
// getFoxImg.innerHTML = '<img class="img-fluid" src="http:\/\/randomfox.ca\/images\/114.jpg">'



// document.getElementById('searchbtn').addEventListener("click", function(){
//     fetch("http:\/\/randomfox.ca\/?i=53")
//     .then(function(response){
//         console.log(response);
//         if(!response.ok){
//             console.log(response.status)
//         }
//         return response.json();
//     })
//     .then(function(res){
//         console.log(res);
//     })
// });


// var getFoxImg = document.getElementById("img-fluid");
// getFoxImg.innerHTML = '<img class="img-fluid" src="http:\/\/randomfox.ca\/images\/114.jpg">'

// function foxPhotos(){
//        var randomFox = ("http:\/\/randomfox.ca\/?i=114")
//    fetch(randomFox)
//        .then(function(response){
//                console.log(response);
//             if(!response.ok){
//                   console.log(response.status)
//           }
//             return response.json();
//         })
//        .then(function(res){
//            console.log(res);
//       })
//      };

// document.getElementById('searchbtn').addEventListener("click", function(){
//     fetch("http:\/\/randomfox.ca\/?i=53")
//     .then(function(response){
//         console.log(response);
//         if(!response.ok){
//             console.log(response.status)
//         }
//         return response.json();
//     })
//     .then(function(res){
//         console.log(res);
//     })
// });

