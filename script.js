const container = document.querySelector('.container');
for (let i = 1; i < i <= 10; i++) {
  const blocks = document.createElement('div');
  blocks.classList.add('block');
  container.appendChild(blocks);
}

// Animejs
function generate() {
  anime({
    targets: '.block',
    translateX: function () {
      return anime.random(-700, 700);
    },
  });
}
