# Abdul Rauf | Portfolio

Personal portfolio of **Abdul Rauf**, a full stack web developer, built with Next.js and TypeScript to showcase projects, technical skills, experience, and case studies.

**Live:** [abdulrauf.dev](https://abdulrauf.dev/)

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* next-themes
* Resend

## Highlights

* Responsive single-page portfolio
* Dedicated project case studies
* Light and dark mode
* Data-driven content
* SEO and Open Graph support
* Working contact form
* Accessible animations with reduced-motion support

## Setup and deployment

Use Node.js 24. Run `npm ci`, configure `RESEND_API_KEY` in an untracked `.env.local`, and run `npm run dev`. The contact form requires a Resend account with the `abdulrauf.dev` sender domain verified. Never commit credentials; configure the key separately in the existing Vercel project's environment settings.

Before deploying, run `npm run lint` and `npm run build`. `npm run start` serves the production build locally. Vercel uses the existing Next.js preset, repository root, default output directory, and `npm run build`; do not switch to static export because `/api/contact` needs a server runtime. Production is [abdulrauf.dev](https://abdulrauf.dev/). Monitoring does not deploy the website or submit contact forms.

## Weekly monitoring

Open [Actions → Weekly production monitoring](https://github.com/mrrauf99/Portfolio/actions/workflows/weekly-monitor.yml). Runs are scheduled every Tuesday at 07:17 UTC (12:17 Pakistan time), with **Run workflow** available for manual checks. GitHub schedules can be delayed and public-repository schedules can be disabled after inactivity; check the Actions page periodically.

Four independent jobs check production availability/404 handling, sitemap coverage, metadata/responsive images, and JSON-LD/language semantics. Each job has bounded request retries/timeouts and an eight-minute job limit. Read the job summary and logs for PASS/FAIL; download its JSON artifact for details (retained 35 days). Failures in one job do not cancel the others. No Google, Vercel or application secrets are required; the workflow has read-only repository access and installs no npm dependencies.

Run all checks locally with `npm run check:seo`; optionally pass a base URL and report path: `npm run check:seo -- http://localhost:3000 monitoring-report.json`. Run transport failure tests with `node --test scripts/monitor-http.test.mjs`. The workflow file must remain on the default branch for scheduled/manual runs. [The first cloud run passed all four jobs](https://github.com/mrrauf99/Portfolio/actions/runs/42779887144). The Windows task, four dated local triggers and PowerShell wrapper were retired only after that confirmation. Future cron executions still need to be checked in Actions; a manual pass does not prove a future scheduled run has occurred.

For real-world SEO, use the verified [Google Search Console](https://search.google.com/search-console) property for `abdulrauf.dev`: review sitemap processing, Page indexing, URL Inspection and Performance (clicks, impressions and queries). Compare complete 28-day periods and distinguish branded queries. Check mobile/desktop Core Web Vitals and [PageSpeed Insights](https://pagespeed.web.dev/) for p75 LCP, INP and CLS when field data is available. “Insufficient data” is not a pass or failure; Lighthouse lab results do not replace field data. Public monitoring cannot authenticate to Search Console or verify Google's selected canonical/index status.

## Security and maintenance

Keep `.env*`, `.vercel/`, audit evidence and monitoring reports out of commits/deployment uploads. Keep the GitHub Actions token read-only, pin third-party actions to reviewed commit SHAs, and review dependency/action updates before changing them. Retain screenshot provenance in `public/projects/README.md`; historical local audit reports are excluded evidence, not current setup instructions. Tooling/agent instructions are kept separately and are not website documentation.

After changing public routes or project data, rerun `npm run check:seo` and inspect the workflow results. The monitor does not call the contact API, write to Vercel, request indexing or claim ranking gains. GitHub failure notifications follow your account's Actions notification preferences.

## Developer

**Abdul Rauf**
Full Stack Web Developer

* GitHub: [github.com/mrrauf99](https://github.com/mrrauf99)
* LinkedIn: [linkedin.com/in/abdulrauf-dev](https://linkedin.com/in/abdulrauf-dev/)
* Email: [itxrauf99@gmail.com](mailto:itxrauf99@gmail.com)
