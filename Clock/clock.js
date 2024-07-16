function clockupdate() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');
  
    const secondDeg = seconds * 6; 
    const minuteDeg = minutes * 6 + seconds * 0.1; 
    const hourDeg = hours * 30 + minutes * 0.5; 
   
   
     secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }
    setInterval(clockupdate, 900);
        clockupdate();
  
