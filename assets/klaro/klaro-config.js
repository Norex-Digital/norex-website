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
        description: 'Wir nutzen Google Analytics um zu verstehen, welche Inhalte unseren Besuchern helfen, sowie Google Maps zur Anzeige unseres Standorts. Keine Weitergabe an Dritte über diese Dienste hinaus. Details in unserer Datenschutzerklärung.',
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
    }
  ]
};
