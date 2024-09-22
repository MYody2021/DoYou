function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);

// Array berisi beberapa kalimat untuk ditampilkan pada hover text
const hoverTexts = [
    "I LOVE YOU!",
    "YOU'RE AMAZING!",
    "I MISS YOU SO MUCH!",
    "YOU MAKE ME SMILE!",
    "YOU'RE MY FAVORITE!",
    "NEVER SURRENDER!",
    "I WILL SUPPORT YOU!",
    "EVERYWHERE!",
    "EVERYDAY!",
    "EVERYTIME!",
    "Muacchhh...",
    "And F*ck You!"
];

// Indeks untuk melacak kalimat yang sedang ditampilkan
let currentIndex = 0;

// JavaScript untuk mengganti hover text saat gambar diklik
document.querySelector('.hati').addEventListener('click', function() {
    const hoverText = document.getElementById('hover-text');
    
    // Ganti teks berdasarkan indeks saat ini
    hoverText.textContent = hoverTexts[currentIndex];

    // Update indeks ke kalimat berikutnya, kembali ke awal jika sudah mencapai akhir
    currentIndex = (currentIndex + 1) % hoverTexts.length;
    
    // Pastikan teks selalu terlihat
    hoverText.style.display = 'block';
});
