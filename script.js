const VIDEO_DESKTOP = "video/video xdxdxdxd.mp4";
const VIDEO_PHONE = "video/mishsda as.mp4"; // reemplaza con tu archivo 4:3

function setResponsiveVideo() {
  console.log("setResponsiveVideo ejecutado");
  const video = document.getElementById("heroVideo");
  const source = document.getElementById("heroVideoSource");
  if (!video || !source) {
    console.error("Video o fuente no encontrados");
    return;
  }

  const isPhone = window.matchMedia("(max-width: 600px)").matches;
  const newSrc = isPhone ? VIDEO_PHONE : VIDEO_DESKTOP;

  // Usamos pathname para comparar con ruta relativa sin URL completa
  const currentPath = source.getAttribute("src");
  if (currentPath === newSrc) {
    console.log("Video ya es el correcto: ", newSrc);
    return;
  }

  console.log("Cambiando video a", newSrc, "(phone?", isPhone, ")");
  source.setAttribute("src", newSrc);
  video.load();
  video.play().catch((e) => {
    console.warn("No se pudo reproducir automáticamente:", e);
  });
}

window.addEventListener("DOMContentLoaded", setResponsiveVideo);
window.addEventListener("resize", setResponsiveVideo);
