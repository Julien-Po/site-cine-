let cineData = [];

async function fetchCine() {
  await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=star&language=fr-FR" 
  )
    .then((res) => res.json())
    .then((data) => (cineData = data.results));
    const cine = cineData;

console.log(cineData);
cineTest();

};

fetchCine();


function cineTest (){
  document.body.innerHTML = cineData
  .map (
    (cineTest) => `
    <div class="test">
      <h3>${cineTest.overview}</h3>
    </div>
    `
  )
};