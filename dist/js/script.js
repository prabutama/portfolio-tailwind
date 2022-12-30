// Mengambil elemen yang akan digunakan sebagai anchor
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Menambahkan event listener ke setiap elemen anchor
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Menghindari aksi default dari event
    e.preventDefault();

    // Mengambil elemen tujuan
    const target = document.querySelector(this.getAttribute('href'));

    // Membuat smooth scroll ke elemen tujuan
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});


//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
