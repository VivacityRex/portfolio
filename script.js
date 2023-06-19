document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");

    video.addEventListener("timeupdate", function() {
      if (video.currentTime >= 5) {
        video.pause();
      }
    });
  });