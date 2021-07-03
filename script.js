


let boton = document.getElementsByClassName( "btn btn-danger");

boton[0].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off. Es bueno para tu salud")};
boton[1].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off.Es bueno para tu salud")};     
boton[2].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off.Es bueno para tu salud")};
boton[3].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off.Es bueno para tu salud")};
boton[4].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off.Es bueno para tu salud")};
boton[5].onclick = () =>{alert("Gracias por tu compra, tenes un 20% off.Es bueno para tu salud")};
boton[0].onmousemove = () => {console.log("Compra! no te resistas")};
boton[4].onmousemove = () => {console.log("Compra! no te resistas")};
boton[1].onmousemove = () => {console.log("Compra! no te resistas")};
boton[2].onmousemove = () => {console.log("Compra! no te resistas")};
boton[3].onmousemove = () => {console.log("Compra! no te resistas")};


let miFormulario= document.getElementById("formulario");
 miFormulario.addEventListener("submit", activarFrase);
function activarFrase(entrada) {
    entrada.preventDefault();
    let edad = entrada.value;
    if (edad <= 21) {
        alert("estas listo para comer sano");
        } else{
            alert("pedile permiso a tu mamá para comprar");
            }
        }


       