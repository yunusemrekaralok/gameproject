function selectRegion(region) {
    // Burada seçilen bölgeye göre gerekli işlemleri yapabilirsiniz
    // Örneğin, seçilen bölgeye göre avantajlar ve dezavantajlar uygulanabilir
    // Ardından oyuncuyu oyun sayfasına yönlendirebilirsiniz
    redirectToGamePage();
}

function redirectToGamePage() {
    window.location.href = "http://127.0.0.1:5500/index.html"; // Oyun sayfasının URL'si
}
