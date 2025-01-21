import fa from '../../public/locales/fa/translation.json';
import en from '../../public/locales/en/translation.json';

// Make supported languages explicit and type-safe
export const SUPPORTED_LANGUAGES = ['fa', 'en'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

const defaultLang: SupportedLang = 'fa';

export type TranslationValues = typeof fa;

const translations: Record<SupportedLang, TranslationValues> = { en, fa };

// RTL languages list
const RTL_LANGUAGES = [
  'ar',
  'shu',
  'sqr',
  'ssh',
  'xaa',
  'yhd',
  'yud',
  'aao',
  'abh',
  'abv',
  'acm',
  'acq',
  'acw',
  'acx',
  'acy',
  'adf',
  'ads',
  'aeb',
  'aec',
  'afb',
  'ajp',
  'apc',
  'apd',
  'arb',
  'arq',
  'ars',
  'ary',
  'arz',
  'auz',
  'avl',
  'ayh',
  'ayl',
  'ayn',
  'ayp',
  'bbz',
  'pga',
  'he',
  'iw',
  'ps',
  'pbt',
  'pbu',
  'pst',
  'prp',
  'prd',
  'ug',
  'ur',
  'ydd',
  'yds',
  'yih',
  'ji',
  'yi',
  'hbo',
  'men',
  'xmn',
  'fa',
  'jpr',
  'peo',
  'pes',
  'prs',
  'dv',
  'sam',
  'ckb',
] as const;

export type RtlLang = (typeof RTL_LANGUAGES)[number];

class I18n {
  private currentLang: SupportedLang = defaultLang;

  constructor(lang?: string) {
    if (lang && this.isValidLanguage(lang)) {
      this.currentLang = lang;
    }
  }

  // Change current language
  setLang(lang: string | undefined) {
    if (!lang) {
      this.currentLang = defaultLang;
      return;
    }

    if (this.isValidLanguage(lang)) {
      this.currentLang = lang;
    } else {
      console.warn(`Invalid language: ${lang}`);
    }
  }

  // Get current language
  getLang(): SupportedLang {
    return this.currentLang;
  }

  isValidLanguage(lang: string): lang is SupportedLang {
    return SUPPORTED_LANGUAGES.includes(lang as SupportedLang);
  }

  // Simplified to always use current language
  t(): TranslationValues {
    return translations[this.currentLang];
  }

  // Simplified to always use current language
  dir(): 'ltr' | 'rtl' {
    return this.isRTL(this.currentLang) ? 'rtl' : 'ltr';
  }

  // Check if language is RTL
  private isRTL(lang: string): boolean {
    return RTL_LANGUAGES.includes(lang as RtlLang);
  }

  // Get user's preferred language
  static getPreferredLanguage(): SupportedLang {
    if (typeof window === 'undefined') return defaultLang;

    const browserLang = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES.includes(browserLang as SupportedLang) ? (browserLang as SupportedLang) : defaultLang;
  }
}

// Create and export default instance
const i18n = new I18n(I18n.getPreferredLanguage());
export default i18n;
