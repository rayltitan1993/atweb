'use client';

import { useState, useEffect } from 'react';
import Container from "@/app/_components/container";

interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  lastUpdated: string;
}

const defaultConsent: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
  lastUpdated: new Date().toISOString(),
};

export default function CookieSettingsPage() {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
    }
    setIsLoaded(true);
  }, []);

  const updateConsent = (category: keyof Omit<CookieConsent, 'lastUpdated'>, value: boolean) => {
    setConsent(prev => ({
      ...prev,
      [category]: value,
      lastUpdated: new Date().toISOString(),
    }));
  };

  const saveSettings = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  const acceptAll = () => {
    const newConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      lastUpdated: new Date().toISOString(),
    };
    setConsent(newConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  const rejectAll = () => {
    const newConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      lastUpdated: new Date().toISOString(),
    };
    setConsent(newConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  if (!isLoaded) {
    return (
      <main>
        <Container>
          <div className="py-16 max-w-4xl mx-auto">
            <div className="animate-pulse">Loading...</div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <article className="py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Settings</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              We use cookies to ensure the functionality of our website and, with your consent, 
              to analyze usage and improve your experience. You can manage your cookie preferences below.
            </p>
          </div>

          {showSaveConfirmation && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md dark:bg-green-900 dark:border-green-600 dark:text-green-300">
              Your cookie preferences have been saved successfully.
            </div>
          )}

          <div className="space-y-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Essential Cookies</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Always Active</span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                These cookies are necessary for the website to function and cannot be switched off. 
                They are usually only set in response to actions made by you, such as setting your privacy preferences.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Analytics Cookies</h3>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={consent.analytics}
                      onChange={(e) => updateConsent('analytics', e.target.checked)}
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors ${
                      consent.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                        consent.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </div>
                </label>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously. This helps us improve our website.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Marketing Cookies</h3>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={consent.marketing}
                      onChange={(e) => updateConsent('marketing', e.target.checked)}
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors ${
                      consent.marketing ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                        consent.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </div>
                </label>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They may be set by us or third-party providers whose services we use on our pages.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={acceptAll}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Accept All Cookies
            </button>
            <button
              onClick={rejectAll}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Reject All Optional
            </button>
            <button
              onClick={saveSettings}
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors font-medium dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300"
            >
              Save Settings
            </button>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>
              You can change your cookie preferences at any time by returning to this page. 
              For more information about how we use cookies, please see our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">
                Privacy Policy
              </a>.
            </p>
            <p>
              Last updated: {new Date(consent.lastUpdated).toLocaleDateString('en-GB')}
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}