# Santa ke Gift Pakdo — christmas.nextgrade.in

A small Christmas catch-the-gifts game (PWA) in Hinglish, Hindi, English and Bengali (menu at the top; `?lang=hinglish|hi|en|bn`; first visit follows the phone language). Part of nextgrade.in; listed on https://nextgrade.in/apps/.

- One `index.html` (HTML + CSS + canvas JS), `sw.js` (offline), `manifest.json`, `icons/`
- No build step, no server, no data collected: the name only travels in the share link (`?from=<name>&score=<n>`), best score is kept in `localStorage` on the device
- Hosting: GitHub Pages from `main` root, custom domain in `CNAME`; Cloudflare DNS `christmas` CNAME → `nazimkhan1.github.io` (DNS only)
- After changing game files, bump `CACHE` in `sw.js` so phones pick up the new version
