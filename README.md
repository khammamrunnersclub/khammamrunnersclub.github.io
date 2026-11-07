# Khammam Runners Club — Functional V7

This is a fully coded static site inspired by the approved V6 visual. Unlike V6, the heading, navigation, event cards, gallery and sections are real HTML elements. It is not a pixel-perfect reproduction of the screenshot; the hero photo is a separate image asset.

## Edit the content yourself
1. Open this folder in Visual Studio Code.
2. Edit **content.js** to update introduction, about, verified statistics, confirmed events, achievements, gallery photos and contact email.
3. Put your own images into `assets/` and reference their paths in `content.js`.
4. Save, then double-click `index.html` to preview. No development server required.
5. Re-upload the entire folder to Netlify to publish changes. Keep access to your Netlify account private and enable MFA.

## Publish for free
1. Visit https://app.netlify.com/drop and sign in to your own Netlify account.
2. Drag the **krc-functional-v7** folder (not the ZIP) into Netlify Drop.
3. Open the generated HTTPS link and check desktop and mobile views.
4. For later changes, redeploy the updated folder from your Netlify account.

## Security & limitations
- This static site has **no public editing UI**, no user login and no backend. Visitors can read the publicly delivered `content.js`, but cannot change the published site.
- Keep your Netlify account secured with MFA; don't share deployment credentials.
- **Do not store passwords, personal member details, API secrets or private information in `content.js`.** All site files are public once hosted.
- Membership registration and owner-only CMS are not implemented. Those require authenticated backend services and database authorization rules.
- The homepage background is a separate local asset and not a pixel-perfect recreation of the approved image.
- Dates and statistics from the original design mockup were not copied because they were not verified.
