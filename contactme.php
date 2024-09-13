<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {

    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com"; // Serveur SMTP de Gmail
    $mail->SMTPAuch = true;
    $mail->Username = "graphicdesignhome00@gmail.com";// Mon adress gmail
    $mail->Password = "hctlmotchptndekj";  // Mon mot de passe d'application
    $mail->SMTPSecure = PHPMailer ::ENCRYPTION_STARTTLS; // Sécurité TLS
    $mail->Port = 587; // Port SMTP

    // Destinataire et contenu
    $mail->setFrom('graphicdesignhome00@gmail', 'Manu Hatho'); // Mon adresse mail de app et le nom
    $mail->isHTML(false);
    $mail->Subject = "Nouveau contact via le formulaire de ton Portfolio";
    $mail->Body = "Full Name:" .
     htmlspecialchars($_POST["Name"]) . "\n" .
                    "Email:" .
    htmlspecialchars($_POST["Email"]) . "\n" .
                    "Phone:" .
    htmlspciealchars($_POST["Phone"]) . "\n" .
                    "Message" .
    htmlspecialchars($_POST["Message"]) . "\n";

    $mail->send();
    echo "Merci, votre message à bien envoyé";

} catch (Exception $e) {
    echo "Erreur. Veuillez recommencer." . $mail->ErrorInfo;
}

?>