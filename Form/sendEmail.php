<?php 

// Llamando campos
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['role'];
$text = $_POST['message'];
$reference = $_POST['options'];
$submit = $_POST['submit'];

// Datos para el correo
$destinatario = "damianstonedev@gmail.com";
$asunto = "Cotizacion desde DVSOFT";

$carta = "De: $name \n";
$carta .= "Correo: $email \n";
$carta .= "Numero de cel: $phone \n";
$carta .= "Presupuesto estimado: $budget \n";
$carta .= "Mensaje: $text \n";
$carta .= "Referencia: $reference \n";

// Enviando correo
mail($destinatario, $asunto, $carta);

// Una vez enviado el mensaje que muestre el html de exito
header('Location:mensaje-de-envio.html')



?>