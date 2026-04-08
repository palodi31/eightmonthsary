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
