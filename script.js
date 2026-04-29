const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.logo-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;
    modalImg.alt = `${card.dataset.title} preview`;
    modalTitle.textContent = card.dataset.title;
    modalType.textContent = card.dataset.type;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
