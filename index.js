const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen))

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive() {
  this.classList.toggle('open-active');
}
