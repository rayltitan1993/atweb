# Task: Add a Cookie Settings Page to Our Website

## Goal
Create a new page named `cookie-settings` that allows users to manage their cookie preferences in compliance with GDPR and German legal requirements.

## Requirements

1. **Page Location & Access**
    - The page should be accessible via the website footer and/or the privacy policy page.
    - The route should be `/cookie-settings` or similar.

2. **User Interface**
    - Clear headline, e.g., “Cookie Settings”.
    - Explain briefly why cookies are used (e.g., for functionality, analytics, or marketing).
    - Show a list of cookie categories:
        - Essential/Strictly necessary cookies (always enabled, non-optional)
        - Analytics cookies (optional, user can enable/disable)
        - Marketing cookies (optional, user can enable/disable)
    - For each category, a brief description and a toggle switch for user consent.

3. **Consent Management**
    - Users must be able to save their choices.
    - Choices should be stored (e.g., in local storage or a cookie).
    - If a user changes their settings, update the consent accordingly.

4. **Legal Compliance**
    - Add a short text stating that users can change cookie preferences at any time.
    - Link to the privacy policy.
    - Add the date of last update.

5. **Technical Implementation (for developers)**
    - Use the technology stack of our site (e.g., React/Next.js, Tailwind CSS, etc.).
    - Ensure accessibility (WCAG standards).
    - The page should not set analytics/marketing cookies before the user consents.

## Optional
- Add a button to “Accept All” and “Reject All” cookies.
- Show the current consent status.
- Support English and German (i18n).

---

**Please provide a clean, well-structured code implementation or wireframe for review.**
