export type { PreviewMode } from "./showreel-projects";

const SCREENSHOT_BASE = "https://v1.screenshot.11ty.dev";
const THUM_BASE = "https://image.thum.io/get/width/1200/crop/750/noanimate";

export function getFallbackPreviewUrl(url: string): string {
  return `${SCREENSHOT_BASE}/${encodeURIComponent(url)}/opengraph/`;
}

export function getScreenshotFallbacks(url: string): string[] {
  return [
    `${THUM_BASE}/${url}`,
    `${SCREENSHOT_BASE}/${encodeURIComponent(url)}/opengraph/`,
    `${SCREENSHOT_BASE}/${encodeURIComponent(url)}/twitter/`,
  ];
}
