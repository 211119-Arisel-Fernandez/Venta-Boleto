function siguienteB(){
    let x = document.getElementById("cantidad").value
    let aPagar = parseInt(x)
    let y = document.getElementById("aPagarEfectivo").value
    let pago = parseInt(y)

    if(x!=""){
        if (aPagar>0){
            if(aPagar>=pago){
                //
                window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Exitoso/index.html", "_self")
            }else{
                swal({
                    title: "Cantidad menor al Pago!",
                    text: "Seleccione una Opcion!",
                    icon: "warning",
                });
                //alert("Cantidad menor al Pago")
            }
            
        }else{
            swal({
                title: "Ingresa una cantidad válida!",
                text: "Seleccione una Opcion!",
                icon: "warning",
            });
            //alert("Ingresa una cantidad válida")
        }
        
    }else{
        swal({
            title: "Ingresa el monto a pagar!",
            text: "Seleccione una Opcion!",
            icon: "error",
        });
        //alert("Ingresa el monto a pagar")
    }
}
function obtenerPagoEfectivo(){
    //Obtenemos el total a pagar que guardamos anteriormente
    const pagoEfectivo = localStorage.getItem("Total_A_Pagar")
    document.getElementById("aPagarEfectivo").value = pagoEfectivo

}

function regresar(){
    //segun el tipo de boleto que se guardó anteriormente, cada que regresemos a elegir una nueva cantidad de boleto se elimina el que habíamos elegido
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