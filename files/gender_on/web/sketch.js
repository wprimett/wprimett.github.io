const rate = 800;

function setup() {
	  createCanvas(windowWidth, windowHeight);
    noStroke()
		textSize(16);
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
		var textDate = currentDay  + '-' + currentMonth + '-' + currentYear;
    text('Recorded deaths due to maternal complications | ' + textDate + ' \n' + parseInt(totalDeaths)  + '\n', (interval * 2) + (interval*width/(interval*2)) + width/padding + width/padding, 25);

    fill(100, millisecond%1000)
    for(let i = 0; i < totalDeaths; i++){
      const row = parseInt(i/interval);
      const col = i%interval;
      let x = (col * 2) + (col*width/(interval*2)) + width/padding
      let y = (row) * (height/interval) + height / padding
      fill(100, 255)
      rect(x, y, 3, 8);
    }
//   final block
    let finalDeath = totalDeaths
    const row = parseInt(finalDeath/interval);
    const col = finalDeath%interval;
    let x = (col * 2) + (col*width/(interval*2)) + width/padding
    let y = (row) * (height/interval) + height / padding
    fill(222,0,0, millisecond%1500)
    rect(x, y, 3, 9);
}
