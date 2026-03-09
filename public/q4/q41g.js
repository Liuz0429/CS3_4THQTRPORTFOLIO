let selectedRating = 0;

    document.querySelectorAll(".star").forEach(star => {
      star.addEventListener("click", function() {
        selectedRating = this.getAttribute("data-value");
        updateStars(selectedRating);
      });
    });

    function updateStars(rating) {
      document.querySelectorAll(".star").forEach(star => {
        star.classList.remove("selected");
        if (star.getAttribute("data-value") <= rating) {
          star.classList.add("selected");
        }
      });
    }

let movString = localStorage.getItem("movies")
if (!movString) { MovieList = {} } 
else MovieList = JSON.parse(movString)

function addMovie(){

    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let rating = selectedRating;
    if (title == "" || year == "" || genre == "" || rating == "") {
        window.alert("Your movie details are incomplete!");
    } else {
        MovieList[title] = {};
        MovieList[title]["Year"] = year;
        MovieList[title]["Genre"] = genre;
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "★";
        }
        MovieList[title]["Rating"] = stars;
        console.log(MovieList)
        movString = JSON.stringify(MovieList) // convert object into string, as a requirement of localStorage
        localStorage.setItem("movies", movString) // save on the user's computer
        console.log(movString);
        window.alert("Movie successfully added to the list! Click the button below to update the movies list!")
    }    

};

        function showMovie() {
            MovieList = JSON.parse(movString) // converts string into the correct data type in this case object    
            rowString = "<tr><th>Title</th><th>Year</th><th>Genre</th><th>Rating</th></tr>";
            // results.innerHTML = ""  // resets the table
            console.log(MovieList)
            for (let key in MovieList) {
                rowString += "<tr>";
                rowString += "<td>" + key + "</td>";
                rowString += "<td>" + MovieList[key]["Year"] + "</td>";
                rowString += "<td>" + MovieList[key]["Genre"] + "</td>";
                rowString += "<td>" + MovieList[key]["Rating"] + "</td></tr>";
            }
        movieList.innerHTML = rowString;
        }





