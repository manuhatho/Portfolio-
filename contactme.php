<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {

    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host = "smtp.mailgun.org"; // Serveur SMTP de Mailgun
    $mail->SMTPAuth = true; // Authentification SMTP activée
    $mail->Username = "postmaster@sandboxfb5329d28e9a4137bef8345422b35a75.mailgun.org"; // SMTP login Mailgun
    $mail->Password = "eb18f0b56940b256d0e3322d03a699ee-5dcb5e36-954e4ad4";  // Mot de passe Mailgun
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Sécurité TLS
    $mail->Port = 587; // Port SMTP

    // Destinataire et contenu
    $mail->setFrom('manuella.hatho@gmail.com', 'Manu Hatho'); // Mon adresse mail et le nom
    $mail->addAddress('manuella.hatho@gmail.com'); // Adresse destinataire (remplacer par ton adresse)
    $mail->isHTML(false);
    $mail->Subject = "Nouveau contact via le formulaire de ton Portfolio";
    $mail->Body = "Full Name: " .
     htmlspecialchars($_POST["Name"]) . "\n" .
                    "Email: " .
    htmlspecialchars($_POST["Email"]) . "\n" .
                    "Phone: " .
    htmlspecialchars($_POST["Phone"]) . "\n" .
                    "Message: " .
    htmlspecialchars($_POST["Message"]) . "\n";

    $mail->send();
    header("Location:index.html");

} catch (Exception $e) {
    echo "Erreur. Veuillez recommencer. " . $mail->ErrorInfo;
}

?>