const copyButton = document.querySelector('#copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex').textContent;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = 'Copied!';
    status.textContent = 'Citation copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy citation'; }, 2200);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Use your browser’s copy command.';
    copyButton.textContent = 'Selected — copy manually';
  }
});

const teaser = document.querySelector('.teaser video');
const soundToggle = document.querySelector('.sound-toggle');
if (teaser) {
  // The button shows the current state, like a video player's speaker icon.
  const showSound = () => {
    soundToggle.querySelector('span').textContent = teaser.muted ? 'Sound off' : 'Sound on';
    soundToggle.title = teaser.muted ? 'Turn sound on' : 'Turn sound off';
    soundToggle.setAttribute('aria-pressed', String(!teaser.muted));
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Reduced motion: no autoplay; the still frame and the player's own controls instead.
    teaser.muted = false;
    teaser.controls = true;
    soundToggle.hidden = true;
  } else {
    let started = false;
    let mutedByVisitor = false;

    // Play from the start, with sound unless the visitor turned it off. Browsers refuse
    // sound before the visitor has clicked or tapped on the page; then play muted instead.
    const play = async () => {
      if (!started) {
        teaser.currentTime = 0;
        started = true;
      }
      teaser.muted = mutedByVisitor;
      try {
        await teaser.play();
      } catch (error) {
        if (error.name !== 'NotAllowedError') return;
        teaser.muted = true;
        await teaser.play().catch(() => {});
      }
      showSound();
    };

    // Play only while at least half of the video is on screen.
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) play();
      else teaser.pause();
    }, { threshold: 0.5 }).observe(teaser);

    soundToggle.addEventListener('click', () => {
      if (teaser.muted) {
        mutedByVisitor = false;
        teaser.muted = false;
        teaser.currentTime = 0;
        teaser.play();
      } else {
        mutedByVisitor = true;
        teaser.muted = true;
      }
      showSound();
    });
  }
}
