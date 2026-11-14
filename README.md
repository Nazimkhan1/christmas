# christmas.nextgrade.in → redirect

The Christmas game moved to **https://nextgrade.in/games/christmas/** (source: `Nazimkhan1/nextgrade-site`, `src/static/games/christmas/`).
This repo only keeps the old address working: `index.html` / `404.html` redirect there with the same `?from=&score=&lang=` query, and `sw.js` clears the old offline cache on phones that installed the game.
