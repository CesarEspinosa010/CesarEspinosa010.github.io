// Inicializar todos los popovers en la página
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
  new bootstrap.Popover(el, { container: 'body' });
});
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
  new bootstrap.Popover(el, { container: 'body' });
});

// MODAL DEL PRIVACY
document.addEventListener('DOMContentLoaded', function () {
  if (!window.location.pathname.includes('privacy.html')) return;

  const modalEl = document.getElementById('privacyModal');
  const body = document.body;

  if (modalEl && window.bootstrap) {
    const privacyModal = new bootstrap.Modal(modalEl);
    privacyModal.show();

    modalEl.addEventListener('show.bs.modal', function () {
      body.classList.add('blurred');
    });

    modalEl.addEventListener('hidden.bs.modal', function () {
      body.classList.remove('blurred');
    });
  }
});

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const label = toggle ? toggle.querySelector("span") : null;

  function updateTheme(isDark) {
    icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
    label.textContent = isDark ? "Modo claro" : "Modo oscuro";
  }

  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = stored === "dark" || (stored === null && prefersDark);

  root.classList.toggle("dark", isDark);
  updateTheme(isDark);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const newTheme = root.classList.toggle("dark") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      updateTheme(newTheme === "dark");
    });
  }
})();