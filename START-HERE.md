# Tarot Learning Guild — step-by-step setup

The site is complete as a **free learning guide and unlimited five-card written practice tool**. When you connect the services below, visitors get **three free personalized AI readings in their browser**, then pay **$2 for each additional AI reading**. The free and paid AI readings each include one question, five main cards, and three clarifiers for *each* main card (20 distinct cards total). Cards and AI answers are saved for 30 days. There is no visitor account system; see the limits in section 5.

## 1. Look at it tonight

1. Unzip `Tarot-Learning-Guild.zip` on a computer.
2. Double-click `Fifth-Card-Preview.html` to open the working offline preview. Try **Love**, **Job / Career**, **Money**, and **Other**. Draw a practice spread and click **Clarify · 3 cards** under any card.
3. Open **Learn this card** on a main or clarifier card to see its meaning. Visit **Learn tarot** and **Card meanings** beneath the reading.
4. This preview does not take payments or call AI. It shows written practice examples even when a question is typed. There are no API keys to enter tonight.

## 2. Publish the free version on GitHub Pages tomorrow

You already have GitHub Pages sites, so you can use the same approach. Open the ZIP, then open the `public` folder. Upload the **contents of `public`**, including `index.html`, `style.css`, `app.mjs`, `deck.mjs`, `card-back.webp`, and `.nojekyll`, to the root of a **new public GitHub repository**. If your computer hides `.nojekyll`, the site still works; GitHub Pages may process the files through Jekyll, so add a blank `.nojekyll` file at the repository root when you can. The `_headers` file is for Cloudflare; GitHub Pages ignores it.

In the repository, go to **Settings → Pages → Build and deployment → Deploy from a branch**. Choose `main` and `/ (root)`, then save. Open the GitHub Pages URL once it reports the site is live. Check the free practice draw and clarifier buttons on your phone. You can share the free guide at this point. GitHub Pages cannot securely run the included purchase and AI code by itself.

**Simple alternative:** You do not need GitHub Pages if you use the paid hosting path below. The Cloudflare deployment serves the free guide and paid feature at one address. That is the cleaner long-term arrangement.

## 3. Choose a domain

You can buy a domain tomorrow or wait until the demo feels right. The displayed brand is **Tarot Learning Guild**; the internal project name **The Fifth Card** can be changed later. Check your preferred name's availability before purchasing it.

For the full paid version, use a domain you can connect to Cloudflare Workers. Add the domain to your Cloudflare account and follow Cloudflare's displayed nameserver instructions at the registrar. After deployment, attach the domain to the Worker under **Workers & Pages → the-fifth-card → Settings → Domains & Routes → Add → Custom Domain**. Use the exact hostname you want, such as `example.com` or `www.example.com`. Set `SITE_URL` in `wrangler.jsonc` to that exact `https://` address and redeploy. [Cloudflare's custom-domain guide](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) describes current domain and DNS requirements. The worker's temporary `workers.dev` address can be used first; set `SITE_URL` to that exact address for testing and update it when your domain is attached.

## 4. Set up the paid version

You'll need a computer with [Node.js](https://nodejs.org/) and accounts for [Cloudflare](https://dash.cloudflare.com/), [Stripe](https://dashboard.stripe.com/), and the [OpenAI API](https://platform.openai.com/). You also need a Cloudflare **Turnstile widget** for the free AI readings. A ChatGPT subscription does not provide an API key or cover API usage. Put your support email in the site configuration before enabling AI readings.

