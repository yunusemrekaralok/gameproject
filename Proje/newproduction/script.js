// JavaScript yeni-tesis-kur-script.js

// Tesis seçeneklerini ve tesis seçildiğinde işlenecekleri içeren nesne
const tesisler = {
    'Odunculuk': {
        image: 'resources/woodcutting.jpg',
        action: function() {
            // Burada tesis kurulumu işlemleri yapılabilir
            // Kurulan tesisin kurulu tesisler listesine eklenmesi gerekebilir
            // Örneğin:
            // kuruluTesisler.push('Odunculuk');
            // showKuruluTesisler();
            // Yeni tesis kur sayfasına yönlendirme
            window.location.href = 'http://127.0.0.1:5500/production/index.html';
        }
    },
    'Avcılık': {
        image: 'resources/hunting.jpg',
        action: function() {
            // Burada tesis kurulumu işlemleri yapılabilir
            // Kurulan tesisin kurulu tesisler listesine eklenmesi gerekebilir
            // Örneğin:
            // kuruluTesisler.push('Avcılık');
            // showKuruluTesisler();
            // Yeni tesis kur sayfasına yönlendirme
            window.location.href = 'http://127.0.0.1:5500/production/index.html';
        }
    }
};

// Tesis seçeneğine göre işlem yap
function selectFacility(facility) {
    if (tesisler[facility]) {
        tesisler[facility].action();
    }
}
