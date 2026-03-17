const VIDEO_DESKTOP = "video/hero 11.mp4";
const VIDEO_PHONE = "video/mishsda as.mp4"; // reemplaza con tu archivo 4:3
let currentVideoMode = null; // "desktop" o "phone"
let resizeTimeout = null;

function getVideoMode() {
  // Usa un umbral seguro para evitar toggle por barras de navegador
  return window.innerWidth <= 640 ? "phone" : "desktop";
}

function setResponsiveVideo() {
  const video = document.getElementById("heroVideo");
  const source = document.getElementById("heroVideoSource");
  if (!video || !source) {
    console.error("Video o fuente no encontrados");
    return;
  }

  const mode = getVideoMode();
  if (mode === currentVideoMode) {
    return;
  }

  const newSrc = mode === "phone" ? VIDEO_PHONE : VIDEO_DESKTOP;
  currentVideoMode = mode;

  console.log("setResponsiveVideo: mode=", mode, "src=", newSrc);
  source.setAttribute("src", newSrc);
  video.load();
  video.play().catch((e) => {
    console.warn("No se pudo reproducir automáticamente:", e);
  });
}

window.addEventListener("DOMContentLoaded", setResponsiveVideo);
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setResponsiveVideo, 150);
});
