<?php

        // Correo al que se enviará el mensaje
        $destinatario = 'cycs.ingenieria@gmail.com';

        // Aqui los datos que se recibirán del formulario HTML    
        $firstName = $_POST['firstName'];
        $lastName = $_POST['secondName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        // Aqui la parte de arriba del correo
        $header = "Enviado desde myCV website";

        $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

        mail($destinatario, $firstName, $lastName, $email, $phone, $message, $header);

        echo "<script>alert('Correo enviado exitosamente')</script>";
        echo "<script> setTimeout(\"location.href='index.html'\",1000) </script>";

?>
