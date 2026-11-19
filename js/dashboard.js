// فعلاً فقط تعامل‌های پایه؛ رفتارهای بیشتر در مراحل بعد اضافه می‌شوند.
document.querySelectorAll('.mission-card').forEach((card) => {
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') card.click();
  });
});
