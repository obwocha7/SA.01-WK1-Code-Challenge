function calculateGrade() {
  // Get the value entered by the user in the input field
  var marks = document.getElementById('marks').value;
  // Variable to store the calculated grade
  var grade;

  // Determine the grade based on the entered marks
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Display the calculated grade on the web page
  document.getElementById('grade').innerText = 'Grade: ' + grade;
}
