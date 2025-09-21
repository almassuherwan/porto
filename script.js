const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("waForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil nilai input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Nomor WhatsApp tujuan
  const phone = "6281277810688"; 

  // Elemen pesan error
  const emailError = document.getElementById("emailError");

  // Regex untuk validasi email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset pesan error dulu
  emailError.style.display = "none";

  // Validasi email
  if (!emailPattern.test(email)) {
    emailError.textContent = "Alamat email tidak valid. Contoh: nama@email.com";
    emailError.style.display = "block";
    return;
  }

  // Validasi field kosong
  if (!name || !email || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  // Format pesan
  const text = `Pesan dari: ${name}%0AEmail: ${email}%0A%0AIsi Pesan:%0A${message}`;

  // Buka WhatsApp
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});