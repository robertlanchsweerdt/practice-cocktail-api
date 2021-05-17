searchDrinks();

function searchDrinks(searchQuery) {
  const selectedCocktail = JSON.parse(sessionStorage.getItem('cocktail')).id;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedCocktail}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const ingredientsList = getIngredients(data.drinks[0]);
      displaySingle(data.drinks[0], ingredientsList);
    });
}

function displaySingle(data, ingredientsList) {
  const drinkName = document.querySelector('.drink-name');
  const drinkDesc = document.querySelector('.drink-desc');
  const drinkImage = document.querySelector('.drink-img');
  const drinkIngredientsList = document.querySelector('.drink-ingredients');
  const activeIngredients = ingredientsList.filter((value) => value != null);

  document.title = data.strDrink;
  drinkName.innerText = data.strDrink;
  drinkDesc.innerText = data.strInstructions;
  drinkImage.src = data.strDrinkThumb;

  const activeIngredientsList = activeIngredients
    .map((ingredient) => {
      return `<li>
        <i class = "far fa-check-square"></i>
        ${ingredient}
      </li>`;
    })
    .join('');

  drinkIngredientsList.innerHTML = activeIngredientsList;

  document.querySelector('.loading').classList.add('hide-loading');
}

function getIngredients(data) {
  const ingredientsList = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
    data.strIngredient6,
    data.strIngredient7,
    data.strIngredient8,
    data.strIngredient9,
    data.strIngredient10,
  ];

  return ingredientsList;
}
