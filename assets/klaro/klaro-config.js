// Microsoft Clarity — Snippet wird ERST nach erteiltem Consent geladen (DSGVO).
// Guard verhindert Doppelladen bei wiederkehrendem Consent (Klaro ruft onAccept
// auch beim Seitenload fuer bereits akzeptierte Dienste auf).
function loadClarity() {
  if (window.__clarityLoaded) return;
  window.__clarityLoaded = true;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'x1dju1t613');
}

var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  styling: { theme: ['light', 'bottom', 'wide'] },
  acceptAll: true,
  hideDeclineAll: false,
  lang: 'de',
  privacyPolicy: '/datenschutz',
  translations: {
    de: {
      consentNotice: {
        description: 'Wir nutzen Google Analytics und Microsoft Clarity, um zu verstehen, welche Inhalte unseren Besuchern helfen und wie die Seite genutzt wird. Keine Weitergabe an Dritte über diese Dienste hinaus. Details in unserer Datenschutzerklärung.',
      },
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Hier können Sie einsehen und anpassen, welche Informationen wir über Sie sammeln.'
      },
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      decline: 'Ablehnen',
      close: 'Schließen',
      ok: 'OK',
      purposes: {
        analytics: { title: 'Analyse' }
      },
      'google-analytics': {
        description: 'Anonyme Nutzungsstatistiken — hilft uns die Website zu verbessern.'
      },
      'microsoft-clarity': {
        description: 'Anonyme Heatmaps & Session-Aufzeichnungen — zeigt uns, wie die Seite genutzt wird, um sie zu verbessern.'
      }
    }
  },
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [
        [/^_ga/, '/', 'norex-digital.de'],
        [/^_gid/, '/', 'norex-digital.de']
      ],
      onAccept: function() {
        gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
        // Danke-Seite: Form-Conversion erst nach erteiltem Consent feuern.
        if (typeof window.__norexFormConversion === 'function') {
          window.__norexFormConversion();
        }
      },
      onDecline: function() {
        gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    },
    {
      name: 'microsoft-clarity',
      title: 'Microsoft Clarity',
      purposes: ['analytics'],
      cookies: [
        [/^_clck/, '/', 'norex-digital.de'],
        [/^_clsk/, '/', 'norex-digital.de']
      ],
      onAccept: function() {
        loadClarity();
      },
      onDecline: function() {
        // Clarity wird ohne Consent nicht geladen.
      }
    }
  ]
};
