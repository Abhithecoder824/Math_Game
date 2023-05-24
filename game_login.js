// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;  
  // Store these values locally
  localStorage.setItem("player1_name_input", player1_name_input);
  localStorage.setItem("player2_name_input", player2_name_input);
  //Assign "game_page.html" to window.location
  window.location ="game_page_html";
}

function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseIn(number1) * parseInt(number2);
}

question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' if='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check<button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
