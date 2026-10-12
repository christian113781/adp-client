# ADP Toiture SA Tailwind Recreation

Static HTML/Tailwind recreation based on the supplied reference and image assets.

## Structure
- `index.html` — page markup + Tailwind CDN configuration
- `assets/images/` — supplied/recreated website images
- `assets/images/partners/` — partner logos
- `assets/css/custom.css` — small custom styles for exact visual matching
- `assets/js/main.js` — mobile menu + Lucide icon initialization

## Run
Open `index.html` directly, or serve the folder locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

Tailwind, Google Fonts, and Lucide icons are loaded by CDN, so internet access is needed for those resources.
