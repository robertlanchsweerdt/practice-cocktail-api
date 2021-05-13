console.log('online');

import searchDrinks from './all-drinks.js';

const drinkName = document.querySelector('.drink-name');
const drinkDesc = document.querySelector('.drink-desc');
const drinkIngredients = document.querySelector('.drink-ingredients');

window.addEventListener('load', singleDrink);

function singleDrink() {
  const loading = document.querySelector('.loading');
  loading.classList.add('hide-loading');
}
