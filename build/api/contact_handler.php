<?php
// Hata raporlamayı aç ama çıktıyı JSON'a yönlendir
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_errors.log');

// Timeout süresini ayarla
set_time_limit(30); // 30 saniye
ini_set('max_execution_time', 30);

// JSON header'ı en başta ayarla
header('Content-Type: application/json; charset=utf-8');

// CORS ayarları - Mobil uyumluluk için güncellendi
$allowedOrigins = [
    'https://neva.com.tr',
    'http://neva.com.tr',
    'https://www.neva.com.tr',
    'http://www.neva.com.tr'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With, Origin');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // 24 saat

// OPTIONS isteğini yanıtla
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Hata yakalama fonksiyonu
function handleError($message, $code = 500) {
    error_log("Error: " . $message);
    http_response_code($code);
    echo json_encode([
        'status' => 'error',
        'message' => $message,
        'debug' => [
            'time' => date('Y-m-d H:i:s'),
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown',
            'request_method' => $_SERVER['REQUEST_METHOD'] ?? 'Unknown'
        ]
    ]);
    exit;
}

// PHPMailer dosyalarını dahil et
$phpmailerPath = __DIR__ . '/PHPMailer/src/';
$requiredFiles = [
    'Exception.php',
    'PHPMailer.php',
    'SMTP.php'
];

foreach ($requiredFiles as $file) {
    $filePath = $phpmailerPath . $file;
    if (!file_exists($filePath)) {
        handleError("PHPMailer {$file} bulunamadı. Dosya yolu: {$filePath}");
    }
    require $filePath;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

// UTF-8 karakter kodlaması
mb_internal_encoding('UTF-8');

// Sadece POST isteklerine izin ver
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    handleError('Geçersiz istek metodu', 405);
}

try {
    // Form verilerini al ve temizle
    $name = mb_convert_encoding(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = mb_convert_encoding(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');
    $message = mb_convert_encoding(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');

    // Validasyon
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        handleError('Tüm alanları doldurunuz', 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        handleError('Geçerli bir e-posta adresi giriniz', 400);
    }

    // PHPMailer nesnesini oluştur
    $mail = new PHPMailer(true);

    // Debug modunu aktifleştir
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer Debug: $str");
    };

    // SMTP ayarları
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'neva@neva.com.tr';
    $mail->Password = 'Neva2025.';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    
    // SSL/TLS ayarları
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Timeout süresini kısalt
    $mail->Timeout = 15;
    $mail->SMTPKeepAlive = false;

    // Gönderici ve alıcı ayarları
    $mail->setFrom('neva@neva.com.tr', 'Neva Mobilya İletişim Formu');
    $mail->addAddress('neva@neva.com.tr');
    $mail->addReplyTo($email, $name);

    // E-posta içeriği
    $mail->isHTML(true);
    $mail->Subject = "İletişim Formu: $subject";
    $mail->Body = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
            <title>İletişim Formu Mesajı</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
            <h3 style='color: #333;'>İletişim Formu Mesajı</h3>
            <p><strong>İsim:</strong> {$name}</p>
            <p><strong>E-posta:</strong> {$email}</p>
            <p><strong>Konu:</strong> {$subject}</p>
            <p><strong>Mesaj:</strong></p>
            <p>{$message}</p>
        </body>
        </html>
    ";

    // E-postayı gönder
    if (!$mail->send()) {
        throw new Exception('Mail gönderilemedi: ' . $mail->ErrorInfo);
    }

    echo json_encode([
        'status' => 'success',
        'message' => 'Mesajınız başarıyla gönderildi. Teşekkür Ederiz.',
        'debug' => [
            'time' => date('Y-m-d H:i:s'),
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
        ]
    ]);

} catch (PHPMailerException $e) {
    error_log("PHPMailer Hatası: " . $e->getMessage());
    handleError('Mail gönderilemedi: ' . $e->getMessage());
} catch (Exception $e) {
    error_log("Genel Hata: " . $e->getMessage());
    handleError($e->getMessage());
} 