<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {

    // Configuration du serveur SMTP
    $mail->isSMTP();
    $mail->Host = "smtp-relay.brevo.com"; // Serveur SMTP correct
    $mail->SMTPAuth = true; // Authentification SMTP activée
    $mail->Username = "7dc532002@smtp-brevo.com"; // SMTP login Brevo
    $mail->Password = "820EhZAnaGIr5W16";  // Nouveau mot de passe
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Sécurité TLS
    $mail->Port = 587; // Port SMTP

    // Destinataire et contenu
    $mail->setFrom('manuhatho@outlook.com', 'Manu Hatho'); // Mon adresse mail et le nom
    $mail->addAddress('manuhatho@outlook.com'); // Adresse destinataire (remplacer par ton adresse)
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
    header("Location:index.php?success=true");
    exit();

} catch (Exception $e) {
   header("Location:index.php?success=false");
   exit();
}

?>

