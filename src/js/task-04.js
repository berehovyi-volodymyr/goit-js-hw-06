let counterValue = 0

const ref = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value')
};

ref.decrementBtn.addEventListener('click', decrement)

ref.incrementBtn.addEventListener('click', increment)

function increment() {
    counterValue +=1;
    ref.value.textContent = counterValue
}

function decrement() {
    counterValue -=1;
    ref.value.textContent = counterValue
}