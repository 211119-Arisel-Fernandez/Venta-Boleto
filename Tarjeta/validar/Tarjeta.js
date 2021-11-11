function siguienteA(){
    let nombreT = document.getElementById("NombreTarjeta").value
    let numeroT = document.getElementById("NumeroTarjeta").value
    let fecha = document.getElementById("fecha").value
    let cvc = document.getElementById("cvc").value

    let vacio=""

    if(nombreT!=vacio && numeroT!=vacio && fecha!=vacio && cvc!=vacio){
        //
        window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Exitoso/index.html", "_self")
    }else{
        swal({
            title: "La acción no se puede ejecutar porque hay campos vacíos!",
            text: "Rellene los Campos Vacios!",
            icon: "warning",
        });
        //alert("La acción no se puede ejecutar porque hay campos vacíos")
    }
}
function obtenerPagoTarjeta(){
    const pagoTarjeta = localStorage.getItem("Total_A_Pagar")
    document.getElementById("aPagarTarjeta").value = pagoTarjeta
}

function regresar(){
   //segun el tipo de boleto que se guardó anteriormente, cada que regresemos a elegir una nueva cantidad de boleto se elimina el que habíamos elegido
   if(localStorage.getItem("TipoBoleto")=="type1"){
    var cantAnteriorA=JSON.parse(localStorage.getItem("DatosA"))//pedimos el arreglo y lo guardamos


    const ultimoA = cantAnteriorA[cantAnteriorA.length-1]//obtenemos el último valor del arreglo
    const ultimoNumA=parseInt(ultimoA)//lo pasamos a entero
    const totalA = parseInt(localStorage.getItem("TotalesAdultos"))//pedimos el total de boletos que se han vendido
    localStorage.setItem("TotalesAdultos",totalA-ultimoNumA)//le restamos la última cantidad al total de boletos y lo sobreescribimos

    cantAnteriorA.pop()//elimina del arreglo la ultima cantidad
    localStorage.setItem("DatosA", JSON.stringify(cantAnteriorA))//sobreescribimos
    
    //Mismo proceso para los otros tipos de boleto
}else{
    
    if (localStorage.getItem("TipoBoleto")=="type2") {
        var cantAnteriorAM=JSON.parse(localStorage.getItem("DatosAM"))

        const ultimoAM = cantAnteriorAM[cantAnteriorAM.length-1]
        const ultimoNumAM=parseInt(ultimoAM)
        const totalAM = parseInt(localStorage.getItem("TotalesAdultosM"))
        localStorage.setItem("TotalesAdultosM",totalAM-ultimoNumAM)

        cantAnteriorAM.pop()
        localStorage.setItem("DatosAM", JSON.stringify(cantAnteriorAM))
        
    } else {
        if (localStorage.getItem("TipoBoleto")=="type3") {
            var cantAnteriorN=JSON.parse(localStorage.getItem("DatosN"))

            const ultimoN = cantAnteriorN[cantAnteriorN.length-1]
            const ultimoNumN=parseInt(ultimoN)
            const totalN = parseInt(localStorage.getItem("TotalesNiños"))
            localStorage.setItem("TotalesNiños",totalN-ultimoNumN)

            cantAnteriorN.pop()
            localStorage.setItem("DatosN", JSON.stringify(cantAnteriorN))
        }
        
    }
}
    //
    window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Usuario/index.html", "_self")
}