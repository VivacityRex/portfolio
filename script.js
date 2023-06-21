document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("myVideo");
  const title = document.getElementById("floating-title");
  const fadeOutStart = 2;
  const fadeOutDuration = 1.5;

  video.addEventListener("timeupdate", function() {
    if (video.currentTime >= fadeOutStart) {
      video.playbackRate = 0.5;
      title.style.opacity = 1;
      title.style.transform = "translateX(0)";
      video.style.transition = `opacity ${fadeOutDuration}s`;
      video.style.opacity = 0;
      
      if (video.style.opacity <= 0) {
        title.style.transform = "translateX(0)";
      }
    }
  });
});
