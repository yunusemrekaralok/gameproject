// JavaScript kodu - kurulu-tesisler-script.js

// Kurulu tesislerin listelendiği div elementini seçme
const kuruluTesislerDiv = document.getElementById('kurulu-tesisler');

// Kullanıcıyı yeni tesis kur sayfasına yönlendir
function goToNewFacilityPage() {
    window.location.href = 'http://127.0.0.1:5500/newproduction/index.html';
}

// Kurulu tesisleri gösterme
function showKuruluTesisler() {
    // Örnek olarak kurulu bir tesis listesi oluşturuluyor
    const kuruluTesisler = []; // Boş bir dizi oluşturuldu

    // Kurulu tesislerin kontrolü
    if (kuruluTesisler.length === 0) {
        kuruluTesislerDiv.innerHTML = '<p>Kurulu tesisiniz bulunmamaktadır.</p>';
    } else {
        const tesisListesi = document.createElement('ul');
        kuruluTesisler.forEach(tesis => {
            const listItem = document.createElement('li');
            listItem.textContent = tesis;
            tesisListesi.appendChild(listItem);
        });
        kuruluTesislerDiv.appendChild(tesisListesi);
    }
}

// Sayfa yüklendiğinde kurulu tesisleri göster
window.onload = showKuruluTesisler;
