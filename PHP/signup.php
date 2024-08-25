<?php 
  include "database.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Acme&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <title>Dr. ACE Fitness Gym</title>
  <link rel="icon" href="assets/logs.png">
  <link rel="stylesheet" href="../CSS/signup.css" />
</head>
<body>

<div class="container">


  <div class="conts1">

    <div class="form-wrap">
      <form action="" method="get">

        <div class="ttl-wrap">
          <p id="login-ttl">SIGN UP</p>
          <h3>Enter your account details below</h3>
        </div>

        <div class="inputs-wrap">
          <select name="option" id="">
    
            <option value="Client">
             Client
            </option>
            <option value="Instructor">
            Instructor
            </option>
          </select>
          
          <label for="email"> <ion-icon name="mail-outline"></ion-icon>Email</label>
          <input type="email" name="email" id="email" class="in" required>
          <label for="username"> <ion-icon name="person"></ion-icon> Username</label>
          <input type="text" name="username" id="username" class="in"  required>
          <label for="passw"><ion-icon name="lock-closed"></ion-icon> Password</label>
          <input type="password" name="password" id="passw"  class="in"  required>
          <label for="conPassw"><ion-icon name="checkmark-outline"></ion-icon> Confirm Password</label>
          <input type="password" name="cpassword"  id="conPassw" class="in"  required>
          <label for="terms"> <input type="checkbox" id="terms" value="Terms">I agree to the <a href="">Terms of Service</a> </label>
        
          <label for="policy"> <input type="checkbox" id="policy" value="Policy">I agree to the<a href="">Data Privacy Policy</a>  </label>
         
          <div> <input type="submit" name="submitbtn" value = "Submit" class="SU"></div>
         
        </div>
       
      </form>
    </div>

  </div>

  <div class="conts2">
    <img src="../assets/logs.png" alt="" height="150">
  </div>

</div>


  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>

<?php
if (isset($_POST["submitbtn"])) {
  $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
  $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
  $password = $_POST["password"];
  $password = $_POST["cpassword"];

  if ($email && $username == "AdminPassword123" && $password == "AdminPassword123" && $password == "AdminPassword123" ) {
    echo "<script>alert('You are sign in !')</script>";
  } else {
    echo "Wrong email or password";
  }
}
?>