import { setTimeout as delay } from "node:timers/promises";

export async function getPage(url, { fetchImpl = fetch, timeoutMs = 10000, retryDelayMs = 1000 } = {}) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await fetchImpl(url, { signal: AbortSignal.timeout(timeoutMs), headers: { "User-Agent": "PortfolioWeeklyMonitor/1.0" } });
      // Read the body inside the timeout, not after returning an open response.
      const body = await response.text();
      if (attempt < 2 && (response.status === 429 || response.status >= 500)) {
        console.error(`Retrying ${url}: HTTP ${response.status}`);
        await delay(retryDelayMs);
        continue;
      }
      return { status: response.status, ok: response.ok, headers: response.headers, text: async () => body };
    } catch (error) {
      if (attempt === 2) throw new Error(`GET ${url} failed after ${attempt} attempts: ${error.message}`, { cause: error });
      console.error(`Retrying ${url}: ${error.message}`);
      await delay(retryDelayMs);
    }
  }
}
