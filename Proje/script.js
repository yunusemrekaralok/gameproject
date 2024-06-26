// Kayıt Ol Butonu
document.getElementById("select-region-btn").addEventListener("click", function() {
    document.getElementById("registration-overlay").style.display = "none"; // Buton tıklandığında overlay'i kaldır
});

// Bölge Seçimi Yapıldıktan Sonra Diğer Elementlerin Etkinleştirilmesi
function enableGameplay() {
    // Diğer HTML elementlerine erişimi etkinleştir
    var navbar = document.querySelector(".navbar");
    var news = document.querySelector(".news");
    navbar.style.pointerEvents = "auto";
    news.style.pointerEvents = "auto";
}

// Bölge Seçimi Yapıldıktan Sonra
function selectRegion(region) {
    // Bölge seçimi yapıldığında burada ilgili bölgeye göre işlemler yapılabilir
    // Örneğin, seçilen bölgeye göre avantajlar veya dezavantajlar hesaplanabilir
    // Ardından enableGameplay() fonksiyonu çağrılarak diğer elementlerin etkinleştirilmesi sağlanabilir
    enableGameplay();
}
