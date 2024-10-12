
  function spinner() {
    const formulaire = document.querySelector("form");
    const spinner = document.getElementById("loading-spinner");
    
    
    formulaire.addEventListener("submit", ()=> {
        spinner.style.display = "block";
    });
    
}
spinner();


    // Fonction pour enlever le paramètre 'success' de l'URL
    if (window.location.search.indexOf('success=') !== -1) {
        // On utilise la méthode history.replaceState pour réinitialiser l'URL sans recharger la page
        var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, newURL);
    }

