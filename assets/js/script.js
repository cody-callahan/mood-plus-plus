var imgHappy = document.querySelector("#happyButton");
var imgMeh = document.querySelector("#mehButton");
var showlastJoke = document.querySelector("#lastJoke");
var lastJoke = localStorage.getItem("last joke");

if (lastJoke != null) {
  showlastJoke.innerHTML = lastJoke;
}; 
//else {
//  alert("Please click happy face to start a joke")
//};


imgHappy.addEventListener("click", function () {
  var jokeHere = document.querySelector("#happyText");
  jokeHere.innerHTML = "";

  //&blacklistFlags=nsfw%2Cracist

  fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?type=twopart&format=json&contains=%252C&idRange=0-300&safe-mode", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d0416af555mshf2696a6e4f197f9p15a59djsna68a0f653c54",
      "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com"
    }
  })
    .then(response => { 
      // request was successful
      if (response.ok) {
      return response.json();
    }
      else {
      alert("Error: " + response.statusText);
        }
    })
    .then(data => {
      console.log(data);
      var setup = data.setup;
      var delivery = data.delivery;
      var fullJoke = data.setup + "..." + data.delivery
    
    
      jokeHere.append("New Joke: " + fullJoke);

      var storeJoke = localStorage.getItem("last joke");
      if (storeJoke != null) {
        showlastJoke.innerHTML = "Last Joke: " + storeJoke;
      }; 

      localStorage.setItem("last joke", fullJoke);
    })
    .catch(err => {
      console.error(err);
    });

  // fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "d0416af555mshf2696a6e4f197f9p15a59djsna68a0f653c54",
  //     "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
  //   }
  // })
  //   .then(function (response) {
  //     // request was successful
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     else {
  //       alert("Error: " + response.statusText);
  //     }
  //   }).then(function (data) {
  //     console.log(data);
  //     var setup = data.body[0].setup;
  //     var punchline = data.body[0].punchline;

  //     jokeHere.append(setup, punchline);
  //   })
  //   .catch(function (error) {
  //     alert("Error: Check that you are connected to the internet");
  //   });
});

imgMeh.addEventListener("click", function () {
  console.log("meh :/");
  alert(" Meh image clicked :/ ");
});
