const navMuncul = document.querySelector('.list');

document.querySelector('#hamburger-menu').onclick = () => {
  navMuncul.classList.toggle('active');
};

// ambil element hamburger
const hamburger = document.querySelector('#hamburger-menu');

// menghapus class active di navbar
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMuncul.contains(e.target)) {
    navMuncul.classList.remove('active');
  }
});
