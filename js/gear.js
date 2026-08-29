/* ============================================================
   gear.js — home page only. A prehistoric stone wheel and a
   modern gear are stacked in the same fixed corner icon; as the
   visitor scrolls down the page the wheel fades out and the gear
   fades in while both spin together, reading as one object
   turning into the other.
   ============================================================ */

(function () {
  const container = document.getElementById("gearIcon");
  if (!container) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const wheelLayer = document.createElement("div");
  wheelLayer.className = "gear-layer gear-layer-wheel";
  wheelLayer.innerHTML = SiteIcons.wheelSVG();

  const gearLayer = document.createElement("div");
  gearLayer.className = "gear-layer gear-layer-gear";
  gearLayer.innerHTML = SiteIcons.gearSVG();
  gearLayer.style.opacity = "0";

  container.appendChild(wheelLayer);
  container.appendChild(gearLayer);

  let ticking = false;

  function update() {
    ticking = false;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;

    wheelLayer.style.opacity = String(1 - progress);
    gearLayer.style.opacity = String(progress);

    if (!reduceMotion) {
      const angle = (window.scrollY * 0.5).toFixed(1);
      wheelLayer.style.transform = `rotate(${angle}deg)`;
      gearLayer.style.transform = `rotate(${angle}deg)`;
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
