/* ============================================================
   experience.js — renders the timeline from EXPERIENCES and
   wires up the category legend + context filter chips.
   ============================================================ */

const CATEGORY_LABELS = {
  work: "Work",
  club: "Club",
  volunteer: "Volunteer",
  research: "Research",
  ambassador: "Ambassador",
};

const CONTEXT_TAGS = ["Purdue", "High School", "Remote", "In Person", "Hybrid"];
const MONTH_NAMES = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

let activeCategories = new Set(Object.keys(CATEGORY_LABELS));
let activeContexts = new Set(CONTEXT_TAGS);

/* Parses "Mon YYYY" / "YYYY" / "Present" into an absolute month index (year*12+month) */
function parseMonthIndex(dateStr) {
  if (/present/i.test(dateStr)) {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 2) {
    const mIdx = MONTH_NAMES.indexOf(parts[0].slice(0, 3).toLowerCase());
    const year = parseInt(parts[parts.length - 1], 10);
    if (mIdx >= 0 && !isNaN(year)) return year * 12 + mIdx;
  }
  const year = parseInt(parts[parts.length - 1], 10);
  return isNaN(year) ? 0 : year * 12;
}

function durationMonths(exp) {
  const months = parseMonthIndex(exp.end) - parseMonthIndex(exp.start) + 1;
  return Math.max(1, months);
}

function formatDuration(months) {
  if (months < 12) return `${months} mo${months === 1 ? "" : "s"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const yearPart = `${years} yr${years === 1 ? "" : "s"}`;
  return rem === 0 ? yearPart : `${yearPart} ${rem} mo`;
}

const MAX_DURATION_MONTHS = Math.max(...EXPERIENCES.map(durationMonths));

document.addEventListener("DOMContentLoaded", () => {
  buildCategoryChips();
  buildContextChips();
  renderTimeline();
});

function buildCategoryChips() {
  const wrap = document.getElementById("categoryChips");
  if (!wrap) return;
  Object.entries(CATEGORY_LABELS).forEach(([key, label]) => {
    const chip = makeChip(label, key, true, "category");
    chip.dataset.category = key;
    chip.addEventListener("click", () => toggle(chip, activeCategories, key));
    wrap.appendChild(chip);
  });
}

function buildContextChips() {
  const wrap = document.getElementById("contextChips");
  if (!wrap) return;
  CONTEXT_TAGS.forEach((tag) => {
    const chip = makeChip(tag, tag, false, "context");
    chip.addEventListener("click", () => toggle(chip, activeContexts, tag));
    wrap.appendChild(chip);
  });
}

function makeChip(label, value, withSwatch, kind) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "chip";
  btn.setAttribute("aria-pressed", "true");
  btn.dataset.kind = kind;
  if (withSwatch) {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    btn.appendChild(swatch);
  }
  const text = document.createElement("span");
  text.textContent = label;
  btn.appendChild(text);
  return btn;
}

function toggle(chip, set, value) {
  const pressed = chip.getAttribute("aria-pressed") === "true";
  chip.setAttribute("aria-pressed", String(!pressed));
  if (pressed) {
    set.delete(value);
  } else {
    set.add(value);
  }
  renderTimeline();
}

function renderTimeline() {
  const list = document.getElementById("timeline");
  if (!list) return;
  list.innerHTML = "";

  const filtered = EXPERIENCES.filter((exp) => {
    if (!activeCategories.has(exp.category)) return false;
    return exp.context.some((c) => activeContexts.has(c));
  }).sort((a, b) => parseMonthIndex(b.start) - parseMonthIndex(a.start));

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No experiences match the selected filters.";
    list.appendChild(empty);
    return;
  }

  filtered.forEach((exp) => {
    const months = durationMonths(exp);
    const pct = Math.max(8, Math.round((months / MAX_DURATION_MONTHS) * 100));

    const item = document.createElement("div");
    item.className = "tl-item";
    item.dataset.category = exp.category;
    item.innerHTML = `
      <span class="tl-dot" style="border-color: var(--accent-${exp.category})"></span>
      <article class="exp-card">
        <div class="exp-head">
          <span class="exp-title">${exp.title}</span>
          <span class="exp-dates">${exp.start} — ${exp.end}</span>
        </div>
        <div class="exp-org">${exp.org} · ${CATEGORY_LABELS[exp.category]}</div>
        <div class="exp-duration">
          <div class="exp-duration-track">
            <div class="exp-duration-fill" data-category="${exp.category}" style="width: ${pct}%"></div>
          </div>
          <span class="exp-duration-label">${formatDuration(months)}</span>
        </div>
        <div class="exp-tags">${exp.context.map((c) => `<span class="exp-tag">${c}</span>`).join("")}</div>
        <ul>${exp.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </article>
    `;
    list.appendChild(item);
  });
}
