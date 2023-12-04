const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email)
    console.log(password)
    if (email === "" ||password === ""  
    ) {
      alertMessage("Whoops, salió mal: ningún campo debe estar vacío", "danger");

    } else {
      const loginUser = {
          email,
          password, 
      };

      console.log(loginUser)

        await createData( loginUser )
        
    }

    







      
/*       fetch(`${API_URL}/sessions/`), {
        method: "POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
        .then((response) => {
            console.log(response)
          return response.json();
        })
        .then((finalResponse) => {
         
          console.log( finalResponse )
          if( finalResponse.success ){

            const token = finalResponse.data
            console.log("token", token)

            localStorage.setItem("devtoken", token)

            alertMessage(`Usuario logeado con exito`, "success")
            setTimeout(() => {
                window.location.pathname = '/index.html'
            }, 2000);
          }
          else {
            alertMessage("Usuario o contraseña incorrectos", "danger")
          }
        })
        .catch((err) => {
           console.log(err);
        }); */
    }

)

const createData = async ( loinUser )=>{
    const response = await fetch('http://localhost:3000/sessions/', {
        method: 'POST',
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        },
        body: loinUser
    })
    if ( response.status = 200 ){
            console.log('enviado')

    }
}