document.getElementById('checkSpeed').addEventListener('click', function () {
  var speed = parseInt(document.getElementById('speed').value);
  var speedLimit = 70;
  var demeritPoints = 0;

  if (speed < speedLimit) {
    document.getElementById('result').textContent = 'Ok';
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    var resultText = 'Points: ' + demeritPoints;
    if (demeritPoints > 12) {
      resultText += ' License suspended';
    }
    document.getElementById('result').textContent = resultText;
  }
});
