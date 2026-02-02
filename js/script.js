// Smooth scroll ke WhatsApp CTA
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("CTA WhatsApp diklik");
  });
});
