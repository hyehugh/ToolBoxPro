/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Google Analytics gtag() type declarations for Consent Mode v2
declare function gtag(...args: any[]): void;

interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
}
