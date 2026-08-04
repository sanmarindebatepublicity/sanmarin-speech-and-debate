# How to Run the San Marin Debate Website

## What you need first: Node.js

Node.js is a free program that lets you run the local web server. You only need to install it once.

1. Go to **https://nodejs.org**
2. Click the big button labelled **"LTS"** (the recommended version)
3. Download and install it like any other Mac or Windows program
4. When the installer finishes, close and reopen your Terminal

To check it installed correctly, open Terminal and type:
```
node --version
```
You should see a version number like `v20.x.x`. If you do, you're ready.

---

## One-time setup

Open **Terminal** (Mac: press Command + Space, type "Terminal", press Enter).

Navigate to the project folder. The easiest way:
1. Type `cd ` (with a space after it) in Terminal
2. Drag the `sanmarindebate` folder from Finder into the Terminal window — it fills in the path automatically
3. Press Enter

Then install the server package (only needed once):
```
npm install
```

---

## Every time you want to run the site

In Terminal, from the project folder, run:
```
npm start
```

Then open **http://localhost:3000** in your browser. This runs the full local
server (`serve.mjs`), including the `/api/*` routes the photo gallery and
awards wall use — so those features work locally just like on Vercel, as long
as the required keys are present in `.env`.

To stop the server, press **Ctrl + C** in Terminal.

---

## Why use the server instead of double-clicking the HTML file?

Opening HTML files directly (the `file://` way) blocks the photo gallery from loading because browsers restrict network requests from local files as a security measure. Running via `npm start` serves the site properly so all features — including the photo gallery — work correctly.

The member portal password and redirects work in both modes.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `command not found: npm` | Node.js isn't installed. Follow the steps above. |
| `EADDRINUSE: port 3000 already in use` | Another program is using port 3000. Change `3000` to `3001` in package.json (the `"start"` line) and try again. |
| Page loads but photos don't appear | Make sure you're at `http://localhost:3000`, not a `file://` URL. |
| Can't find the Terminal | Mac: Command + Space → type "Terminal". Windows: Windows key → type "cmd". |
