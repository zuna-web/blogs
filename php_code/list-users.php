<?php
require 'db.php';
    
$data = [];
$sql = "SELECT * FROM users";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['id']    = $row['id'];
    $data[$i]['firstname'] = $row['firstname'];
    $data[$i]['lastname'] = $row['lastname'];
    $data[$i]['username'] = $row['username'];
    $data[$i]['pass'] = $row['pass'];
    $data[$i]['status'] = $row['status'];
    $i++;
  }
    
  echo json_encode(['data'=>$data]);
}
else
{
   $data['error'] = 'Error. No User Found';
   echo json_encode(['data'=> $data]);
}
