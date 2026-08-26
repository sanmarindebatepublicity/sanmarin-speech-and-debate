# Deploying to Vercel

Everything you need to set up before the site works in production, and the
things that will bite you if you skip them.

**Do not put any real value from this page into a file in this repository.**
Locally they live in `.env`, which is gitignored. In production they live in
Vercel's own settings. Those are the only two places.

---

## 1. Environment variables

Three values. Set all three in **Vercel → your project → Settings →
Environment Variables**, each ticked for **Production, Preview and
Development**.

| Name | What it is | Where to get it |
|---|---|---|
| `GOOGLE_DRIVE_GALLERY_FOLDER_ID` | The Drive folder the Media page reads | The folder's URL: `drive.google.com/drive/folders/`**`THIS_PART`** |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | The service-account key, as one single-quoted line of JSON | Google Cloud Console → IAM & Admin → Service Accounts → Keys |
| `NOTION_AWARDS_API_KEY` | Notion integration token for the awards database | notion.so/my-integrations → your integration → Internal Integration Secret |

The current local values are in your `.env`. Copy them from there, not from
memory.

### The one that goes wrong

`GOOGLE_SERVICE_ACCOUNT_JSON` must be the **entire key file collapsed to a
single line**, with the `\n` escape sequences inside `private_key` left
exactly as they appear. Do not convert them to real newlines and do not
reformat the JSON.

In `.env` it is wrapped in single quotes. **In Vercel, paste it without the
surrounding quotes** — Vercel stores the value literally, so quotes would
become part of the string and `JSON.parse` would fail.

---

## 2. Services that need configuring outside Vercel

Setting the variables is not enough on its own.

**Google Drive** — the service account has no access to anything by default.
Open the gallery folder in Drive, press Share, paste the service account's
`client_email` (it ends `.iam.gserviceaccount.com`), set it to **Viewer**,
and untick "Notify people". Also enable the **Google Drive API** in Google
Cloud Console → APIs & Services → Library.

**Notion** — an integration cannot see a database until it is connected to
it. Open the Team Awards database → `•••` menu → **Connections** → **Connect
to** → your integration. Without this the token is valid but every request
fails.

---

## 3. Order of operations

Environment variables only apply to deploys made **after** they are set. If
the site is already deployed, setting them changes nothing until you deploy
again — push a commit, or use **Redeploy** on the latest deployment.

1. Set all three variables.
2. Share the Drive folder and connect the Notion database.
3. Deploy.
4. Check `/api/get-photos` and `/api/awards` on the live URL. Both should
   return JSON, not an error.

---

## 4. Rotate these keys

Both credentials were pasted into a chat transcript during development.
Before the site is genuinely public, replace them:

- **Google** — Cloud Console → Service Accounts → the account → Keys →
  delete the old key, create a new JSON key. Share the folder with the new
  account if you created one.
- **Notion** — notion.so/my-integrations → your integration → rotate the
  secret.

Then update both `.env` and Vercel, and redeploy.

---

## 5. If something is wrong on the live site

The API functions deliberately return a generic message to the browser and
log the real reason server-side. **Vercel → your project → Logs** is where
the actual error is. `CONFIG:` in a log line means a variable is missing or
malformed, not that the service is down.

A working local site and a broken live one almost always means a variable
was set locally but not in Vercel, or was set in Vercel after the last
deploy.

---

## 6. What is not a secret

The portal access codes are **not** security. The gate runs in the visitor's
browser, and the member pages are reachable by anyone determined enough.
Hashing keeps the codes out of the page source, which is all it does. Rotate
codes each season, share them privately, and never put anything genuinely
sensitive behind the portal.
