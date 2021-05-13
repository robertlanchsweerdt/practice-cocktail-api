searchDrinks();

function searchDrinks(searchQuery) {
  const selectedCocktail = JSON.parse(sessionStorage.getItem('cocktail')).id;
  console.log(selectedCocktail);

  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedCocktail}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
