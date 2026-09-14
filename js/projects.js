/* ============================================================
   projects.js — renders the gallery from PROJECTS and drives the
   popup modal (two-column image/description, Prev/Next paging).
   ============================================================ */

let currentIndex = 0;
let currentImageIndex = 0;
let lastFocusedEl = null;
let activeStatus = "all";

document.addEventListener("DOMContentLoaded", () => {
  renderStatusTabs();
  renderGallery();
  buildModal();
});

function renderStatusTabs() {
  const wrap = document.getElementById("statusTabs");
  if (!wrap) return;

  const counts = {
    all: PROJECTS.length,
    completed: PROJECTS.filter((p) => p.status !== "in-progress").length,
    "in-progress": PROJECTS.filter((p) => p.status === "in-progress").length,
  };
  const tabs = [
    { key: "all", label: "All" },
    { key: "in-progress", label: "In Progress" },
    { key: "completed", label: "Completed" },
  ];

  wrap.innerHTML = "";
  tabs.forEach(({ key, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "status-tab";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(activeStatus === key));
    btn.innerHTML = `${label}<span class="tab-count">${counts[key]}</span>`;
    btn.addEventListener("click", () => {
      activeStatus = key;
      renderStatusTabs();
      renderGallery();
    });
    wrap.appendChild(btn);
  });
}

function renderGallery() {
  const grid = document.getElementById("gallery");
  if (!grid) return;
  grid.innerHTML = "";

  const visible = PROJECTS.filter((project) => {
    if (activeStatus === "all") return true;
    if (activeStatus === "in-progress") return project.status === "in-progress";
    return project.status !== "in-progress";
  });

  if (visible.length === 0) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "No projects match this filter yet.";
    grid.appendChild(empty);
    return;
  }

  visible.forEach((project) => {
    const index = PROJECTS.indexOf(project);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-thumb-wrap">
        <img class="project-thumb" src="${project.images[0]}" alt="${project.title}" />
        ${project.status === "in-progress" ? '<span class="status-badge">In Progress</span>' : ""}
      </div>
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
        <div class="project-tags">${(project.tags || []).map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(index));
    grid.appendChild(card);
  });
}

function buildModal() {
  if (document.getElementById("projectModal")) return;

  const overlay = document.createElement("div");
  overlay.id = "projectModal";
  overlay.className = "modal-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button type="button" class="modal-close" aria-label="Close">✕</button>
      <div class="modal-body">
        <div class="modal-media">
          <div class="modal-image-frame">
            <button type="button" class="modal-image-nav prev" id="modalImagePrev" aria-label="Previous photo">‹</button>
            <img id="modalImage" alt="" />
            <button type="button" class="modal-image-nav next" id="modalImageNext" aria-label="Next photo">›</button>
            <span class="modal-image-count" id="modalImageCount"></span>
          </div>
          <div class="modal-thumbs" id="modalThumbs"></div>
        </div>
        <div class="modal-info">
          <h3 id="modalTitle"></h3>
          <div class="project-tags" id="modalTags"></div>
          <div class="star-block" id="modalDescription"></div>
          <div class="modal-links" id="modalLinks"></div>
        </div>
      </div>
      <div class="modal-pager">
        <button type="button" id="modalPrev">← Prev</button>
        <span id="modalCount"></span>
        <button type="button" id="modalNext">Next →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  overlay.querySelector("#modalPrev").addEventListener("click", () => step(-1));
  overlay.querySelector("#modalNext").addEventListener("click", () => step(1));
  overlay.querySelector("#modalImagePrev").addEventListener("click", () => stepImage(-1));
  overlay.querySelector("#modalImageNext").addEventListener("click", () => stepImage(1));

  document.addEventListener("keydown", (e) => {
    if (overlay.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") stepImage(-1);
    if (e.key === "ArrowRight") stepImage(1);
  });
}

function openModal(index) {
  currentIndex = index;
  lastFocusedEl = document.activeElement;
  fillModal();
  const overlay = document.getElementById("projectModal");
  overlay.hidden = false;
  overlay.querySelector(".modal-close").focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("projectModal");
  overlay.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

function step(delta) {
  currentIndex = (currentIndex + delta + PROJECTS.length) % PROJECTS.length;
  currentImageIndex = 0;
  fillModal();
}

function stepImage(delta) {
  const images = PROJECTS[currentIndex].images;
  if (images.length < 2) return;
  currentImageIndex = (currentImageIndex + delta + images.length) % images.length;
  setImage(currentImageIndex);
}

function setImage(i) {
  const project = PROJECTS[currentIndex];
  currentImageIndex = i;
  document.getElementById("modalImage").src = project.images[i];
  document.getElementById("modalImage").alt = `${project.title}: photo ${i + 1} of ${project.images.length}`;
  document.getElementById("modalImageCount").textContent =
    project.images.length > 1 ? `${i + 1} / ${project.images.length}` : "";
  document.querySelectorAll("#modalThumbs .modal-thumb").forEach((thumb, idx) => {
    thumb.classList.toggle("is-active", idx === i);
  });
  const navButtons = document.querySelectorAll(".modal-image-nav");
  navButtons.forEach((btn) => (btn.hidden = project.images.length < 2));
}

function fillModal() {
  const project = PROJECTS[currentIndex];
  currentImageIndex = 0;

  const titleEl = document.getElementById("modalTitle");
  titleEl.innerHTML =
    project.status === "in-progress" ? '<span class="status-badge-inline">In Progress</span><br>' : "";
  titleEl.append(project.title);
  document.getElementById("modalDescription").innerHTML = renderStar(project.longDescription);
  document.getElementById("modalTags").innerHTML = (project.tags || [])
    .map((t) => `<span>${t}</span>`)
    .join("");
  document.getElementById("modalCount").textContent = `${currentIndex + 1} / ${PROJECTS.length}`;

  const thumbsWrap = document.getElementById("modalThumbs");
  thumbsWrap.innerHTML = "";
  if (project.images.length > 1) {
    project.images.forEach((src, i) => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "modal-thumb";
      thumb.innerHTML = `<img src="${src}" alt="Photo ${i + 1} of ${project.images.length}" />`;
      thumb.addEventListener("click", () => setImage(i));
      thumbsWrap.appendChild(thumb);
    });
  }

  setImage(0);

  const linksWrap = document.getElementById("modalLinks");
  linksWrap.innerHTML = "";
  const links = project.links || {};
  if (links.github) linksWrap.appendChild(makeLinkBtn("GitHub ↗", links.github));
  if (links.demo) linksWrap.appendChild(makeLinkBtn("Live Demo ↗", links.demo));
}

function renderStar(star) {
  const rows = [
    ["Situation", star.situation],
    ["Task", star.task],
    ["Action", star.action],
    ["Result", star.result],
  ];
  return rows
    .filter(([, text]) => text)
    .map(([label, text]) => `<div class="star-row"><span class="star-label">${label}</span><p>${text}</p></div>`)
    .join("");
}

function makeLinkBtn(label, url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.className = "btn";
  a.textContent = label;
  return a;
}
