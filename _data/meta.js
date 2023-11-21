// holds all our meta data
module.exports = {
    url: process.env.URL || 'http://localhost:8080',
    siteName: "Eink Italia: il futuro della lettura digitale e del benessere della vista",
    siteDescription: "Esplora il meraviglioso mondo degli Eink con Eink Italia. Scopri i migliori prodotti Eink, i benefici, e il profondo impatto di questa splendida tecnologia sulla salute dei nostri occhi. Entra a far parte della rivoluzione Eink oggi!",
    domain: 'einkitalia.com',
    siteType: 'Organization', // schema
    author: 'Adriano Urso',
    authorEmail: 'ajaneu@gmail.com',
    authorWebsite: 'https://einkitalia.com',
    authorAvatar: '/img/adrianourso.png',
    themeColor: '#E54848', //  Manifest: defines the default theme color for the application
    themeBgColor: '#FFFDF5', // Manifest: defines a placeholder background color for the application page to display before
    meta_data: {
      opengraph_default: '/img/einkitalia-open-graph.png',
      twitterHandle: '',
      twitterProfile: '',
      mastodonProfile: ''
    },
    pagination: {
      itemsPerPage: 20
    },
    webmentions: {
      fallbackAvatar: '/assets/images/svg/avatar-fallback.svg'
    },
    address: {
      firma: 'Adriano Urso',
      street: 'via Piero Schiaffino, 116 / 11',
      city: 'Camogli',
      state: 'Genova',
      zip: '16032',
      country: 'Italy',
      mobileDisplay: '+39 333 9278493',
      mobileCall: ' +393339278493',
      email: 'ajaneu@gmail.com',
      cif: ''
    },
  
    languages: [
      {
        label: 'EN',
        code: 'en',
        long: 'English',
        localeCode: 'en_EN'
      },
      {
        label: 'IT',
        code: 'it',
        long: 'Italiano',
        localeCode: 'it_IT'
      }
    ],
  
    en: {
      localeCode: 'en_EN',
      long: 'English',
      siteName: 'Eink Italia: The Future of Digital Reading & Eye Comfort',
      siteDescription:
        "Explore the groundbreaking world of Eink with Eink Italia. Discover top-tier Eink products, benefits, and the technology's profound impact on eye health in the digital age. Join the Eink revolution today.",
      back: 'Back',
      skipText: 'Jump to main content',
      toc: 'Table of contents',
      skipToc: 'Skip table of contents',
      blog: {
        name: 'Eink Italia: The Future of Digital Reading & Eye Comfort - Blog',
        description:
          "I'm writing about things related to eink. Projects, approaches and observations, things I have learned or consider important.  Explore the groundbreaking world of Eink with Eink Italia. Discover top-tier Eink products, benefits, and the technology's profound impact on eye health in the digital age. Join the Eink revolution today.",
        url: 'https://einkitalia.com/en/feed.xml',
        published: 'published: ',
        edited: 'last edit: ',
        reading: 'Reading time: ',
        unit: 'min.',
        githubEdit:
          'I try to keep my articles up to date. If you see something that is not true (anymore), or something that should be mentioned, feel free to edit the article on'
      },
      webmentions: {
        formTitle: 'Have you published a response? Let me know where:',
        buttonValue: 'Send Webmention'
      },
      ariaLabels: {
        mainMenu: 'Main',
        footerMenu: 'Footer',
        socialMenu: 'Social links',
        optionsMenu: 'Select language',
        optionsButton: 'Change language'
      }
    },
  
    it: {
      localeCode: 'it_IT',
      long: 'Italiano',
      siteName: "Eink Italia: il futuro della lettura digitale e del benessere della vista",
      siteDescription: "Esplora il meraviglioso mondo degli Eink con Eink Italia. Scopri i migliori prodotti Eink, i benefici, e il profondo impatto di questa splendida tecnologia sulla salute dei nostri occhi. Entra a far parte della rivoluzione Eink oggi!",
      back: 'Torna indietro',
      skipText: 'Vai al contenuto principale',
      toc: 'indice dei contenuti',
      skipToc: "Vai all'indice",
      blog: {
        name: 'Eink Italia: il futuro della lettura digitale e del benessere della vista - Blog',
        description:
        "Scrivo di cose legate agli eink. Progetti, approcci e osservazioni, cose che ho imparato o che considero importanti.  Esplorate il mondo innovativo di Eink con Eink Italia. Scoprite i prodotti Eink di alto livello, i benefici e il profondo impatto della tecnologia sulla salute degli occhi nell'era digitale. Unitevi alla rivoluzione di Eink oggi stesso",
        url: 'https://einkitalia.com/it/feed.xml',
        published: 'pubblicato il: ',
        edited: 'ultima modifica: ',
        reading: 'Tempo di lettura: ',
        unit: 'min.',
        githubEdit:
          "Cerco di mantenere i miei articoli aggiornati. Se vedete qualcosa che non è (più) corretto, o qualcosa che dovrebbe essere menzionato, sentitevi liberi di modificare l'articolo su"
      },
      webmentions: {
        formTitle: 'Avete inviato una risposta? Ditemi dove:',
        buttonValue: 'Invia la Webmention'
      },
      ariaLabels: {
        mainMenu: 'Menu principale',
        footerMenu: 'Info',
        options: 'seleziona la lingua',
        optionsButton: 'cambia lingua'
      }
    }
  };
  