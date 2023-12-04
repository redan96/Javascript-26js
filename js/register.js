const button = document.querySelector('#send-data')
console.log(button);

button.addEventListener('click', () => {
    event.preventDefault();
    const name = document.querySelector('#name')
    const lastName = document.querySelector('#lastName')
    const user = document.querySelector('#user')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const avatar = document.querySelector('#avatar')

    const registerData = {
        name: name.value,
        lastName: lastName.value,
        user: user.value,
        email: email.value,
        password: password.value,
        avatar: avatar.value
    }
    console.log(registerData)
    createDataUser(registerData)
})

  const createDataUser = async ( registerData ) => {
    const response = await fetch("http://localhost:3000/singup",{
        method: "POST",
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(registerData)
    })
    const data = await response.json();
    console.log(data)
  }

