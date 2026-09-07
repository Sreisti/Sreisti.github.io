# Personal Website

A static, no-build-tools personal website: business card home page,
a filterable color-coded Experience timeline, and a Projects gallery
with a popup viewer. Open `index.html` directly in a browser — no
server or install step required.

## Editing content

Everything you'll want to change lives in **`js/data.js`**:

- `SITE` — your name, role, emails, LinkedIn, and the paths to your
  resume PDF and profile photo.
- `EDUCATION` — one object per school.
- `EXPERIENCES` — one object per club/work/volunteer/research entry.
  `category` drives the color coding, `context` drives the filter
  chips (any combination of `"Purdue"`, `"High School"`, `"Remote"`,
  `"In Person"`).
- `PROJECTS` — one object per project. `images[0]` is the gallery
  thumbnail; every image in the array is browsable in the popup via
  arrows and a thumbnail strip. `longDescription` is an array of
  bullet points shown as a list in the popup. `status` is
  `"completed"` or `"in-progress"` — an in-progress project gets an
  "In Progress" badge on its card and in the popup, and shows up
  under the In Progress filter tab above the gallery. `links.github`
  / `links.demo` are optional — leave them out (or empty) to hide
  that button.
- `FOOTER_LINKS` — add/remove links shown in the footer on every page.

### Adding a new project

Open `js/data.js`, find the `PROJECTS` array, and add a new object —
easiest is to copy an existing one (say the last one) and edit it:

```js
{
  title: "Your Project Name",
  shortDescription: "One line shown on the gallery card.",
  longDescription: [
    "First bullet point — what the project is / the problem it solves.",
    "Second bullet — what you built or your role.",
    "Third bullet — the outcome, if any.",
  ],
  images: ["assets/projects/your-project.jpg"],
  tags: ["Skill", "Tool"],
  status: "completed", // or "in-progress" while you're still working on it
  links: { github: "https://github.com/you/repo" }, // demo also works; omit links you don't have
},
```

Paste it as a new `{ ... },` entry inside the `PROJECTS = [ ... ]`
array (order doesn't matter — anywhere between the square brackets
works), then drop the photo(s) into `assets/projects/` and point
`images` at them. Save, refresh the page — no other file needs to
change. The same copy-paste-edit pattern works for adding a new
entry to `EDUCATION`, `EXPERIENCES`, or `FOOTER_LINKS` too.

## Swapping in your real assets

1. Drop your resume PDF at `assets/resume.pdf` (or update `SITE.resume`
   in `data.js` to point wherever you put it).
2. Drop your headshot at `assets/profile.jpg` (or update `SITE.photo`).
   If the photo fails to load, the business card falls back to a
   silhouette icon automatically.
3. Replace the placeholder images in `assets/projects/` with real
   project photos, and update the `images` paths in `data.js`.

## Previewing locally

Just double-click `index.html` — everything (including `data.js`)
loads as a regular script tag, so it works straight from the file
system with no local server needed.

## Deployment

This site is already deployed — it's live at **https://sreisti.github.io/**,
pushed from this folder to the `github.com/Sreisti/Sreisti.github.io`
repository. Because the repo is named `<username>.github.io`, GitHub
Pages auto-publishes it at the root domain with no extra settings step.

## Publishing an update

**Editing the file alone does nothing to the live site.** GitHub Pages
only rebuilds when it sees a new push, so every change — a new resume,
a new project, a tweaked bullet point — needs to be pushed before it
shows up at sreisti.github.io. Two ways to do that:

**Option A — double-click `publish.bat`** (easiest)
It shows you what changed, asks for a one-line description, then
stages, commits, and pushes everything for you.

**Option B — run it yourself in a terminal**, from inside this folder:
```bash
git add -A
git commit -m "describe what changed"
git push
```

Either way, the update is usually live within a minute or two. If you
want to double check, run `git status` first — anything it lists as
"modified" or "untracked" hasn't been published yet.

## Structure

```
index.html          Home: business card, resume button, education, nav buttons
experience.html      Filterable, color-coded experience timeline
projects.html         Project gallery + popup viewer
css/style.css          Shared design system (grid background, type, buttons, nav, footer)
css/experience.css      Timeline + filter chip styles
css/projects.css         Gallery + modal styles
js/data.js                 ALL editable content — start here
js/main.js                  Renders the business card, education, and footer from data.js
js/experience.js              Renders the timeline + filter chips
js/projects.js                  Renders the gallery + popup modal
js/gear.js                       Home page only: wheel → gear scroll animation
js/gear-static.js                 Experience/Projects pages: simple spinning gear
assets/                             Resume, profile photo, project images
publish.bat                          Double-click to push changes live
```
