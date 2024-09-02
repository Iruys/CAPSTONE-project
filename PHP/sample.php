<?php 
  include("database.php"); 

/*

*/

//inserting input in db




   /* 
//query in mysql database

$sql = "SELECT * FROM signupdb WHERE username = 'Rei Andrew'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result)){
  echo $row["id"]. "<br>";
  echo $row["username"]. "<br>";
  echo $row["date"]. "<br>";
  };
}else{
  echo "No user found";
}  */

  /*
  //adding in database 

  $email = "reiandrew@email.com";
  $username = "Rei Andrew";
  $password = "akosibato123";
  $hash = password_hash($password, PASSWORD_DEFAULT);

  $sql = "INSERT INTO signupdb (email, username, password) VALUES ('$email','$username', '$hash')";

  mysqli_query($conn, $sql);  
  */
  
  mysqli_close($conn);
?>