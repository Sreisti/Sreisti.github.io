/* ============================================================
   gear-static.js — experience.html & projects.html. Just the
   final modern gear, gently spinning in place (CSS animation),
   no morph story.
   ============================================================ */

(function () {
  const container = document.getElementById("gearIcon");
  if (!container) return;

  container.classList.add("gear-spin-static");

  const gearLayer = document.createElement("div");
  gearLayer.className = "gear-layer";
  gearLayer.innerHTML = SiteIcons.gearSVG();
  container.appendChild(gearLayer);
})();
