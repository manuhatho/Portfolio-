// Fonction pour activer le plein écran
function launchFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  }
  
  // Activer le plein écran sur un événement tactile
  document.addEventListener('touchstart', function() {
    launchFullScreen(document.documentElement); // Activer le plein écran pour l'élément racine (document)
  });