window.addEventListener('load', () => {
  searchDrinks();
});

function searchDrinks(searchQuery) {
  let api_searchParameter;
  api_searchParameter = searchQuery || 'b';

  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${api_searchParameter}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      displayDrinks(data.drinks);
    })
    .then(() => {
      cocktailsEventListener();
    });
}

function displayDrinks(drinks) {
  const sectionCenter = document.querySelector('.section-center');
  const loading = document.querySelector('.loading');

  const allDrinks = drinks
    .map((drink) => {
      return `<a href="./single-drink.html">
        <article class="cocktail" data-id = "${drink.idDrink}">
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrinkThumb}">
            <h3>${drink.strDrink}</h3>
        </article>
    </a>`;
    })
    .join('');
  sectionCenter.innerHTML = allDrinks;
  loading.classList.add('hide-loading');
}

const userInput = document.querySelector('.search-form input');
userInput.addEventListener('keyup', showEntry);

function showEntry() {
  const userInputTwo = userInput.value;
  searchDrinks(userInputTwo);
}

function cocktailsEventListener() {
  let cocktails = document.querySelector('a');
  cocktails.forEach((cocktail) => {
    console.log(cocktail.children);
  });
}
