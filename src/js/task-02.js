const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = document.querySelector('#ingredients')

const items = ingredients.map(ingredient => {
  const el = document.createElement('li')
  el.textContent = ingredient
  el.classList.add('item')
  return el
})

ref.append(...items)
