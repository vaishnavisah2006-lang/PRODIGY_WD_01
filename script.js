document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar-custom');
  const toggler = document.querySelector('.navbar-toggler');
  const navCollapse = document.querySelector('.navbar-collapse');

  // Scroll effect for navbar background
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Close mobile menu on nav link click
  navCollapse.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth < 992 && navCollapse.classList.contains('show')) {
        toggler.click();
      }
    });
  });
});
