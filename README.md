# Computer Studies CBT Website

A browser-based version of the Computer Studies CBT project.

## Features
- Randomly selects 20 questions from the available question bank for each attempt.
- Multiple-choice answer selection and previous/next navigation.
- Score and percentage shown after submission.
- Answer review and retry support.
- Responsive layout for desktop and mobile.

## Run locally
Open `index.html` in a browser. No Python installation or server is required.

## Publish with GitHub Pages
1. Create a GitHub repository for the website, for example `computer-studies-cbt`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will be shown in the Pages settings.

## Question bank note
The uploaded `CBT.PY` file contains 25 questions. This website uses those existing questions and selects up to 20 per attempt. Add more entries to the `QUESTIONS` array in `script.js` to expand the bank.
