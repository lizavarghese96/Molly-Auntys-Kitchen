document.addEventListener('DOMContentLoaded', function () {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll('.nav-links a[data-page]');
  links.forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
  });

  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) navLinks.classList.remove('open');
    });
  }
});
