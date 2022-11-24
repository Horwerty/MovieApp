const API_KEY ="api_key=e6e2f58b352c53825b5227cb0eee8fde";
const Base_URL = "https://api.themoviedb.org/3";
const API_URL = Base_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const img_url = "https://image.tmdb.org/t/p/w1280"; 
const searchAPI =  "https://api.themoviedb.org/3/search/movie?&api_key=e6e2f58b352c53825b5227cb0eee8fde&query=";
const search = document.getElementById("search");
const form = document.querySelector('.searchForm')
const main = document.getElementById('main')

getMovies(API_URL)
 
function getMovies(url) {
	fetch(API_URL)
	.then(res => res.json())
	.then(data => {
		//console.log(data);
		showMovies(data.results)
	})
}

function showMovies(data) {

	data.forEach(movie => {
		const movieEl = document.createElement('div')
		// movieEl.classList.add(movieClaz);
        const text = document.createElement('h2');
		const year = document.createElement('h3');
		const overvee = document.createElement('p');
		const pHeading = document.createElement('h3')
		const image = document.createElement('img');

        text.innerHTML = `${movie.title}`;
        year.innerHTML = `${movie.release_date}`;
		pHeading.innerHTML = `${"Overview"}`;
		overvee.innerHTML = `${movie.overview}`;
		image.src = `${img_url}` + movie.poster_path ;
		
		movieEl.appendChild(image);
        movieEl.appendChild(text);
		// movieEl.appendChild(year);
		movieEl.appendChild(pHeading);
		movieEl.appendChild(overvee);
        main.appendChild(movieEl);
	});
}

form.addEventListener("submit", (e) => {
	// console.log("searchThis")
	
	e.preventDefault();
	
	main.innerHTML = '';
	
	const searchTerm = search.value;
	
	if(searchTerm){

		//console.log("searchThis")
		getMovies(searchAPI + searchTerm);
	    search.value = "";
	}
});