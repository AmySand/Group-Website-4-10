//Call the fox API

var getFoxImg = document.getElementById("img-fluid");
getFoxImg.innerHTML = '<img class="img-fluid" src="http:\/\/randomfox.ca\/images\/114.jpg">'

function foxPhotos(){
       var randomFox = ("http:\/\/randomfox.ca\/?i=114")
   fetch(randomFox)
       .then(function(response){
               console.log(response);
            if(!response.ok){
                  console.log(response.status)
          }
            return response.json();
        })
       .then(function(res){
           console.log(res);
      })
     };