var randomNumber =  Math.floor(Math.random()*122) + 1;

<<<<<<< HEAD
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

document.getElementById('searchbtn').addEventListener("click", function(){
    fetch("http:\/\/randomfox.ca\/?i=53")
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
});
=======
            //    foxSlideShow = document.getElementById("fox-slideshow");
               var img = document.getElementsByClassName("img-fluid")[0];
                img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;
>>>>>>> 31cc6e32fd8d9feb31a3d19d993e4b74c8591793
