# Playwright Review

End-to-end tests (Playwright, Chromium / Firefox / WebKit) for a small demo todo app in `app/`.

## Run locally

```bash
npm ci
npx playwright install --with-deps
npm test               # starts the app on :3000 and runs all browsers
npx playwright show-report
```

Other scripts: `npm run lint`, `npm run format`, `npm run format:check`.

## CI

[`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) runs on pull requests to `main`, pushes to `main`, nightly, and manually:

1. **lint** – ESLint and Prettier.
2. **test** – one job per browser; each uploads a blob report.
3. **merge-report** – merges them into one HTML report (with screenshots), uploads it as the `playwright-report` artifact, and on `main` publishes it to GitHub Pages:
   https://paupau-1712.github.io/Playwright_Review/

## Contributing

Work on a branch and open a PR; `main` is protected and requires the lint and test checks to pass.
