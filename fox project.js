var randomNumber =  Math.floor(Math.random()*122) + 1;

            //    foxSlideShow = document.getElementById("fox-slideshow");
               var img = document.getElementsByClassName("img-fluid")[0];
                img.src = `https://randomfox.ca/images/${randomNumber}.jpg`;