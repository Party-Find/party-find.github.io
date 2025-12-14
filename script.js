document.addEventListener('DOMContentLoaded', function() {
    // Elemente auswählen
    const menueToggle = document.getElementById('menueToggle');
    const seitenMenue = document.getElementById('seitenMenue');
    const schliessenBtn = document.querySelector('.schliessen-btn');
    const overlay = document.getElementById('overlay');
    const hauptinhalt = document.querySelector('.hauptinhalt');
    
    // Menü öffnen
    function oeffneMenue() {
        seitenMenue.classList.add('offen');
        overlay.classList.add('sichtbar');
        document.body.classList.add('menue-offen');
        // Tastaturfokus ins Menü setzen für Accessibility
        setTimeout(() => {
            const erstesLink = seitenMenue.querySelector('a');
            if (erstesLink) erstesLink.focus();
        }, 100);
    }
    
    // Menü schließen
    function schliesseMenue() {
        seitenMenue.classList.remove('offen');
        overlay.classList.remove('sichtbar');
        document.body.classList.remove('menue-offen');
        // Fokus zurück zum Toggle-Button
        menueToggle.focus();
    }
    
    // Event Listener
    menueToggle.addEventListener('click', oeffneMenue);
    schliessenBtn.addEventListener('click', schliesseMenue);
    overlay.addEventListener('click', schliesseMenue);
    
    // Menü mit Escape-Taste schließen
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && seitenMenue.classList.contains('offen')) {
            schliesseMenue();
        }
    });
    
    // Menü schließen wenn auf einen Link geklickt wird (optional)
    const menueLinks = document.querySelectorAll('.menue-liste a');
    menueLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Nur schließen wenn es kein # Link ist
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
            }
            schliesseMenue();
        });
    });
    
    // Animationseffekt für Menü-Items
    const menueItems = document.querySelectorAll('.menue-liste li');
    menueItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        // Verzögerte Animation wenn Menü öffnet
        seitenMenue.addEventListener('transitionstart', function() {
            if (seitenMenue.classList.contains('offen')) {
                setTimeout(() => {
                    item.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 150);
            }
        });
        
        // Zurücksetzen wenn Menü schließt
        seitenMenue.addEventListener('transitionend', function() {
            if (!seitenMenue.classList.contains('offen')) {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
            }
        });
    });
    
    // Konsolen-Log für Debugging
    console.log('Menü-Script geladen. Klicke auf das Hamburger-Icon um das Menü zu öffnen.');
});