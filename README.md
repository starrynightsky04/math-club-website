# Leland High School Math Club Website

This is the website for the Leland High School Math Club. It is built so that
future officers can keep it up to date **without knowing how to code**. You can
make almost every common change right in your web browser on GitHub, and the
live site updates on its own a few minutes later.

If you are brand new to this, do not worry. Read the sections below in order and
you will be fine.

---

## The one file you will edit most: `src/content.js`

Almost everything that changes from year to year lives in a single file:

```
src/content.js
```

Open that file and you will see clearly labeled sections with instructions in
plain English. Here is what each part controls:

| If you want to change...              | Edit this part of `src/content.js` |
| ------------------------------------- | ---------------------------------- |
| Meeting **day, time, or room**        | the `meeting` section              |
| Club **email** or **Instagram**       | the `contact` section              |
| The **advisor** (teacher)             | the `advisor` section              |
| **Officer** names, roles, or bios     | the `officers` section             |
| **Competitions** on the Events page   | the `tournaments` section          |
| **Competition results** (Past Events) | the `results` section              |

The golden rule: **only change the text between the quote marks `'  '`**. Leave
the quotes, commas, and curly braces `{ }` exactly where they are. If you keep
those in place, you cannot break the site.

> **Announcements:** the site does not have an announcements section yet. If you
> would like one added, ask whoever is helping you with the site, or open an
> issue on GitHub. It is a quick addition.

---

## How to edit the site in your browser (no software to install)

You do all of this on the GitHub website. You do not need to download anything.

1. Go to the project on GitHub (the repository page).
2. Click the **`src`** folder, then click the file you want to change. For most
   updates that is **`content.js`**.
3. Near the top right of the file, click the **pencil icon** (✏️). Hovering over
   it says "Edit this file."
4. Make your change. Remember: only edit the text inside the quote marks.
5. Scroll to the bottom and click the green **Commit changes** button. A little
   box pops up. You can leave the default message or type what you changed (for
   example, "Update meeting room"). Click **Commit changes** again to confirm.

That is it. You just saved your change. The site will rebuild and go live in a
few minutes (see "How to check the live site updated" below).

---

## Common tasks, step by step

### Change the meeting time or room

1. Open `src/content.js` and click the pencil icon.
2. Find the `meeting` section near the top.
3. Change the text inside the quotes, for example change `'Room C3'` to
   `'Room B7'`.
4. Commit the change.

This updates the meeting info **everywhere** on the site at once.

### Add a new officer

1. Open `src/content.js` and click the pencil icon.
2. Find the `officers` section. Each officer is one line that looks like this:

   ```js
   { role: 'President', name: 'Ishaan Desai', bio: 'Short description.' },
   ```

3. Click at the end of one of those lines, press Enter to make a new line, and
   paste a copy of that line.
4. Change the `role`, `name`, and `bio` text inside the quotes to the new
   officer's info. Make sure the line still ends with a comma `,`.
5. Commit the change.

To **remove** an officer, delete their whole line. To **rename** one, just
change the text after `name:`.

### Add a competition result to the "Past Events" box

1. Open `src/content.js` and click the pencil icon.
2. Find the `results` section at the bottom.
3. Add a line like this between the square brackets `[ ]`:

   ```js
   { name: 'Stanford Math Tournament 2025', detail: 'Placed 4th out of 30 teams!' },
   ```

4. Commit the change.

As soon as there is at least one result, the "coming soon" message on the Events
page is replaced by your list of results.

---

## How to check the live site updated

After you commit a change, GitHub automatically rebuilds the site. Here is how
to watch it and confirm it worked:

1. On the GitHub repository page, click the **Actions** tab at the top.
2. You will see your change listed with a spinning yellow dot, which means it is
   building. Wait for it to turn into a **green check mark** (✓). This usually
   takes one to three minutes.
3. Once it is green, open the live site URL (see below) and refresh the page. If
   you do not see your change right away, wait a moment and refresh again, or do
   a hard refresh (hold Shift and click reload).

If the dot turns into a **red X** instead of a green check, the change had a typo
that broke something (usually a missing quote or comma). The good news: the live
site does **not** update when this happens, so it stays safe on the last working
version. Go back to `content.js`, undo your edit, and try again more carefully.

---

## The live site URL

The website is published with GitHub Pages at:

```
[ your GitHub Pages URL will go here once the site is published ]
```

---

## For anyone curious about the tech (optional)

You do not need any of this to update the site, but here it is for reference:

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).
- Published automatically to GitHub Pages by the workflow in
  `.github/workflows/deploy.yml`. Every commit to the `main` branch triggers a
  fresh build and deploy.
- To run it on your own computer (only needed for bigger changes): install
  [Node.js](https://nodejs.org/), then in a terminal run `npm install` once,
  and `npm run dev` to start a local preview at `http://localhost:5173`.

### Where things live

```
src/
  content.js        <- edit this for almost everything (see above)
  Pages/            <- one file per page (Home, About, Events, ...)
  Layout/           <- the top navigation bar, footer, and newsletter box
  index.css         <- colors and overall styling
```
