const VIDEO_DESKTOP = "video/hero 11.mp4";
const VIDEO_PHONE = "video/hero 43.mp4"; // reemplaza con tu archivo 4:3
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

function titleAnimation() {
  const original = document.title || "ThelouisXD Space ✨";
  const chars = original.split("");
  let index = 0;
  let direction = 1; // 1 = animar hacia -, -1 = restaurar
  let phase = "dash";

  const interval = setInterval(() => {
    if (phase === "dash") {
      if (index < chars.length) {
        const current = [...chars];
        current[index] = "-";
        document.title = current.join("");
        index++;
      } else {
        phase = "restore";
        index = chars.length - 1;
      }
    } else {
      phase = "dash";
      index = 0;
    }
  }, 200);

  return interval;
}

let titleAnimationInterval = null;
window.addEventListener("DOMContentLoaded", () => {
  titleAnimationInterval = titleAnimation();

  const authorLink = document.getElementById("authorLink");
  if (authorLink) {
    authorLink.addEventListener("click", () => {
      window.open("https://github.com/TheLouisXD", "_blank", "noopener,noreferrer");
    });
  }

  const patrocinio = document.querySelector(".patrocinio");
  if (patrocinio) {
    patrocinio.addEventListener("click", () => {
      window.open("https://www.twitch.tv/tannie_the_eevee", "_blank", "noopener,noreferrer");
    });
  }
});