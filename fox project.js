var randomNumber = Math.floor(Math.random() * 122) + 1;

//    foxSlideShow = document.getElementById("fox-slideshow");
var img = document.getElementsByClassName("img-fluid")[0];
img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;

function randomFox() {
    var randomNumber = Math.floor(Math.random() * 122);
    var img = document.querySelector(".img-fluid")[0];
    img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;
}
console.log(randomFox);


// function createSpeechBubble(){
//     var newDiv = document.createElement("div");
//     console.log(newDiv);
//     newDiv.classList.add("talkbubble");
//     var tickerInput = document.querySelector("#ticker-symbol").value;
//     var companyNameInput = document.querySelector("#company-name").value;
//     newDiv.innerHTML = "The fox says your stock is " + tickerInput + "<br>" + companyNameInput;
//     document.body.appendChild(newDiv);
// }
// console.log(createSpeechBubble);

// document.getElementById('search').addEventListener("click", function (e) {
//     e.preventDefault();
//     createSpeechBubble();
//     console.log(createSpeechBubble);
//     // randomFox();
//     console.log(randomFox);
// })







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


//Api call to stocks
var tick = document.getElementById("ticker-symbol");
document.getElementById("searchBtn").addEventListener("click", function (e) {
    e.preventDefault();
    fetch("https://financialmodelingprep.com/api/stock/list/all?datatype=json")
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                console.log(response.status)
            }
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            var ticker = tick.value.toUpperCase();
            // console.log(ticker);

            for(i=0; i<=res.length; i++){
                var match = res[i].Ticker.includes(ticker);
                console.log(match)
                if(match == true){
                   console.log(match)
                   match = res[i];
                //    console.log(match);
                   var newDivTick = document.createElement("div");
                   var newDivComp = document.createElement("div");
                   var newDivPrice = document.createElement("div");
                   newDivTick.innerHTML =`Ticker: ${match.Ticker}`;
                   newDivComp.innerHTML = `Company Name: ${match.companyName}`;  
                   newDivPrice.innerHTML = `Current Price: $${match.Price}`;
                   document.getElementById("tickerContainer").append(newDivTick);
                   document.getElementById("tickerContainer").append(newDivComp);
                   document.getElementById("tickerContainer").append(newDivPrice);

                } 
            }
            })
        })
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