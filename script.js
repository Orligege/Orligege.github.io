document.getElementById("year").textContent = new Date().getFullYear();

const backdrop = document.createElement('div');
backdrop.className = 'lightbox-backdrop';
const img = document.createElement('img');
backdrop.appendChild(img);
document.body.appendChild(backdrop);

document.addEventListener('click', e => {
  const a = e.target.closest('a[data-lightbox]');
  if (!a) return;
  e.preventDefault();
  img.src = a.getAttribute('href');
  backdrop.classList.add('active');
});
backdrop.addEventListener('click', () => {
  backdrop.classList.remove('active');
  img.src = '';
});
