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
        description: 'Wir nutzen Google Analytics um zu verstehen, welche Inhalte unseren Besuchern helfen. Keine Weitergabe an Dritte. Details in unserer <a href="/datenschutz" class="klaro-link">Datenschutzerklärung</a>.',
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
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
      },
      onDecline: function() {
        gtag('consent', 'update', { 'analytics_storage': 'denied' });
      }
    }
  ]
};
