(function () {
  'use strict';

  // Klaro-Konfiguration — Berlin-Direct-Look (Schwarz/Weiß/BVG-Rot)
  window.klaroConfig = {
    version: 1,
    elementID: 'klaro-cookie-notice',
    styling: {
      theme: ['light', 'bottom', 'wide']
    },
    noAutoLoad: false,
    htmlTexts: false,
    embedded: false,
    groupByPurpose: false,
    storageMethod: 'localStorage',
    cookieName: 'norex-cookie-consent',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,

    translations: {
      de: {
        privacyPolicyUrl: '/datenschutz.html',
        consentNotice: {
          description:
            'Wir verwenden Cookies für Analyse und Tracking. Sie können selbst wählen, welche Dienste aktiv sein sollen.',
          learnMore: 'Mehr erfahren'
        },
        consentModal: {
          title: 'Datenschutz-Einstellungen',
          description:
            'Hier können Sie einstellen, welche Dienste auf dieser Website geladen werden. Ihre Einstellungen werden lokal gespeichert und können jederzeit geändert werden.'
        },
        acceptAll: 'Alle akzeptieren',
        acceptSelected: 'Auswahl speichern',
        decline: 'Ablehnen',
        close: 'Schließen',
        purposes: {
          analytics: 'Analyse',
          marketing: 'Marketing'
        },
        poweredBy: ''
      }
    },

    services: [
      {
        name: 'google-analytics',
        title: 'Google Analytics 4',
        purposes: ['analytics'],
        required: false,
        optOut: false,
        onlyOnce: true,
        translations: {
          de: {
            description:
              'Anonymisierte Reichweitenmessung: Seitenaufrufe, Verweildauer und Herkunft der Besucher. Keine personenbezogene Daten werden ohne Ihre Zustimmung übertragen.'
          }
        },
        onAccept: `
          if (typeof window.loadGA4 === 'function') window.loadGA4();
        `,
        onDecline: ``
      },
      {
        name: 'google-tag-manager',
        title: 'Google Tag Manager',
        purposes: ['analytics', 'marketing'],
        required: false,
        optOut: false,
        onlyOnce: true,
        translations: {
          de: {
            description:
              'Container für Tracking-Skripte. Wird nur geladen wenn Sie zustimmen. Verwaltet GA4 und weitere Analyse-Tags.'
          }
        },
        onAccept: `
          if (typeof window.loadGTM === 'function') window.loadGTM();
        `,
        onDecline: ``
      }
    ]
  };

  // Brand-Foundation CSS-Override für Klaro (BVG-Rot + Berlin-Direct)
  var style = document.createElement('style');
  style.textContent = [
    // Banner Basis
    '.klaro .cookie-notice, .klaro .cookie-modal { font-family: "Manrope", system-ui, sans-serif !important; }',
    // Notice (Bottom-Bar)
    '.klaro .cookie-notice {',
    '  background: #0A0A0A !important;',
    '  border-top: 2px solid #E2231A !important;',
    '  color: #F8F7F4 !important;',
    '  padding: 1rem 1.5rem !important;',
    '  box-shadow: 0 -4px 24px rgba(0,0,0,0.4) !important;',
    '}',
    '.klaro .cookie-notice .cn-body p { color: #B8B5AB !important; font-size: 0.875rem !important; line-height: 1.6 !important; }',
    '.klaro .cookie-notice .cn-body a { color: #E2231A !important; text-decoration: underline; }',
    // Buttons
    '.klaro .cookie-notice .cn-buttons button, .klaro .cookie-modal .cm-footer .cm-btn {',
    '  font-family: "Manrope", system-ui, sans-serif !important;',
    '  font-weight: 700 !important;',
    '  font-size: 0.875rem !important;',
    '  border-radius: 4px !important;',
    '  padding: 0.625rem 1.25rem !important;',
    '  cursor: pointer !important;',
    '  transition: transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms ease !important;',
    '}',
    '.klaro .cookie-notice .cn-buttons button:hover, .klaro .cookie-modal .cm-footer .cm-btn:hover {',
    '  transform: translateY(-2px) !important;',
    '}',
    // Accept-All Button (BVG-Rot)
    '.klaro .cn-btn.cn-accept-all, .klaro .cm-btn.cm-btn-success {',
    '  background: #E2231A !important;',
    '  border: none !important;',
    '  color: #FFFFFF !important;',
    '  box-shadow: 0 4px 12px rgba(226,35,26,0.3) !important;',
    '}',
    '.klaro .cn-btn.cn-accept-all:hover, .klaro .cm-btn.cm-btn-success:hover {',
    '  box-shadow: 0 6px 16px rgba(226,35,26,0.4) !important;',
    '}',
    // Decline Button (Ghost)
    '.klaro .cn-btn.cn-decline, .klaro .cm-btn.cm-btn-danger {',
    '  background: transparent !important;',
    '  border: 1.5px solid #3A3833 !important;',
    '  color: #B8B5AB !important;',
    '}',
    '.klaro .cn-btn.cn-decline:hover, .klaro .cm-btn.cm-btn-danger:hover {',
    '  border-color: #B8B5AB !important;',
    '  color: #F8F7F4 !important;',
    '}',
    // Auswahl speichern Button (Ghost Weiß)
    '.klaro .cm-btn.cm-btn-accept-all {',
    '  background: #E2231A !important;',
    '  border: none !important;',
    '  color: #FFFFFF !important;',
    '}',
    '.klaro .cm-btn.cm-btn-accept {',
    '  background: transparent !important;',
    '  border: 1.5px solid #6B6960 !important;',
    '  color: #B8B5AB !important;',
    '}',
    // Modal
    '.klaro .cookie-modal .cm-modal {',
    '  background: #1A1916 !important;',
    '  border: 1px solid #3A3833 !important;',
    '  border-radius: 8px !important;',
    '  color: #F8F7F4 !important;',
    '}',
    '.klaro .cookie-modal .cm-modal .cm-header {',
    '  background: #0A0A0A !important;',
    '  border-bottom: 1px solid #3A3833 !important;',
    '  border-radius: 8px 8px 0 0 !important;',
    '}',
    '.klaro .cookie-modal h1 { font-family: "Geist", system-ui, sans-serif !important; font-weight: 700 !important; color: #FFFFFF !important; font-size: 1.25rem !important; }',
    '.klaro .cookie-modal p { color: #B8B5AB !important; font-size: 0.875rem !important; line-height: 1.6 !important; }',
    '.klaro .cookie-modal a { color: #E2231A !important; }',
    // Toggles (Switch)
    '.klaro .cookie-modal .cm-list-label .slider { background: #3A3833 !important; }',
    '.klaro .cookie-modal input[type="checkbox"]:checked + .cm-list-label .slider {',
    '  background: #E2231A !important;',
    '}',
    // Service Item
    '.klaro .cookie-modal .cm-service { border-bottom: 1px solid #3A3833 !important; }',
    '.klaro .cookie-modal .cm-service .cm-service-title { color: #F8F7F4 !important; font-weight: 600 !important; }',
    // Learn More Link
    '.klaro .cn-learn-more { color: #B8B5AB !important; font-size: 0.8rem !important; }',
    '.klaro .cookie-notice .cn-learn-more a { color: rgba(255,255,255,0.5) !important; text-decoration: underline !important; }'
  ].join('\n');
  document.head.appendChild(style);
})();
