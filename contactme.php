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
    $mail->Username = "postmaster@sandboxa7edcb20b247449c8012a8862936ec68.mailgun.org"; // SMTP login Mailgun
    $mail->Password = "8ab38af62a97b17c71ea7bd9458f0be5-826eddfb-4cc5511d";  // Mot de passe Mailgun
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Sécurité TLS
    $mail->Port = 587; // Port SMTP

    // Destinataire et contenu
    $mail->setFrom('graphicdesignhome00@gmail.com', 'Manu Hatho'); // Mon adresse mail et le nom
    $mail->addAddress('graphicdesignhome00@gmail.com'); // Adresse destinataire (remplacer par ton adresse)
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