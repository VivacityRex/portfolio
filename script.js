document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("myVideo");
  const title = document.getElementById("floating-title");
  
  video.addEventListener("timeupdate", function() {
    if (video.currentTime >= 4) {
      video.playbackRate = 0.5;
      title.style.opacity = 1;
      title.style.transform = "translateX(0)";
    }
  });
  
  video.addEventListener("timeupdate", function() {
    if (video.currentTime >= 4) {
      video.style.opacity = 1 - (video.currentTime - 4) / 2;
      if (video.style.opacity <= 0) {
        title.style.transform = "translateX(0)";
      }
    }
  });
});
