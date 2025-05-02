<?php
// Hata raporlamayı aç
error_reporting(E_ALL);
ini_set('display_errors', 0);

// UTF-8 karakter kodlaması
mb_internal_encoding('UTF-8');

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
    $name = mb_convert_encoding(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = mb_convert_encoding(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');
    $message = mb_convert_encoding(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING), 'UTF-8', 'auto');

    // Validasyon
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        throw new Exception('Tüm alanları doldurunuz');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Geçerli bir e-posta adresi giriniz');
    }

    // E-posta başlıkları
    $headers = array(
        'From' => '=?UTF-8?B?' . base64_encode('Web Center İletişim Formu') . '?= <info@webcenter.com.tr>',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/html; charset=UTF-8',
        'Content-Transfer-Encoding' => 'base64',
        'X-Priority' => '1',
        'X-MSMail-Priority' => 'High'
    );

    // Başlıkları string formatına çevir
    $headers_string = '';
    foreach ($headers as $key => $value) {
        $headers_string .= "$key: $value\r\n";
    }

    // E-posta içeriği
    $email_content = "
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

    // E-posta gönder
    $to = "info@webcenter.com.tr";
    $email_subject = "=?UTF-8?B?" . base64_encode("İletişim Formu: $subject") . "?=";

    // Mail gönderme işlemi
    $mail_sent = mail($to, $email_subject, base64_encode($email_content), $headers_string);
    
    if($mail_sent) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Mesajınız başarıyla gönderildi. Teşekkür Ederiz.'
        ]);
    } else {
        // Hata detaylarını al
        $error = error_get_last();
        throw new Exception("Mail gönderilemedi: " . ($error ? $error['message'] : 'Bilinmeyen hata'));
    }

} catch (Exception $e) {
    error_log("Mail Hatası: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
} 