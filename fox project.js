var foxPhoto = "";
var imgTag = "";
function foxAPI(){
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
               foxSlideShow = document.getElementById("fox-slideshow");
            //    imgTag = document.getElementByClassName("img-fluid");
                foxSlideShow.append(randomFox); 

            //    fox-slideshow
          })
         }


// window.onload = photo(){
//     var img = new Image();
//     img.src = "http:\/\/randomfox.ca\/images\/114.jpg";

//     img.onload = foxAPI () {
//         // CREATE CANVAS CONTEXT.
//         var getFoxImg = document.getElementById("img-fluid");


//      }
//   }

//   var getFoxImg = document.getElementById("img-fluid");
//   getFoxImg.innerHTML = 

// var getFoxImg = document.getElementById("img-fluid");
// getFoxImg.innerHTML = '<img class="img-fluid" src="http:\/\/randomfox.ca\/images\/114.jpg">';

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