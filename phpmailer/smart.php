<?php 
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require('phpmailer/PHPMailer.php');
require('phpmailer/Exception.php');
require('phpmailer/SMTP.php');
$mail = new PHPMailer(true);
$mail->setLanguage('ru','phpmailer/language/');
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);
$mail->SMTPDebug = 2; // Включить отладку

$mail->isSMTP();
$mail->Host = 'smtp.rambler.ru';
$mail->SMTPAuth = true;
$mail->Username = 'smelevruslan';
$mail->Password = 'Rehdbvtnh9835';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('smelevruslan@rambler.ru', 'Ruslan');
$mail->addAddress('smelevruslan@rambler.ru');

$mail->Subject = 'Данные';
$mail->Body = '
    Пользователь оставил данные <br> 
    Имя: ' . $name . ' <br>
    Номер телефона: ' . $phone . '<br>
    E-mail: ' . $email . '';

try {
    $mail->send();
    echo 'Сообщение было отправлено';
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Ошибка: {$mail->ErrorInfo}";
}

