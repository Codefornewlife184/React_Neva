<?php
// Hata raporlamayı aç
error_reporting(E_ALL);
ini_set('display_errors', 0);

// CORS ayarları
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

// OPTIONS isteğini yanıtla
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Sadece POST isteklerine izin ver
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    die(json_encode([
        'status' => 'error',
        'message' => 'Geçersiz istek metodu'
    ]));
}

try {
    // Form verilerini al ve temizle
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Validasyon
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        throw new Exception('Tüm alanları doldurunuz');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Geçerli bir e-posta adresi giriniz');
    }

    // E-posta başlıkları
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // E-posta içeriği
    $email_content = "
        <h3>İletişim Formu Mesajı</h3>
        <p><strong>İsim:</strong> {$name}</p>
        <p><strong>E-posta:</strong> {$email}</p>
        <p><strong>Konu:</strong> {$subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>{$message}</p>
    ";

    // E-posta gönder
    $to = "info@webcenter.com.tr";
    $email_subject = "İletişim Formu: $subject";

    // Mail gönderme işlemi
    $mail_sent = mail($to, $email_subject, $email_content, $headers);
    
    if($mail_sent) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Mesajınız başarıyla gönderildi'
        ]);
    } else {
        throw new Exception("Mail gönderilemedi. Lütfen daha sonra tekrar deneyiniz.");
    }

} catch (Exception $e) {
    error_log("Mail Hatası: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}