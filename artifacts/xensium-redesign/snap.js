const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });

  const css = await page.evaluate(async () => {
    const chunks = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) chunks.push(rule.cssText);
      } catch (e) {
        // cross-origin sheet (e.g. Google Fonts) — fetch its text directly
        if (sheet.href) {
          try {
            const res = await fetch(sheet.href);
            chunks.push(await res.text());
          } catch (_) {}
        }
      }
    }
    return chunks.join("\n");
  });

  const body = await page.evaluate(() => document.body.innerHTML);

  const dir = path.join(__dirname);
  fs.writeFileSync(path.join(dir, "snap.css"), css);
  fs.writeFileSync(path.join(dir, "snap-body.html"), body);
  console.log("snap.css:", css.length, "bytes");
  console.log("snap-body.html:", body.length, "bytes");

  await browser.close();
})();
