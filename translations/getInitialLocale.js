import { defaultLocale } from "./config";
// import { Locale, isLocale } from "./types";

export function getInitialLocale() {
  // preference from the previous session
  const localSetting = localStorage.getItem("locale");
  if (localSetting) {
    return localSetting;
  }

  // the language setting of the browser
  const [browserSetting] = navigator.language.split("-");
  if (browserSetting) {
    return browserSetting;
  }

  return defaultLocale;
}
