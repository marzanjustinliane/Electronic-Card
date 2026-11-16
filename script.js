window.addEventListener('load', () => {
  const introOverlay = document.getElementById('introOverlay');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const envelope = document.getElementById('envelope');
  const closeBtn = document.getElementById('closeBtn');
  const controls = document.getElementById('controls');
  const hintText = document.getElementById('hintText');

  // Show intro screen right after webpage finishes loading
  introOverlay.classList.add('active');

  // Move the "No" button to a random safe position on screen when hovered or touched
  function dodgeNoButton() {
    const padding = 24;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '110';
  }

  noBtn.addEventListener('mouseenter', dodgeNoButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeNoButton();
  });

  // Proceed to the letter card when "Yes" is clicked
  yesBtn.addEventListener('click', () => {
    introOverlay.classList.remove('active');
    noBtn.style.display = 'none';
  });

  // Envelope open and close controls
  function openEnvelope() {
    if (!envelopeWrapper.classList.contains('open')) {
      envelopeWrapper.classList.add('open');
      controls.classList.add('visible');
      hintText.textContent = 'Click any text on the card to personalize it';
    }
  }

  function closeEnvelope() {
    envelopeWrapper.classList.remove('open');
    controls.classList.remove('visible');
    hintText.textContent = 'Click the envelope or wax seal to open';
  }

  envelope.addEventListener('click', openEnvelope);
  closeBtn.addEventListener('click', closeEnvelope);
});