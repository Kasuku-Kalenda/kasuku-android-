import type { CapacitorConfig } from '@capacitor/cli';

// ── Mode dev : pointe vers kasuku.afrikia (live update sans rebuild APK)
// ── Mode prod : assets embarqués dans l'APK (hors-ligne, instantané)
const DEV_MODE = process.env.CAPACITOR_DEV === 'true';

const config: CapacitorConfig = {
  appId: 'org.afrikia.kasuku',
  appName: 'Kasuku',
  webDir: '../kasuku-cultural-calendar-170426/dist',
  server: DEV_MODE
    ? {
        // Dev — charge depuis le serveur distant, mise à jour instantanée
        url: 'https://kasuku.afrikia',
        cleartext: false,
      }
    : {
        // Prod — assets locaux, fonctionne hors-ligne
        androidScheme: 'https',
        cleartext: false,
      },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: '#FFFFFF',
    },
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#0F1923',
      androidSplashResourceName: 'splash',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
