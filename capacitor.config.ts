import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.afrikia.kasuku',
  appName: 'Kasuku',
  // Build Vite embarqué dans l'APK (mode local — chargement instantané, fonctionne hors-ligne)
  webDir: '../kasuku-cultural-calendar-170426/dist',
  server: {
    androidScheme: 'https', // origin = https://localhost (CORS autorisé côté API)
    cleartext: false,
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: '#FFFFFF',
    },
    SplashScreen: {
      launchShowDuration: 1500,   // disparaît après 1.5s
      launchAutoHide: true,
      backgroundColor: '#0F1923', // fond sombre = couleur du logo
      androidSplashResourceName: 'splash',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
