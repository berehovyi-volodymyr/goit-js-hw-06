const ref = document.querySelector('form.login-form')
 
ref.addEventListener('submit',registration)

function registration(event) {
    event.preventDefault()
    const formData = event.currentTarget.elements;
    const email = formData.email.value;
    const password = formData.password.value;
    let result = {}
    if (email.trim() !== '' && password.trim() !== '') {
        result.email = email
        result.password = password
        ref.reset()
    } else {
        alert("Усі поля повинні бути заповненні")
    }
    return console.log(result)
}
