const ref = {
    input: document.querySelector('input#name-input'),
    name: document.querySelector('span#name-output')
}

ref.input.addEventListener('input', nameChange)

function nameChange(event) {
    ref.name.textContent = event.currentTarget.value
}