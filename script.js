const VIDEO_DESKTOP = "video/video xdxdxdxd.mp4";
const VIDEO_PHONE = "video/mishsda as.mp4"; // reemplaza con tu archivo 4:3

function setResponsiveVideo() {
  const video = document.getElementById("heroVideo");
  const source = document.getElementById("heroVideoSource");
  if (!video || !source) return;

  const isPhone = window.matchMedia("(max-width: 600px)").matches;
  const newSrc = isPhone ? VIDEO_PHONE : VIDEO_DESKTOP;

  if (source.src.endsWith(newSrc)) return;

  source.src = newSrc;
  video.load();
  if (!video.paused) {
    video.play().catch(() => {});
  }
}

window.addEventListener("load", setResponsiveVideo);
window.addEventListener("resize", setResponsiveVideo);
