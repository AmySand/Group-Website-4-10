var randomNumber = Math.floor(Math.random() * 122) + 1;

//    foxSlideShow = document.getElementById("fox-slideshow");
var img = document.getElementsByClassName("img-fluid")[0];
img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;


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
                var match = res[i].Ticker;
                // console.log(res[i].Ticker)
                if(match === ticker){
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
