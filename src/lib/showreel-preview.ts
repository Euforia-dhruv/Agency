export type { PreviewMode } from "./showreel-projects";

const SCREENSHOT_BASE = "https://v1.screenshot.11ty.dev";

export function getFallbackPreviewUrl(url: string): string {
  return `${SCREENSHOT_BASE}/${encodeURIComponent(url)}/opengraph/`;
}
