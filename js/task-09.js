const ref = {
  button: document.querySelector('button.change-color'),
  text: document.querySelector('.color'),
  body: document.querySelector('body')
}

ref.button.addEventListener('click', changeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.text.textContent = color;
}
