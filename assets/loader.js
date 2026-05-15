(function () {
  'use strict';

  // FOUC verhindern: body bleibt versteckt bis alle Components geladen
  document.documentElement.style.visibility = 'hidden';

  // Safety-Net: nach 2s sichtbar machen damit kein Blank-Page bei Loader-Fehler
  const safetyTimeout = setTimeout(function () {
    document.documentElement.style.visibility = '';
  }, 2000);

  function loadComponent(el) {
    const name = el.dataset.component;
    if (!name) return Promise.resolve();

    return fetch('/assets/components/' + name + '.html')
      .then(function (res) {
        if (!res.ok) throw new Error('Component nicht gefunden: ' + name);
        return res.text();
      })
      .then(function (html) {
        el.outerHTML = html;
      })
      .catch(function (err) {
        console.error('[loader]', err);
        el.outerHTML = '';
      });
  }

  function init() {
    const placeholders = document.querySelectorAll('[data-component]');
    if (placeholders.length === 0) {
      clearTimeout(safetyTimeout);
      document.documentElement.style.visibility = '';
      initTracking();
      return;
    }

    Promise.all(Array.from(placeholders).map(loadComponent))
      .then(function () {
        clearTimeout(safetyTimeout);
        document.documentElement.style.visibility = '';

        // Hamburger-Toggle nach Component-Inject aktivieren
        initNav();
        // Cross-Link + Quiz-Klick Tracking
        initTracking();
      })
      .catch(function () {
        clearTimeout(safetyTimeout);
        document.documentElement.style.visibility = '';
        initTracking();
      });
  }

  function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-mobile');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', !isOpen ? 'false' : 'true');
      // Hamburger → X Animation
      const bars = toggle.querySelectorAll('.nav-bar');
      if (!isOpen) {
        // closed
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      } else {
        // open
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      }
    });

    // ESC schliesst Menu
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
        const bars = toggle.querySelectorAll('.nav-bar');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  function initTracking() {
    window.dataLayer = window.dataLayer || [];
    document.querySelectorAll('[data-track]').forEach(function (el) {
      el.addEventListener('click', function () {
        var parts = el.dataset.track.split('_');
        // Format: crosslink_FROM_to_TO
        window.dataLayer.push({
          event: 'crosslink_click',
          crosslink_id: el.dataset.track,
          crosslink_from: window.location.pathname,
          crosslink_to: el.getAttribute('href') || ''
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
