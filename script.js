'use stict';

const btnUp = document.getElementById('btnUp');

onscroll = function () {
  if (scrollY >= 400) {
    btnUp.classList.add('show');
  } else {
    btnUp.classList.add('hide');
    btnUp.classList.remove('show');
  }
};

btnUp.onclick = function () {
  scroll({
    top: 0,
    behavior: 'smooth',
  });
};
