# Ryukuma Studios

Official storefront for Ryukuma Studios Roblox development assets.

## Current product

- **Combat System — $5.99 USD**
- Custom-made combat animations
- ModuleScript-based organization
- Configurable dash values, damage, speed, cooldowns, and more
- No customer account/sign-up flow

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stripe checkout

The storefront already includes a server-side Stripe Checkout route.

Set this environment variable in your hosting provider:

```
STRIPE_SECRET_KEY=sk_...
```

Until that key is configured, the purchase button intentionally returns a checkout-not-configured response instead of accepting money.

## Product delivery

The paid Roblox source files should **not** be committed to this public repository. The next production step is to keep the purchased files in private object storage and fulfill downloads only after a verified Stripe webhook confirms payment.

## Demo media

The homepage expects the optimized demo at:

```
public/combat-system-demo.mp4
```

<!-- deployment trigger -->
