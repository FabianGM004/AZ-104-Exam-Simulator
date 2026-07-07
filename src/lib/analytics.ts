type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsParams
    ) => void;
  }
}

export function trackEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, params);
}