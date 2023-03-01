function CambiarVisDatosPers (datosPersonales ,direccion ,contacto)
{
document.getElementById('datosPersonales').style.visibility='visible';
document.getElementById('direccion').style.visibility='hidden';
document.getElementById('contacto').style.visibility='hidden';
}

function CambiarVisDir (datosPersonales ,direccion ,contacto)
{
document.getElementById('datosPersonales').style.visibility='hidden';
document.getElementById('direccion').style.visibility='visible';
document.getElementById('contacto').style.visibility='hidden';
}

function CambiarVisContacto (datosPersonales ,direccion ,contacto)
{
document.getElementById('datosPersonales').style.visibility='hidden';
document.getElementById('direccion').style.visibility='hidden';
document.getElementById('contacto').style.visibility='visible';
}
