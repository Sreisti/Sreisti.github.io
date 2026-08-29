/* ============================================================
   main.js — shared rendering used by all three pages:
   business card, resume button, education timeline, footer
   links, and the SVG icon builders used by gear.js / gear-static.js
   ============================================================ */

const SiteIcons = (function () {
  function polarPoint(cx, cy, r, angleRad) {
    return [cx + r * Math.cos(angleRad), cy + r * Math.sin(angleRad)];
  }

  /* Rough, hand-hewn stone wheel silhouette */
  function wheelSVG() {
    const cx = 50,
      cy = 50,
      baseR = 42,
      steps = 28;
    const outer = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const r = baseR + 3.2 * Math.sin(3 * a + 0.6) + 1.6 * Math.sin(7 * a + 2.1);
      outer.push(polarPoint(cx, cy, r, a).map((n) => n.toFixed(1)).join(","));
    }
    const hub = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const r = 10 + 1.4 * Math.sin(4 * a + 1);
      hub.push(polarPoint(cx, cy, r, a).map((n) => n.toFixed(1)).join(","));
    }
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${outer.join(" ")}" fill="var(--ink)" stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="${hub.join(" ")}" fill="var(--paper)"/>
      <path d="M30,34 L38,44" stroke="var(--paper)" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
      <path d="M66,30 L60,40" stroke="var(--paper)" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
      <path d="M62,66 L54,58" stroke="var(--paper)" stroke-width="1.2" stroke-linecap="round" opacity="0.45"/>
    </svg>`;
  }

  /* Modern gear silhouette */
  function gearSVG() {
    const cx = 50,
      cy = 50,
      outerR = 42,
      rootR = 33,
      teeth = 10;
    const step = (Math.PI * 2) / teeth;
    const toothTop = 0.34; // fraction of step used for the flat tooth top
    const pts = [];
    for (let i = 0; i < teeth; i++) {
      const a0 = i * step;
      const riseA = a0 + step * (0.5 - toothTop / 2 - 0.18);
      const topStartA = a0 + step * (0.5 - toothTop / 2);
      const topEndA = a0 + step * (0.5 + toothTop / 2);
      const fallA = a0 + step * (0.5 + toothTop / 2 + 0.18);
      pts.push(polarPoint(cx, cy, rootR, a0));
      pts.push(polarPoint(cx, cy, rootR, riseA));
      pts.push(polarPoint(cx, cy, outerR, topStartA));
      pts.push(polarPoint(cx, cy, outerR, topEndA));
      pts.push(polarPoint(cx, cy, rootR, fallA));
    }
    const pointsAttr = pts.map((p) => p.map((n) => n.toFixed(1)).join(",")).join(" ");
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${pointsAttr}" fill="var(--ink)"/>
      <circle cx="50" cy="50" r="13" fill="var(--paper)"/>
      <circle cx="50" cy="50" r="13" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="50" cy="50" r="4.5" fill="var(--ink)"/>
    </svg>`;
  }

  function personSVG() {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="5">
      <circle cx="50" cy="36" r="18"/>
      <path d="M16,90 C16,64 32,54 50,54 C68,54 84,64 84,90" stroke-linecap="round"/>
    </svg>`;
  }

  return { wheelSVG, gearSVG, personSVG };
})();

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessCard();
  renderResume();
  renderEducation();
  renderFooterLinks();
  renderNavBrand();
});

function renderNavBrand() {
  const brand = document.querySelectorAll("[data-site-name]");
  brand.forEach((el) => (el.textContent = SITE.name));
}

function renderBusinessCard() {
  const nameEl = document.getElementById("cardName");
  if (!nameEl) return;

  nameEl.textContent = SITE.name;
  const roleEl = document.getElementById("cardRole");
  if (roleEl) {
    const parts = [];
    if (SITE.major) parts.push(SITE.major + " Major");
    if (SITE.minor) parts.push(SITE.minor + " Minor");
    roleEl.textContent = parts.join(" · ");
  }

  const contacts = document.getElementById("cardContacts");
  if (contacts) {
    contacts.innerHTML = "";
    const items = [
      { tag: "Personal", label: SITE.personalEmail, href: "mailto:" + SITE.personalEmail },
      { tag: "Purdue", label: SITE.schoolEmail, href: "mailto:" + SITE.schoolEmail },
      { tag: "LinkedIn", label: "View profile ↗", href: SITE.linkedin },
    ];
    items.forEach((item) => {
      if (!item.label) return;
      const li = document.createElement("li");
      li.className = "contact-row";

      const tag = document.createElement("span");
      tag.className = "contact-label";
      tag.textContent = item.tag;
      li.appendChild(tag);

      const leader = document.createElement("span");
      leader.className = "contact-leader";
      li.appendChild(leader);

      const a = document.createElement("a");
      a.className = "contact-value";
      a.href = item.href;
      a.textContent = item.label;
      if (item.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      li.appendChild(a);
      contacts.appendChild(li);
    });
  }

  const photoBox = document.getElementById("cardPhoto");
  if (photoBox) {
    const img = new Image();
    img.alt = "Photo of " + SITE.name;
    img.onload = () => {
      photoBox.innerHTML = "";
      photoBox.appendChild(img);
    };
    img.onerror = () => {
      photoBox.innerHTML = SiteIcons.personSVG();
    };
    img.src = SITE.photo;
  }
}

function renderResume() {
  const btn = document.getElementById("resumeBtn");
  if (!btn) return;
  btn.href = SITE.resume;
}

function renderEducation() {
  const list = document.getElementById("educationList");
  if (!list) return;
  list.innerHTML = "";
  EDUCATION.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "edu-item";
    item.innerHTML = `
      <div class="edu-head">
        <span>${edu.school}</span>
        <span class="edu-dates">${edu.start} — ${edu.end}</span>
      </div>
      <div class="edu-degree">${edu.degree}${edu.location ? " · " + edu.location : ""}</div>
      <ul>${(edu.bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
    `;
    list.appendChild(item);
  });
}

function renderFooterLinks() {
  const wrap = document.getElementById("footerLinks");
  if (!wrap) return;
  wrap.innerHTML = "";
  FOOTER_LINKS.forEach((link) => {
    if (!link.url) return;
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    if (link.url.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    wrap.appendChild(a);
  });
}
