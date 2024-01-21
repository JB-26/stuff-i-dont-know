# Super Podcast Starter
_Like any other starter, only super!_

Super Podcast Starter is a template designed for you to get up and running with a website that has plenty of features out of the box to help you promote your podcast!

The current version is __v0.0.1__

This blog is built using [NextJS](https://nextjs.org/).

And also with the following dependencies:
- @vercel/analytics
- date-fns
- gray-matter
- next
- react
- react-dom
- remark
- remark-html
- rss
- playwright (for automated tests)

Click [here](https://super-podcast-starter.vercel.app/) to see a demo of this template.

# Getting started...

To get started with this (after cloning the repo), run the following to install all the packages and dependencies:
`npm install`

To run this application locally:
`npm run dev`

# What's included in Super Podcast Starter?

This repo will allow you to build your own website/blog with the following pages/features:
- Homepage
    - Pagination included (and customisable)
    - Links to episodes
    - Ordered by newest episode first
- Responsive design
- Customisable 404 page
- ESLint

## If deploying to Vercel...
- Analytics included (this will only work on if deploying to Vercel)

If you don't want to use Analytics, remove the `Analytics` tag located in `pages/_app.js`

# Configuration
## Index
You'll need to open the `index.js` file to begin making changes, including:
- Adding your show name
- Changing the logo
- Subtitle
- Introduction text

The photo to be changed is located at `../public/images/podcastLogo.png`

## Episodes
All episodes are stored in the `posts` directory, which contains __markdown__ files.

Simply add a new markdown file to the `posts` directory and the new episode will appear on the homepage! Make sure that your file ends with the `.md` file extension (posts that end with the `.markdown` file extension won't work)

Each blog post must have the following configuration:

```
---
title: "A post"
date: "2023-08-04" #YYYY-MM-DD
tags: ["Test"]
episode: '<iframe></iframe>'
---
```

If your chosen podcast host offers an iframe that you can embed on webpages, paste the iframe into the episode metadata. Make sure the iframe is in single quotation marks.

# Footer
You'll need to open the `components/footer.js` to begin making changes, including:
- Adding new links
- Updating existing links

# Favicon
You'll notice that the favicon is a blue square (also used in the header). Feel free to change this.
You can use something like [Favicon Generator](https://favicon.io/favicon-generator/) to create your own.

You'll need to update the following files under the `public` directory:
- public/android-chrome-192x192.png
- public/android-chrome-512x512.png
- public/apple-touch-icon.png
- public/favicon-16x16.png
- public/favicon-32x32.png
- public/favicon.ico

# Site title
To update the site title, you'll need to open the `components/layout.js` file to begin making changes.

To update the title, update the constant called `siteTitle`.