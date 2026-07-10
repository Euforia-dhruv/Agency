const MICROLINK_BASE = "https://api.microlink.io";
const SCREENSHOT_BASE = "https://v1.screenshot.11ty.dev";

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function fetchMicrolinkScreenshot(url: string): Promise<string | null> {
  try {
    const apiUrl = `${MICROLINK_BASE}/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
    const res = await fetch(apiUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data?.screenshot?.url ?? null;
  } catch {
    return null;
  }
}

export async function getWebsitePreview(url: string): Promise<string | null> {
  const og = await fetchOgImage(url);
  if (og) return og;
  const screenshot = await fetchMicrolinkScreenshot(url);
  if (screenshot) return screenshot;
  return null;
}

export function getFallbackPreviewUrl(url: string): string {
  return `${SCREENSHOT_BASE}/${encodeURIComponent(url)}/opengraph/`;
}
