const ref = document.querySelector('#validation-input')

ref.addEventListener('blur', validation)


function validation(event) {
    const valueTrim = event.currentTarget.value.trim()
    if (valueTrim.length >= ref.dataset.length) {
        ref.style.borderColor = "#4caf50";
    } else {
         ref.style.borderColor = "#f44336"
    }
}