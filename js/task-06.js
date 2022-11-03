const ref = document.querySelector('#validation-input')

ref.addEventListener('blur', validation)


function validation(event) {
    const input = event.currentTarget;
    const valueTrim = input.value.trim()
    const number = Number(ref.dataset.length);
    if (valueTrim.length === number) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}