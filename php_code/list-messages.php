<?php
require 'db.php';
    
$data = [];
$sql = "SELECT * FROM messages Order by date";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['id']    = $row['id'];
    $data[$i]['name'] = $row['name'];
    $data[$i]['message'] = $row['message'];
    $data[$i]['date'] = $row['date'];
    $data[$i]['error'] = false;
    $data[$i]['msg'] = 'Message List Found';
    $i++;
  }
  
}
else
{
   $data['error'] = true;
   $data['msg'] = 'Error. No blog Found';
}

echo json_encode(['data'=> $data]);
