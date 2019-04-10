//Call the fox API

var getFoxImg = document.getElementById("img-fluid");

   var foxPhotos = function foxPhotos(){
       fetch({"image":"http:\/\/randomfox.ca\/images\/114.jpg","link":"http:\/\/randomfox.ca\/?i=114"} )
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
     }
    

// // window.onload
// window.onload = function() {
//     addListItem("window onload");
// };

// // document.getElementById('getF').addEventListener("click", function(){
// //     fetch('https://jsonplaceholder.typicode.com/posts/1')
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