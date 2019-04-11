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


function createSpeechBubble(res) {

    var ticker = tick.value.toUpperCase();
    if (ticker.length >= 2) {
        for (i = 0; i <= res.length; i++) {
            var match = res[i].Ticker;
            if (match === ticker) {
                match = res[i];
                var newDiv = document.createElement("div");

                newDiv.classList.add("talkbubble");
                newDiv.id = "test"
                newDiv.innerHTML = ""
                newDiv.innerHTML = "The fox says your stock is " + match.Ticker + "<br>" + "Company Name: " + match.companyName + "<br>" + "Current Price: " + match.Price;
                document.body.appendChild(newDiv);
            }
        }
    }
    else {
        console.log("try again");
    }
}

function createSpeechBubbleName(res) {
    var compName = comp.value.toUpperCase();
    if (compName.length > 2) {
        for (i = 0; i <= res.length; i++) {
            var match = res[i].companyName.toUpperCase().includes(compName);
            if (match === true) {
                match = res[i];
                var newDiv = document.createElement("div");
                newDiv.classList.add("talkbubble");
                newDiv.id = "test"
                newDiv.innerHTML = ""
                newDiv.innerHTML = "The fox says your stock is " + match.Ticker + "<br>" + "Company Name: " + match.companyName + "<br>" + "Current Price: " + match.Price;
                document.body.appendChild(newDiv);
            }
        }
    }
    else {
        console.log("try again");
    }
}











//Api call to stocks
var tick = document.getElementById("ticker-symbol");
var comp = document.getElementById("company-name");
document.getElementById("searchBtn").addEventListener("click", function (e) {
    e.preventDefault();
    // randomFox();

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
            // var ticker = tick.value.toUpperCase();
            createSpeechBubble(res);
            // createSpeechBubbleName(res);
        })
})

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
            // var ticker = tick.value.toUpperCase();
            // createSpeechBubble(res);
            createSpeechBubbleName(res);
        })
})


            // console.log(ticker);

            // for(i=0; i<=res.length; i++){
            //     // var match = res[i].Ticker.includes(ticker);
            //     var match = res[i].Ticker;
            //     // if(match === true){
            //         if(match === ticker){
            //        console.log(match)
            //        match = res[i];
            //    console.log(match);
            //    var newDivTick = document.createElement("div");
            //    var newDivComp = document.createElement("div");
            //    var newDivPrice = document.createElement("div");
            //    newDivTick.innerHTML =`Ticker: ${match.Ticker}`;
            //    newDivComp.innerHTML = `Company Name: ${match.companyName}`;  
            //    newDivPrice.innerHTML = `Current Price: $${match.Price}`;
            //    document.getElementById("tickerContainer").append(newDivTick);
            //    document.getElementById("tickerContainer").append(newDivComp);
            //    document.getElementById("tickerContainer").append(newDivPrice);




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
// })