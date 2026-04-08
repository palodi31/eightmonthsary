const views = document.querySelectorAll('.view');
const sectionButtons = document.querySelectorAll('.section-trigger');
const backButtons = document.querySelectorAll('.back-home-btn');

function showView(id) {
  views.forEach((view) => {
    view.classList.remove('active-view');
  });

  const nextView = document.getElementById(id);
  if (nextView) {
    nextView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

sectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    showView(target);
  });
});

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showView('homeView');
  });
});

const photoButtons = document.querySelectorAll('.photo-button');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closePhotoModal = document.getElementById('closePhotoModal');

photoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const photoSrc = button.getAttribute('data-photo');
    const caption = button.getAttribute('data-caption') || '';

    modalImage.src = photoSrc;
    modalCaption.textContent = caption;
    photoModal.classList.add('active');
  });
});

closePhotoModal.addEventListener('click', () => {
  photoModal.classList.remove('active');
  modalImage.src = '';
});

photoModal.addEventListener('click', (event) => {
  if (event.target === photoModal) {
    photoModal.classList.remove('active');
    modalImage.src = '';
  }
});
