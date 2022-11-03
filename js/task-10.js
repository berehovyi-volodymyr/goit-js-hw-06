const ref = {
  boxConteiner: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  input: document.querySelector('[type="number"]')
}


ref.input.addEventListener("input", amount);
ref.createBtn.addEventListener('click', creationBox)
ref.destroyBtn.addEventListener('click', destoyBox)



function amount (event)  {
  ref.input.setAttribute("amount", Number(event.currentTarget.value));
};

let basebox = 30;

function creationBox() {
  let amountBox = Number(ref.input.getAttribute("amount"))
  for (let i = 0; i < amountBox; i++) {
    basebox += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.width = basebox + "px";
    newBox.style.height = basebox + "px";
    newBox.style.margin = "12px";
    ref.boxConteiner.append(newBox);
  }
}

function destoyBox() {
  ref.boxConteiner.innerHTML = ''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
