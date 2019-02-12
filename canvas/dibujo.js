var texto = document.getElementById("txtLineas");
var boton = document.getElementById("btnEnviar");
boton.addEventListener("click",dibujoPorClic);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClic()
{
  console.log(lienzo);
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var l = 0;
  var yi,yf,xi,xf;
  var colorcito = "#FAA";


  for (l = 0;l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito,0,yi,xf,300);
    console.log("lineas " + l);
    l = l +1;
  }

  dibujarLinea(colorcito,1,1,1,299);
  dibujarLinea(colorcito,1,299,299,299);
}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
