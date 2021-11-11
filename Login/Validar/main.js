const user = document.getElementById("username")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("error")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let error = ""
    let entrar = false
    let acceso=false
    parrafo.innerHTML = ""
    let userA="admin", userC="arisel"
    let passA=4321, passC=1234

    if (user.value.length < 4) {
        error = "Invalid username<br>"
        entrar = true
        
    }
    if(pass.value.length < 4 ){
        error += "Invalid password<br>"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = error
    }else{
        acceso=true
    }
    if(acceso){
        let adminBool, userBool
        if(user.value==userA && pass.value==passA){
            alert("Bienvenido Admin")
            //
            window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Admin/index.html", "_self")
            adminBool=true
        }else{
            if(user.value==userC && pass.value==passC){
                alert("Bienvenido Empleado")
                
                window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Usuario/index.html", "_self")
                userBool=true
            }
        }
        if (adminBool==false && userBool==false){
            alert("Usuario no registrado")
        }
    }else{
        swal({
            title: "Usuario Invalido!",
            text: "",
            icon: "warning",
        });
    }

})