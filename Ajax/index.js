document.addEventListener("DOMContentLoaded", function() {
	const searchBar = document.getElementById("citySearch");
	const completeBox = document.getElementById('completion');
	const cityArr = [];
	let req;


	searchBar.addEventListener("input", function(event){
		console.log(searchBar.value);
		if (searchBar.value == "") {
			completeBox.style.display = "none";
		} else {
			completeBox.style.display = "block";
			const matches = checkSimilarity(searchBar.value, cityArr);
			//console.log(matches);
			//const items = [];
			completeBox.innerHTML = '';
			matches.forEach(match => {
				//completeBox.textContent = `${match.city}, ${match.state}`;
				const sugItem = document.createElement('li');
				sugItem.textContent = `${match.city}, ${match.state}`;
				completeBox.appendChild(sugItem);
				sugItem.addEventListener("click", function() {
					searchBar.value = sugItem.textContent;
					completeBox.innerHTML = '';
				})
				
			});
		}
	});

	function mkReq() {
		req = new XMLHttpRequest;
		if (!req) {
			console.log("No data FAILED!");
		}

		req.onreadystatechange = handlerFn;
		req.open("GET", "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json", true);
		req.send();
	}

	function handlerFn() {
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.status === 200) {
				const resJson = JSON.parse(req.responseText);
				cityArr.push(...resJson);
			}
		}
	}

	function checkSimilarity(wordToMatch, cityArr) {
		return cityArr.filter(place => {
			const regx = new RegExp(wordToMatch, 'gi');
			return place.city.match(regx) || place.state.match(regx); 
		});
	}	

	mkReq();

});