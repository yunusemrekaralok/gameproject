document.addEventListener("DOMContentLoaded", function() {
    // Kayıt formunu seç
    const registerForm = document.getElementById("register-form");

    // Form gönderildiğinde çalışacak fonksiyon
    registerForm.addEventListener("submit", function(event) {
        // Sayfanın yeniden yüklenmesini engelle
        event.preventDefault();

        // Kayıt işlemini gerçekleştir
        registerUser();
    });

    // Kullanıcıyı oyun sayfasına yönlendir
    function redirectToGamePage() {
        window.location.href = "http://127.0.0.1:5500/location/index.html"; // Oyun sayfasının URL'si
    }

    // Kullanıcıyı kaydet ve oyun sayfasına yönlendir
    function registerUser() {
        // Burada kayıt işlemleri gerçekleştirilir
        // Başarılı bir şekilde kaydedildikten sonra oyun sayfasına yönlendir
        redirectToGamePage();
    }
});
