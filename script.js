document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulasi pengiriman form
  const message = document.getElementById("formMessage");
  message.textContent = "Terima kasih! Pesanmu telah dikirim.";
  message.style.color = "green";

  // Reset form
  this.reset();
});
