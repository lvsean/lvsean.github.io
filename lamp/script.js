const copyButton = document.querySelector("[data-copy-target]");

copyButton?.addEventListener("click", async () => {
  const target = document.getElementById(copyButton.dataset.copyTarget);
  if (!target) return;

  try {
    await navigator.clipboard.writeText(target.innerText.trim());
    copyButton.textContent = "Copied";
    window.setTimeout(() => { copyButton.textContent = "Copy BibTeX"; }, 1800);
  } catch {
    copyButton.textContent = "Select to copy";
  }
});

// Autoplay result videos only while on screen; pause when they leave, so the
// browser never decodes every clip at once. Videos are muted/loop/playsinline.
const scrollVideos = document.querySelectorAll("video:not([autoplay])");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window && scrollVideos.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play?.().catch(() => {});
        } else {
          video.pause?.();
        }
      }
    },
    { threshold: 0.25 }
  );
  scrollVideos.forEach((video) => io.observe(video));
}
