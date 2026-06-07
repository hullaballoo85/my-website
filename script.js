const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.tab;

    tabLinks.forEach((l) => l.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    link.classList.add('active');
    document.getElementById(target).classList.add('active');

    navLinks.classList.remove('open');
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const form = document.querySelector('#kontakt form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Dziękuję za wiadomość! Skontaktuję się wkrótce.');
  form.reset();
});
