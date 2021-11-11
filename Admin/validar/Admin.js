function cerrarSesion(){

    localStorage.removeItem("TotalesAdultos")
    localStorage.removeItem("TotalesAdultosM")
    localStorage.removeItem("TotalesNiños")

    localStorage.removeItem("DatosA")
    localStorage.removeItem("DatosAM")
    localStorage.removeItem("DatosN")

    window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Login/index.html", "_self")
}
function loadSoldTickets(){

    document.getElementById("tipo1").value = localStorage.getItem("TotalesAdultos")
    document.getElementById("tipo2").value = localStorage.getItem("TotalesAdultosM")
    document.getElementById("tipo3").value = localStorage.getItem("TotalesNiños")
            
}

function Ver_Datos(){
    swal({
        title: "próximamente!",
        text: "En el Corte 3",
        icon: "info",
    });
}
