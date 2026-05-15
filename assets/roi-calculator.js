(function () {
  'use strict';

  var debounceTimer;

  function formatEuro(n) {
    return n.toLocaleString('de-DE') + ' €'; // non-breaking space + €
  }

  function calculate() {
    var callsEl = document.getElementById('roi-calls');
    var valueEl = document.getElementById('roi-value');
    var outputEl = document.getElementById('roi-output');
    var storyEl = document.getElementById('roi-story');
    var ctaEl = document.getElementById('roi-cta');

    if (!callsEl || !valueEl || !outputEl) return;

    var calls = parseFloat(callsEl.value) || 0;
    var value = parseFloat(valueEl.value) || 0;

    // Formel: Anrufe × 30% × 50% × Auftragswert × 52
    var loss = Math.round(calls * 0.30 * 0.50 * value * 52);
    var hasInput = calls > 0 && value > 0;

    outputEl.textContent = loss > 0 ? formatEuro(loss) : (hasInput ? '< 1 €' : '— €');

    if (storyEl) {
      if (loss > 0) {
        storyEl.textContent = 'Das verlieren Sie jährlich durch verpasste Anfragen. (Basis: 30 % verpasste Anrufe, davon 50 % wären Aufträge geworden, × 52 Wochen)';
        storyEl.style.opacity = '1';
      } else {
        storyEl.textContent = 'Zahlen eingeben — Verlust erscheint sofort.';
        storyEl.style.opacity = '0.6';
      }
    }

    if (ctaEl) {
      ctaEl.style.display = loss > 0 ? '' : 'none';
    }
  }

  function onInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(calculate, 100);
  }

  function init() {
    var callsEl = document.getElementById('roi-calls');
    var valueEl = document.getElementById('roi-value');
    if (!callsEl || !valueEl) return;

    callsEl.addEventListener('input', onInput);
    valueEl.addEventListener('input', onInput);

    // Initialberechnung
    calculate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
