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
  // Respect reduced-motion settings: show the still poster instead of autoplaying.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    teaser.removeAttribute('autoplay');
    teaser.pause();
    teaser.controls = true;
  }
  soundToggle.addEventListener('click', () => {
    teaser.muted = !teaser.muted;
    if (!teaser.muted) {
      teaser.currentTime = 0;
      teaser.play();
    }
    soundToggle.textContent = teaser.muted ? 'Sound on' : 'Mute';
    soundToggle.setAttribute('aria-pressed', String(!teaser.muted));
  });
}
