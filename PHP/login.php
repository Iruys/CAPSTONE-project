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
  <link rel="stylesheet" href="../CSS/login.css" />
</head>
<body>

<div class="container">


  <div class="conts1">

    <div class="form-wrap">
      <form action="<?php htmlspecialchars(($_SERVER["PHP_SELF"]))?>" method="post">

        <div class="ttl-wrap">
          <p id="login-ttl">LOG IN</p>
        </div>

        <div class="inputs-wrap">
        
          <label for="email"> <ion-icon name="mail-outline"></ion-icon>Email</label>
          <input type="email" name="emails" id="email" class="in" required>

          <label for="passw"><ion-icon name="lock-closed"></ion-icon> Password</label>
          <input type="password" name="passwords" id="passw"  class="in"  required>
          <a href="#">Forgot your password?</a>
          <div> <input type="submit" name="submitBtn" value="Sign Up" class="SU"></div>
         <p>Don’t have an account? <a href="signup.php"> Sign up</a></p>
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
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize input
    $email = filter_input(INPUT_POST, "emails", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "passwords", FILTER_SANITIZE_STRING);

    // Validate input
    if (empty($email) || empty($password)) {
        echo "Please enter both email and password.";
    } else {
        // Prepare and execute query
        $sql = "SELECT id, password FROM signupdb WHERE email = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $id, $hashed_password);
        mysqli_stmt_fetch($stmt);
        mysqli_stmt_close($stmt);

        // Verify password
        if (password_verify($password, $hashed_password)) {
            // Start session and store user ID
            session_start();
            $_SESSION['user_id'] = $id;
            $_SESSION['email'] = $email;

            // Redirect to a protected page
            header("Location: ../HTML/Home.html");
            exit;
        } else {
            echo "Invalid email or password.";
        }
    }
}

// Close connection
mysqli_close($conn);
?>
