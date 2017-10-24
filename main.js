let wrapper = document.querySelector("#wrapper");
let button = document.getElementById('submit');
let searchTerms = "";
var form = document.querySelectorAll('form')[0]
let nameInputValue = document.querySelector('input');
let baseUrl = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=";
let container = document.getElementById("container");
// let searchInput = document.querySelector('input[name = "search"]');
var results
form.addEventListener('submit', function(event) {
  event.preventDefault()

    getSearch = event.target.value

})
  // nameInputValue = event.target.value
//   searchTerms = document.getElementById("search").value;
getSearchResults(nameInputValue).then(function(results) {
  console.log(results)
})

let recipes = results;
console.log(results);
var template = "<div class=row>"
for (i = 0; i < recipes.results.length; i++) {
  console.log(receipes.results[i])
  // let recipes = results[i];
  // function myRecipes(recipe) {}

  let html = `
           <div class= 'recipeBox'>
              <div class="recipeThumbnail">
                <img src ="${recipes.thumbnail}" alt= ""></img>
              </div>
                  <div class="recipeLink">
                     <a href= '${recipes.href}' > '${recipes.title}'</a>
                  </div>
           </div>
            `;
}
form.innerHTML = template;
//  return recipes;

// function getSearchResults(searchTerms) {
//   var template = `<li>${recipeTitle}${recipeThumbnail}${recipeUrl}</li>`;

  template += "</ul>";
  container.innerHTML = template;

function getSearchResults(searchTerms) {
  return fetch(`${baseUrl}${searchTerms}`).then(function(data) {
    return data.json()
  })

}
var searchInput = document.querySelector('#search-btn')
searchInput.addEventListener('submit', function(event) {})
//     let addingRecipes = myRecipes(recipe);
//     container.innerHTML += addingRecipes;
//     // console.log(recipes);
//     // return recipes
//   })
// })
