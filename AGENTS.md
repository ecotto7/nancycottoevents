# Nancy Cotto Events

This is a static HTML, CSS, and JavaScript site. Files live at the repository root. There is no build step.

## GitHub

- The repository is `ecotto7/nancycottoevents`, public, on `main`. Do not create it under BIG-IC.
- Check whether `ecotto7/nancycottoevents` already exists before creating one.
- Commit and push only when asked. Batch related changes into one commit.

## Netlify

- Team name: Gonzo Systems. Team slug: `ecotto7`. Do not create the site on any other Netlify account. Confirm the team is Gonzo Systems before creating the site.
- Import `ecotto7/nancycottoevents`. The build command is empty. The publish directory is `.`.
- `netlify.toml` stays at the repository root with `publish = "."`.
- Deploys happen only by pushing to `main`. Never run `netlify deploy`, `netlify deploy --prod`, or a deploy through the Netlify tools unless explicitly asked. Each production deploy costs 15 credits from a shared 300-per-month pool. If that pool runs out, every site on the team pauses. The GitHub import is the production deploy.
- Do not turn on Netlify DNS, change nameservers, or attach nancycottoevents.com until explicitly asked. When asked, add the domain in Netlify first, keep DNS at GoDaddy, and leave email records alone. Do not create a Netlify DNS zone.
- The address in use is https://nancycottoevents.com/. The live site canonicalizes to the apex, so the apex stays the primary domain. Add `nancycottoevents.com` once as the primary domain and `www.nancycottoevents.com` once as the alias. After saving, read the domain list and remove a duplicate www entry if Netlify added one.
- Nameservers stay `ns47.domaincontrol.com` and `ns48.domaincontrol.com`. When DNS is requested, edit the existing records at GoDaddy: replace both apex A records (`162.159.137.9` and `162.159.138.9`) with one A record `75.2.60.5`, and change the www CNAME from `csvclmss.elementor.cloud` to `nancycottoevents.netlify.app`. Do not add a second www record. If GoDaddy offers ALIAS or ANAME for the apex, that can point at `apex-loadbalancer.netlify.com` instead of the A record. Leave MX, TXT, and mail host records alone.

## Forms

- Do not use Netlify Forms. Do not add `data-netlify`, a form-name field, or a honeypot.
- Forms stay on their existing provider. The only form is the JotForm embed on the homepage, in the contact section: form id `253643826745466`, script `https://form.jotform.com/jsform/253643826745466`. Keep that embed. Do not cap its height or set `overflow: hidden` on it. The submit button has to stay visible. Do not rebuild it.
- Do not tell future edits to use Netlify Forms.
- There is no WordPress search form on the public pages. Do not add one.

## Pages and redirects

- Pages use folder URLs. `/gallery/` is `gallery/index.html`. Do not rename or move a page without a 301 in `netlify.toml`.
- Do not redirect a query string that already lands on the same path. `/?p=5`, `/?page_id=5`, and `/?s=` already land on the homepage. Redirecting them to `/` forwards the query string and the homepage loops.
- Query strings are forwarded on 301s.
- There is no posts sitemap and no blog. Do not invent pages.
- Public pages: Home, Services, Month of Coordination, Partial Planning, Full Planning, Virtual Planning, Clarifications, Gallery, Privacy Policy, and Terms and Conditions.
- Privacy Policy and Terms and Conditions use the same site header and footer as the other pages.

## Copyright

The footer legal line reads "Terms and Conditions | Privacy Policy | Nancy Cotto Events ©2026". The year in the HTML starts at the current year, and `js/site.js` updates `[data-year]` so it stays current.
