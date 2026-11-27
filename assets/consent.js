/* Airway Clinic — cookie consent (GDPR / Consent Mode v2, default denied).
   Necessary storage only until the visitor chooses. Analytics (GA4) loads
   only after consent. Google Maps embeds load only on explicit click.
   Choice remembered for 180 days. Re-open via footer "Cookie settings". */
(function () {
  'use strict';
  var GA_ID = 'G-PWZNFWFLPY';
  var KEY = 'awc-consent-v1';
  var MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000; // ~6 months

  // Language + relative root from the URL path (works on Pages dir URLs too)
  var segs = location.pathname.split('/').filter(Boolean);
  if (segs.length && segs[segs.length - 1].indexOf('.') !== -1) segs.pop();
  var isSv = segs.indexOf('sv') !== -1;
  var prefix = new Array(segs.length + 1).join('../');
  var langRoot = prefix + (isSv ? 'sv/' : '');

  var T = isSv ? {
    title: 'Cookies',
    text: 'Vi använder nödvändiga cookies för att webbplatsen ska fungera. Med ditt samtycke använder vi även analyscookies (Google Analytics) för att förstå hur webbplatsen används. Du kan när som helst ändra ditt val via ”Cookieinställningar” i sidfoten. Läs mer i vår ',
    privacy: 'integritetspolicy',
    accept: 'Acceptera alla',
    reject: 'Avvisa alla',
    settings: 'Inställningar',
    necessary: 'Nödvändiga',
    necessaryNote: 'Alltid på — krävs för att webbplatsen ska fungera.',
    analytics: 'Analys',
    analyticsNote: 'Hjälper oss att förbättra webbplatsen (Google Analytics).',
    marketing: 'Marknadsföring',
    marketingNote: 'Reklamrelaterad lagring. Avaktiverat som standard.',
    save: 'Spara val',
    back: 'Tillbaka',
    mapLoad: 'Visa karta',
    mapOpen: 'Öppna i Google Maps',
    mapNote: 'Kartan tillhandahålls av Google och laddas först när du väljer det.'
  } : {
    title: 'Cookies',
    text: 'We use necessary cookies to make this site work. With your consent, we also use analytics cookies (Google Analytics) to understand how the site is used. You can change your choice at any time via “Cookie settings” in the footer. Read more in our ',
    privacy: 'Privacy Policy',
    accept: 'Accept all',
    reject: 'Reject all',
    settings: 'Settings',
    necessary: 'Necessary',
    necessaryNote: 'Always on — required for the site to work.',
    analytics: 'Analytics',
    analyticsNote: 'Helps us improve the website (Google Analytics).',
    marketing: 'Marketing',
    marketingNote: 'Advertising-related storage. Off by default.',
    save: 'Save choices',
    back: 'Back',
    mapLoad: 'Load map',
    mapOpen: 'Open in Google Maps',
    mapNote: 'The map is provided by Google and loads only when you choose.'
  };

  function gtag() { window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }
  var gaLoaded = false;
  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }
  function applyConsent(st) {
    gtag('consent', 'update', {
      analytics_storage: st.analytics ? 'granted' : 'denied',
      ad_storage: st.marketing ? 'granted' : 'denied',
      ad_user_data: st.marketing ? 'granted' : 'denied',
      ad_personalization: st.marketing ? 'granted' : 'denied'
    });
    if (st.analytics) loadGA();
  }
  function readStored() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var st = JSON.parse(raw);
      if (!st || !st.ts || (Date.now() - st.ts) > MAX_AGE_MS) { localStorage.removeItem(KEY); return null; }
      return st;
    } catch (e) { return null; }
  }
  function store(st) {
    st.ts = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }

  // ---- banner DOM ----
  var overlay = null;
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function closeBanner() { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); overlay = null; }
  function btn(label, kind) {
    var b = el('button', 'awc-btn awc-btn-' + kind, label);
    b.type = 'button';
    return b;
  }
  function toggleRow(name, note, checked, disabled) {
    var row = el('div', 'awc-row');
    var lab = el('label', 'awc-row-label');
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = checked;
    cb.disabled = disabled;
    var txt = el('span', '', '<strong>' + name + '</strong><br><span class="awc-note">' + note + '</span>');
    lab.appendChild(cb); lab.appendChild(txt);
    row.appendChild(lab);
    return { row: row, cb: cb };
  }
  function openBanner(showSettings) {
    closeBanner();
    overlay = el('div', 'awc-overlay');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'false');
    overlay.setAttribute('aria-label', T.title);
    var card = el('div', 'awc-card');
    overlay.appendChild(card);

    var mainView = el('div', 'awc-view');
    mainView.appendChild(el('p', 'awc-title', T.title));
    mainView.appendChild(el('p', 'awc-text', T.text + '<a href="' + langRoot + 'privacy.html">' + T.privacy + '</a>.'));
    var actions = el('div', 'awc-actions');
    var bAccept = btn(T.accept, 'primary');
    var bReject = btn(T.reject, 'secondary');
    var bSettings = btn(T.settings, 'link');
    actions.appendChild(bAccept); actions.appendChild(bReject); actions.appendChild(bSettings);
    mainView.appendChild(actions);

    var settingsView = el('div', 'awc-view');
    settingsView.style.display = 'none';
    settingsView.appendChild(el('p', 'awc-title', T.settings));
    var rNec = toggleRow(T.necessary, T.necessaryNote, true, true);
    var rAna = toggleRow(T.analytics, T.analyticsNote, false, false);
    var rMkt = toggleRow(T.marketing, T.marketingNote, false, false);
    settingsView.appendChild(rNec.row); settingsView.appendChild(rAna.row); settingsView.appendChild(rMkt.row);
    var sActions = el('div', 'awc-actions');
    var bSave = btn(T.save, 'primary');
    var bBack = btn(T.back, 'link');
    sActions.appendChild(bSave); sActions.appendChild(bBack);
    settingsView.appendChild(sActions);

    card.appendChild(mainView); card.appendChild(settingsView);
    document.body.appendChild(overlay);

    function show(view) {
      mainView.style.display = view === 'main' ? '' : 'none';
      settingsView.style.display = view === 'settings' ? '' : 'none';
    }
    bAccept.addEventListener('click', function () {
      var st = { analytics: true, marketing: true };
      store(st); applyConsent(st); closeBanner();
    });
    bReject.addEventListener('click', function () {
      var st = { analytics: false, marketing: false };
      store(st); applyConsent(st); closeBanner();
    });
    bSettings.addEventListener('click', function () { show('settings'); });
    bBack.addEventListener('click', function () { show('main'); });
    bSave.addEventListener('click', function () {
      var st = { analytics: rAna.cb.checked, marketing: rMkt.cb.checked };
      store(st); applyConsent(st); closeBanner();
    });
    show(showSettings ? 'settings' : 'main');
  }

  // ---- styles ----
  var css = '' +
    '.awc-overlay{position:fixed;left:0;right:0;bottom:0;z-index:10000;display:flex;justify-content:center;padding:16px;pointer-events:none;}' +
    '.awc-card{pointer-events:auto;background:#fff;color:#22333b;max-width:660px;width:100%;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.25);padding:20px 22px;font-family:Inter,system-ui,sans-serif;font-size:.9rem;line-height:1.5;max-height:80vh;overflow:auto;}' +
    '.awc-title{font-weight:800;font-size:1rem;margin:0 0 8px;color:#1a6b69;}' +
    '.awc-text{margin:0 0 14px;}' +
    '.awc-text a{color:#1a6b69;}' +
    '.awc-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;}' +
    '.awc-btn{border:none;border-radius:9px;padding:10px 18px;font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;}' +
    '.awc-btn-primary{background:#1a6b69;color:#fff;}' +
    '.awc-btn-secondary{background:#41545e;color:#fff;}' +
    '.awc-btn-link{background:none;color:#1a6b69;text-decoration:underline;padding:10px 6px;}' +
    '.awc-row{border-top:1px solid #e3e8e8;padding:10px 0;}' +
    '.awc-row-label{display:flex;gap:10px;align-items:flex-start;cursor:pointer;}' +
    '.awc-row-label input{margin-top:4px;width:16px;height:16px;accent-color:#1a6b69;}' +
    '.awc-note{color:#5c6f77;font-size:.8rem;}' +
    '.awc-map-placeholder{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;min-height:280px;background:#f7f5f0;border-radius:12px;padding:24px;margin-top:1.5rem;font-size:.9rem;}' +
    '.awc-map-placeholder .awc-btn{margin:0 6px;}' +
    '.awc-map-note{color:#5c6f77;font-size:.78rem;margin:4px 0 0;}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ---- map gating: click-to-load ----
  function initMaps() {
    var nodes = document.querySelectorAll('[data-awc-map]');
    for (var i = 0; i < nodes.length; i++) {
      (function (ph) {
        var loadBtn = ph.querySelector('[data-awc-map-load]');
        if (!loadBtn) return;
        loadBtn.addEventListener('click', function () {
          var f = document.createElement('iframe');
          f.className = 'map-frame';
          f.title = ph.getAttribute('data-awc-map-title') || 'Map';
          f.loading = 'lazy';
          f.referrerPolicy = 'no-referrer-when-downgrade';
          f.src = ph.getAttribute('data-awc-map');
          f.style.marginTop = '1.5rem';
          ph.parentNode.replaceChild(f, ph);
        });
      })(nodes[i]);
    }
  }

  // ---- footer "Cookie settings" links ----
  function initFooterLinks() {
    var links = document.querySelectorAll('[data-awc-cookie-settings]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        openBanner(true);
      });
    }
  }

  function init() {
    initMaps();
    initFooterLinks();
    var st = readStored();
    if (st) { applyConsent(st); } else { openBanner(false); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();