<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || !filter_var($_POST['message'], FILTER_VALIDATE_EMAIL)) {
  echo("error vacio");
  http_response_code(500);
  exit();
}
echo("entro");
$nombre = strip_tags(htmlspecialchars($_POST['name']));
$correo = strip_tags(htmlspecialchars($_POST['email']));
$telefono = strip_tags(htmlspecialchars($_POST['phone']));
$mensaje = strip_tags(htmlspecialchars($_POST['message']));

$to = "adrianadisenoyweb@gmail.com"; // Change this email to your //
$subject = "Has recibido un mensaje de $nombre";
$body = "Has recibido un nuevo mensaje desde tu sitio web.\n\n"."Aquí los detalles:\n\nNombre: $nombre\n\n\nCorreo: $correo\n\nTeléfono: $telefono\n\nMensaje: $mensaje";
$header = "From: $correo";
$header .= "Reply-To: $correo";	

// if(!mail($to, $subject, $body, $header))
//   http_response_code(500);
if ($_POST['submit']) {
if(mail($to, $subject, $body, $header)) {
      echo "<p>Gracias por escribirme, te estará contactando lo antes posoble</p>";
    } else {
      echo '<p>We are sorry but the email did not go through.</p>';
    }
}
?>
