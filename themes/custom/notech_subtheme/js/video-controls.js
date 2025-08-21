document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('slideshow-video');
  const muteButton = document.getElementById('mute-button');

  // Ensure autoplay works by playing the video when the page loads
  video.play().catch(error => {
      console.warn('Autoplay failed:', error);
  });

  // Mute/Unmute toggle
  muteButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default button action
      if (video.muted) {
          video.muted = false;
          muteButton.textContent = 'Mute'; // Update button text
      } else {
          video.muted = true;
          muteButton.textContent = 'Unmute'; // Update button text
      }
  });
});
