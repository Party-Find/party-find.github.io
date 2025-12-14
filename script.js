// Warte, bis die ganze Seite geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Hole das Bild aus dem HTML
    const bild = document.getElementById('drehendesBild');
    let rotationsWinkel = 0; // Startet bei 0 Grad
    
    // Füge einen Klick-Eventlistener hinzu
    bild.addEventListener('click', function() {
        // Erhöhe den Drehwinkel um 45 Grad bei jedem Klick
        rotationsWinkel += 45;
        
        // Wende die Drehung auf das Bild an
        bild.style.transform = `rotate(${rotationsWinkel}deg)`;
        
        // Kleines visuelles Feedback in der Konsole (optional)
        console.log(`Bild gedreht! Aktueller Winkel: ${rotationsWinkel}°`);
    });
    
    // Optional: Setze die Drehung mit Doppelklick zurück
    bild.addEventListener('dblclick', function() {
        rotationsWinkel = 0;
        bild.style.transform = `rotate(0deg)`;
        console.log('Drehung zurückgesetzt!');
    });
});