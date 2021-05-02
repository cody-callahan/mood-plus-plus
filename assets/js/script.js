fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d0416af555mshf2696a6e4f197f9p15a59djsna68a0f653c54",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
    var data = response.data;
          console.log('data', data);
})
.catch(err => {
	console.error(err);

});

let imgHappy = document.querySelector("#happyButton");
let imgMeh = document.querySelector("#mehButton");

imgHappy.addEventListener("click", function() {
   console.log("happy");
   alert(" Happy image clicked! :) ");
});

imgMeh.addEventListener("click", function() {
    console.log("meh :/");
    alert(" Meh image clicked :/ ");
 });
