const rate = 800;

function setup() {
	  createCanvas(500, 500);
    noStroke()
}

function draw() {
    let interval = 500 / 10;
    let padding = interval * 2;
	background(240);
    var currentYear = year();
    var currentMonth = month();
    var currentDay = day();
    var currentHour = hour();
    var currentMinute = minute();
    var currentSecond = second();
    var totalHours = (currentHour);
    var totalMinutes = (totalHours * 60) + currentMinute;

    let millisecond = millis();

    var totalDeaths = parseInt(totalMinutes * 0.4 + 20)
        // var totalDeaths = rate;
    fill(100, 255)
    text('recorded deaths due to maternal complications ' + currentDay  + '-' + currentMonth + '-' + currentYear + ': \n' + parseInt(totalDeaths) ,5, height - 25);

    fill(100, millisecond%1000)
    for(let i = 0; i < totalDeaths; i++){
      const row = parseInt(i/interval);
      const col = i%interval;
      let x = (col * 3) + (col*width/(interval*1.1)) + width/padding
      let y = (row) * (height/interval) + height / padding
      fill(100, 255)
      rect(x, y, 3, 3);
    }
//   final block
    let finalDeath = totalDeaths
    const row = parseInt(finalDeath/interval);
    const col = finalDeath%interval;
    let x = (col * 3) + (col*width/(interval*1.1)) + width/padding
    let y = (row) * (height/interval) + height / padding
    fill(222,0,0, millisecond%2000)
    rect(x, y, 3, 3);
}
