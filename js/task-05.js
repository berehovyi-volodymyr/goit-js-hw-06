const ref = {
    input: document.querySelector('input#name-input'),
    name: document.querySelector('span#name-output')
}

ref.input.addEventListener('input', nameChange)

function nameChange(event) {
    if (event.currentTarget.value.trim() !== '') {
        ref.name.textContent = event.currentTarget.value
    } else ref.name.textContent = 'Anonymous';
}