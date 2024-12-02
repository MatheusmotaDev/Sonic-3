function updateCountdown() {
    
    const eventDate = new Date("2024-12-28T18:00:00-03:00"); 
    
    
    const now = new Date();

    
    const diff = eventDate - now;

    
    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>Chegou o grande dia!</h2>";
        return;
    }

    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    
    document.getElementById("countdown").innerHTML = `
        <h2>${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos</h2>
    `;
}


setInterval(updateCountdown, 1000);
