let boletoSeleccionado=false
let cantidadSeleccionada=false
let total_a_pagar, cantidadFinal
let boletoFinal

function cerrarSesion(){
    //
    window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Login/index.html", "_self")
}
function validar(){
    let boolPago=false
    let opcionPago = document.formulario.inlineRadioOptions
    let texto=""

    for (let index = 0; index < opcionPago.length; index++){
        if(opcionPago[index].checked){
            texto=texto+opcionPago[index].value
            boolPago=true
            break;
        }
    }

    if (boletoSeleccionado==true) {//------------>Boleto
        if (cantidadSeleccionada==true) {//------>Cantidad
            if(boolPago==true){//---------------->Pago
                guardarCantidad()
                if (texto=="option1") {//Tarjeta
                    //
                    window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Tarjeta/index.html", "_self")
                }else{
                    if (texto=="option2") {//Efectivo
                        //
                        window.location.assign("C:/Users/Fernandez/Dev/ProyectoBoletos/Efectivo/index.html", "_self")
                    }
                }
                
            }else{
                swal({
                    title: "Aún no ha seleccionado el método de pago!",
                    text: "Favor De seleccionar una Opcion!",
                    icon: "warning",
                });

                //alert("Aún no ha seleccionado el método de pago")
            }
        } else {
            swal({
                title: "Cantidad de boletos no especificada!",
                text: "Favor De seleccionar una Opcion!",
                icon: "warning",
            });
            //alert("Cantidad de boletos no especificada")
        }
        
    } else{
        swal({
            title: "No ha seleccionado ningún tipo de boleto!",
            text: "Favor De seleccionar una Opcion!",
            icon: "error",
          });
        //alert("No ha seleccionado ningún tipo de boleto")
        
    }

}

function calcular(){ 
    let opcionBoleto = document.formulario.flexRadioDefault
    let tipoBoleto=""
    let boolBoleto=false

    for (let i = 0; i < opcionBoleto.length; i++) {
        if(opcionBoleto[i].checked){
            tipoBoleto=tipoBoleto+opcionBoleto[i].value
            boolBoleto=true
            break;
        }
    }

    if(boolBoleto==true){
        boletoSeleccionado=true
        let n = document.getElementById("seleccion").value
        let boletoA=50, boletoAM=30, boletoN=20, total1, total2, total3
        let cantidad = parseInt(n)

        boletoFinal = tipoBoleto

        if(n!="---Cantidad---") {
            switch (tipoBoleto) {
                case "type1":
                    total1=cantidad*boletoA
                    total_a_pagar=total1
                    break;
                case "type2":
                    total2=cantidad*boletoAM
                    total_a_pagar=total2
                    break;
                case "type3":
                    total3=cantidad*boletoN
                    total_a_pagar=total3
                    break;
            }
            document.getElementById("total_aPagar").value=total_a_pagar
            localStorage.setItem("TipoBoleto",tipoBoleto)//Guardamos el tipo de boleto para poder usarlo en otro archivo js.

            localStorage.setItem("Total_A_Pagar", total_a_pagar)//Guardamos el total a pagar para poder mostrarlo en las siguientes páginas.
            cantidadSeleccionada=true
        }else{
            document.getElementById("total_aPagar").value=""
        }
    }
}
function guardarCantidad(){
    var cant = document.getElementById("seleccion").value//cantidad de boletos seleccionada
    switch (boletoFinal) {
        case "type1":
            if(localStorage.getItem("DatosA")==null){//verifica que no haya datos guardados para poder comenzar a guardar en el arreglo vacío.
                localStorage.setItem("DatosA", '[]')
            }

            var cantAnteriorA=JSON.parse(localStorage.getItem("DatosA"))//Obtenemos el arreglo (lleno o vacío) y lo guardamos en la variable 'cantAnteriorA'.
            cantAnteriorA.push(cant)//Aplicamos .push para guardar en el arreglo.

            localStorage.setItem("DatosA", JSON.stringify(cantAnteriorA))//Por último, volvemos a guardar eel mismo arreglo pero ahora con datos.

            var m=0//variable acumulador
            
            for (let index = 0; index < cantAnteriorA.length; index++) {//Aqui recorremos al arreglo que anteriormente habiamos pedido en la linea 103
                m = m + parseInt(cantAnteriorA[index]);                //para poder sumar la cantidad de boletos. Se usa parseInt() para pasar el arreglo
            }                                                          //de string a int.
            localStorage.setItem("TotalesAdultos",m)//Guardamos la variable 'm' que ha sumado la cantidad.

            //Mismo procedimiento para los otros tipos de boleto
        break;
        case "type2":
            if(localStorage.getItem("DatosAM")==null){
                localStorage.setItem("DatosAM", '[]')
            }

            var cantAnteriorAM=JSON.parse(localStorage.getItem("DatosAM"))
            cantAnteriorAM.push(cant)

            localStorage.setItem("DatosAM", JSON.stringify(cantAnteriorAM))

            var n=0
            
            for (let i = 0; i< cantAnteriorAM.length; i++) {
                n = n + parseInt(cantAnteriorAM[i]);
            }
            localStorage.setItem("TotalesAdultosM",n)

        break;
        case "type3":
            if(localStorage.getItem("DatosN")==null){
                localStorage.setItem("DatosN", '[]')
            }

            var cantAnteriorN=JSON.parse(localStorage.getItem("DatosN"))
            cantAnteriorN.push(cant)

            localStorage.setItem("DatosN", JSON.stringify(cantAnteriorN))

            var a=0
            
            for (let j = 0; j < cantAnteriorN.length; j++) {
                a = a + parseInt(cantAnteriorN[j]);
            }
            localStorage.setItem("TotalesNiños",a)
            
        break;
    }
}