1. Open a terminal in the unzipped project folder (the one containing `package.json`). Run `npm install`.
2. Run `npx wrangler login` and complete Cloudflare sign-in in your browser.
3. Run `npx wrangler d1 create fifth-card-readings`. Copy the **database ID** printed by Cloudflare. Open `wrangler.jsonc` and replace `REPLACE-WITH-D1-ID` with that ID. Keep the `DB` binding name as it is.
4. Run `npx wrangler d1 execute fifth-card-readings --remote --file=./schema.sql`. This creates the tables for the 30-day reading record and basic checkout rate limit. The `--remote` flag matters: it updates the hosted database.
5. In `wrangler.jsonc`, replace `SITE_URL` with the address you'll use for the first test, e.g. `https://the-fifth-card.YOUR-SUBDOMAIN.workers.dev`. Replace `SUPPORT_EMAIL` with an email address where purchasers can reach you. Leave `PAYMENTS_ENABLED` as `false` for now.
6. Run `npm run deploy`. Wrangler prints the live Worker URL. If it differs from step 5, change `SITE_URL` to the **exact** live URL and deploy again.
7. Create an OpenAI API key in the API dashboard. Run `npx wrangler secret put OPENAI_API_KEY` and paste the key into that private prompt. The configuration uses `gpt-4.1-mini`, which supports structured outputs. Set a usage or spending limit in your API account before opening free readings, and monitor usage. Do not publish this key in the repository.
8. In the Cloudflare dashboard, open **Turnstile → Add widget**. Register your testing hostname, then your final domain when ready. Copy the **site key** (public) into `TURNSTILE_SITE_KEY` in `wrangler.jsonc`. Copy the **secret key** (private) using `npx wrangler secret put TURNSTILE_SECRET_KEY`. Also run `npx wrangler secret put QUOTA_SECRET` and enter a long random value you keep private. These two secrets must never appear in your GitHub files. A Turnstile test widget can be used in a test environment; its verification response must match the configured `SITE_URL` hostname. [Turnstile setup](https://developers.cloudflare.com/turnstile/get-started/) and [server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
9. Set `FREE_AI_ENABLED` to `true` in `wrangler.jsonc`; leave `PAYMENTS_ENABLED` as `false`. Run `npm run deploy`. Visit the site in a browser with storage enabled. Test a real free AI reading, then all three free readings. Check that the fourth free request is refused and the first three still reopen without using another free credit. Verify the requests in your OpenAI API usage. The Turnstile widget must appear on the live page. A local offline HTML file cannot complete this check.
10. In Stripe, get a **test mode secret key** beginning `sk_test_`. Run `npx wrangler secret put STRIPE_SECRET_KEY` and enter it into the private prompt. Change `PAYMENTS_ENABLED` to `true`, and run `npm run deploy`. In the same browser where you used the three free AI readings, the **$2 test purchase** button should appear. Use a Stripe test card from [Stripe's testing guide](https://docs.stripe.com/testing); do not use a real card in test mode. Test the return to the site, the five-card response, all five clarifier groups, and **Save reading as text**.
11. After the test works, replace the test secret with your **live Stripe secret key** using `npx wrangler secret put STRIPE_SECRET_KEY`. Redeploy and confirm the button no longer says **test**. In a browser that has used its three free AI readings, make a real $2 purchase yourself and verify the full reading. Manage refunds and payment issues in your Stripe dashboard.

Stripe Checkout handles card entry. The server verifies a free human-check token and counts three uses per browser key. Paid readings require a confirmed $2 Checkout Session before AI runs. Neither Stripe nor OpenAI secrets appear in browser files. The stored random cards and generated answer are reused when someone returns; refreshing does not take another free credit or create another charge. The browser stores an access key, so visitors should return in the same browser. After repeated delivery failures, the support email is shown for assistance or a paid-reading refund. Provider connections have **not** been tested against your real accounts. [Stripe Checkout documentation](https://docs.stripe.com/api/checkout/sessions/create) and [OpenAI structured-output documentation](https://developers.openai.com/api/docs/guides/structured-outputs) explain the connected services.

## 5. How the three-free limit works

The site assigns a random ID in browser storage and keeps a lifetime count of **three free AI claims for that browser** on the server. Turnstile checks each free claim; an additional daily limit on a hashed network identifier limits mass claims. Clearing browser storage or using a different browser can reset an individual's count. Some people on shared Wi-Fi can reach the network limit together. It is not accurate to promise **exactly three per person** without sign-in or identity verification. This version shows “three in this browser” to visitors. If misuse becomes costly, consider a proper account system with verified email before expanding free access. Monitor your API usage and keep `FREE_AI_ENABLED` set to `false` whenever you need to pause free AI without affecting unlimited written practice or paid readings.

## 6. Edit words, price, and lessons

- The visible page, learning lessons, titles, and privacy text live in `index.html`.
- The 78 original short meanings live in `deck.mjs`.
- Colors and layout live in `style.css`.
- The $2 amount is `200` **cents** in `worker.mjs`, in the checkout `line_items` parameter. If you change it, change the payment verification comparison (`amount_total!==200`) and the displayed price everywhere as well.
- Run `npm run build` after changes. The `public` folder is the free site's publishable folder. `npm run deploy` builds it and redeploys the whole paid site.

If you rename the brand, update `index.html`, the Stripe product name in `worker.mjs`, the `name` field in `wrangler.jsonc`, and any related URLs. Changing a deployed Worker name can create a new address, so check `SITE_URL` again.

## 7. Consider search traffic and AdSense later

The free guide has an original learning lesson, a worked example, and an upright/reversed meaning for all 78 cards. The build writes those meanings into the HTML itself so search engines can read them without clicking. To compare names, go to [Google Trends Explore](https://trends.google.com/trends/explore), set the same country, date range, and search type, and compare phrases such as **learn tarot**, **how to read tarot cards**, **tarot card meanings**, and **tarot learning guide**. Trends displays *relative interest*, not the total number of searches; do not treat a single score as a traffic forecast. [Google's explanation](https://support.google.com/trends/answer/4365533?hl=en) covers normalization.

Once the free guide is public and you are satisfied with its content, you can apply through [Google AdSense](https://www.google.com/adsense/). Google expects original, relevant content and a good visitor experience; approval and earnings are not guaranteed. [Google's site-readiness guidance](https://support.google.com/adsense/answer/7299563?hl=en). If approved, follow the account's current instructions for placing ads on the **learning content**, away from draw, clarify, and payment controls. Update the site's privacy disclosure for actual advertising and any applicable consent requirements **before enabling ads**. There is no ad or analytics code in this package.

## 8. Quick checks before sharing or charging

- Confirm the five main cards are distinct and each **Clarify** button reveals a different group of three additional cards.
- Test a phone-sized screen and a desktop screen.
- Confirm the support email and privacy text are accurate for your actual setup.
- Use the three free AI readings and reload each return URL in the same browser; the same readings should reappear without using another credit.
- In Stripe test mode, buy once after the third free reading and reload its return URL; the same reading should reappear without a second charge.
- Verify the test purchase appears in Stripe and the model request appears in your OpenAI API usage before switching to live payments.
- Never publish API keys or `.dev.vars` on GitHub. The ZIP does not contain account keys.

The files were checked with `node --test tests/worker.test.mjs` using simulated Stripe, OpenAI, and Turnstile responses. The tests cover unique draws, blocked unpaid access, authentication, three free claims, one-time AI generation, refund rejection, retries, and concurrent requests. Real provider integration requires your accounts and a test purchase.
