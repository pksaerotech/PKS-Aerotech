/* Site-only behavior; applicant data is NOT processed by this script. */
(() => {
  document.querySelectorAll('#year').forEach(el => { el.textContent = new Date().getFullYear(); });
  const config = window.PKS_CAREERS_CONFIG || {};
  const linkedIn = document.getElementById('linkedinProfile');
  if (linkedIn && typeof config.linkedinProfileUrl === 'string' && /^https:\/\/www\.linkedin\.com\//.test(config.linkedinProfileUrl)) linkedIn.href = config.linkedinProfileUrl;
  const raw = typeof config.tallyFormUrl === 'string' ? config.tallyFormUrl.trim() : '';
  const match = raw.match(/^https:\/\/tally\.so\/(?:r|embed)\/([A-Za-z0-9]+)(?:[?#].*)?$/);
  if (!match) return; // Without a verified provider form, retain the functioning email fallback.
  const iframe = document.getElementById('tallyFrame');
  const ready = document.getElementById('form-active');
  const fallback = document.getElementById('form-inactive');
  const formLink = document.getElementById('openTallyForm');
  if (!iframe || !ready || !fallback || !formLink) return;
  const id = match[1];
  const embedUrl = `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  iframe.setAttribute('data-tally-src', embedUrl);
  const fallbackIframe = () => { iframe.removeAttribute('data-tally-src'); iframe.src = embedUrl; iframe.style.height = '1150px'; };
  const loadEmbed = () => {
    if (window.Tally && typeof window.Tally.loadEmbeds === 'function') window.Tally.loadEmbeds();
    else fallbackIframe();
  };
  if (window.Tally && typeof window.Tally.loadEmbeds === 'function') loadEmbed();
  else {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = loadEmbed;
    script.onerror = fallbackIframe;
    document.body.appendChild(script);
  }
  formLink.href = `https://tally.so/r/${id}`;
  ready.hidden = false;
  fallback.hidden = true;
})();
