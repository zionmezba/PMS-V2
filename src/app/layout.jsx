import 'src/global.css';

import { CONFIG } from 'src/config-global';
import { primary } from 'src/theme/core/palette';
// Localization Customization
import { LocalizationProvider } from 'src/locales';
import { detectLanguage } from 'src/locales/server';
import { I18nProvider } from 'src/locales/i18n-provider';
// Theme Customization
import { ThemeProvider } from 'src/theme/theme-provider';
// Color Scheme Customization
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

// UI Components
import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
// Settings Customization
import { detectSettings } from 'src/components/settings/server';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

// Checkout Customization
import { CheckoutProvider } from 'src/sections/checkout/context';

// Auth Customization
import { AuthProvider as JwtAuthProvider } from 'src/auth/context/jwt';
import { AuthProvider as Auth0AuthProvider } from 'src/auth/context/auth0';
import { AuthProvider as AmplifyAuthProvider } from 'src/auth/context/amplify';
import { AuthProvider as SupabaseAuthProvider } from 'src/auth/context/supabase';
import { AuthProvider as FirebaseAuthProvider } from 'src/auth/context/firebase';

// Dynamic Authentication Provider---------------------------

const AuthProvider =
  (CONFIG.auth.method === 'amplify' && AmplifyAuthProvider) ||
  (CONFIG.auth.method === 'firebase' && FirebaseAuthProvider) ||
  (CONFIG.auth.method === 'supabase' && SupabaseAuthProvider) ||
  (CONFIG.auth.method === 'auth0' && Auth0AuthProvider) ||
  JwtAuthProvider;

// Viewport Customization 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

export default async function RootLayout({ children }) {
  const lang = CONFIG.isStaticExport ? 'en' : await detectLanguage();

  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();

  return (
    <html lang={lang ?? 'en'} suppressHydrationWarning>
      <body>
        {getInitColorSchemeScript}

        {/* Provides internationalization support */}
        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <LocalizationProvider>
          {/* Provides authentication context */}
            <AuthProvider>
            {/* Provides settings context */}
              <SettingsProvider
                settings={settings}
                caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
              >
                {/* Provides theme context */}
                <ThemeProvider>
                {/* Handles lazy loading of components with animations. */}
                  <MotionLazy>
                  {/* Provides context for the checkout process. */}
                    <CheckoutProvider>
                      <Snackbar />
                      <ProgressBar />
                      <SettingsDrawer />
                      {children}
                    </CheckoutProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </AuthProvider>
          </LocalizationProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
