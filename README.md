# Super Podcast Starter
_Like any other starter, only super!_

Super Podcast Starter is a template designed for you to get up and running with a website that has plenty of features out of the box to help you promote your podcast!

The current version is __v0.0.1__

This application is built using [NextJS](https://nextjs.org/).

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
    - Allows for iframe podcast players to be embedded onto the page
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
- 'Listen On' badges

The photo to be changed is located at `../public/images/podcastLogo.png`

### 'Listen On' badges
By default, three badges will be displayed:
- Apple Podcasts
- Spotify
- YouTube

In the `public/podcast-logos` directory, is where the badges are located. There is an additional badge for Pocket Casts.

To update the links (and to add or remove badges), open `components/listenOn.js`

Each badge will look something like this:

```jsx
<div className={styles.listenItem}>
        <Link
          href={"https://www.apple.com/uk/apple-podcasts/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={ApplePodcasts}
            alt={"Listen on Apple Podcasts"}
            className={styles.badge}
          />
        </Link>
      </div>
```
Update the `href` argument with the URL to your show, and update the source for the image if you wish.

To add a new badge, copy the above as a template and make any neccessary chages.

Don't forget, you will need to import the badge like this:
```jsx
import ApplePodcasts from "../public/podcast-logos/Apple_Podcasts_Listen_Badge.svg";`
```
Any additional badges should go in the `public/podcast-logos` directory.

## Colours
You'll want to change the colour scheme on the starter to match your show.

To do this, open the `styles/global.css` file.

Look for the following:

```css
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    /*ensures the page to be at least as tall as 100% of the viewport height */
    min-height: 100vh;
    /*prevents the page from being too narrow to be readable*/
    min-width: 300px;
    /*prevents the page from scrolling horizontally while preserving the usual vertical scroll */
    overflow-x: hidden;
    background-color: white;
}

a {
    color: #0070f3;
    text-decoration: none;
}

h1::after {
    content: "";
    height: .1em;
    background: #0070f3;
    width: 100%;
    margin-left: -100%;
    position: absolute;
    bottom: 0;
}

i {
    color: black;
}


i:hover {
    color: #0070f3;
}
```

Change the `background-color` and `color` properties to the colour you want



## Episodes
All episodes are stored in the `posts` directory, which contains __markdown__ files.

Simply add a new markdown file to the `posts` directory and the new episode will appear on the homepage! Make sure that your file ends with the `.md` file extension (posts that end with the `.markdown` file extension won't work)

Each episode post must have the following configuration:

```
---
title: "A post"
date: "2023-08-04" #YYYY-MM-DD
episode: '<iframe></iframe>'
---
```

If your chosen podcast host offers an iframe that you can embed on webpages, paste the iframe into the episode metadata. Make sure the iframe is in single quotation marks.

Below the metadata, you can add your show notes for that specific episode.

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