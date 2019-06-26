<?php
require 'db.php';
    
$data = [];
$sql = "SELECT * FROM comments ORDER BY status";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['id']    = $row['id'];
    $data[$i]['b_id'] = $row['b_id'];
    $data[$i]['name'] = $row['name'];
    $data[$i]['comment'] = $row['comment'];
    $data[$i]['status'] = $row['status'];
    $i++;
  }
    
  echo json_encode(['data'=>$data]);
}
else
{
   $data['error'] = 'Error. No Comment Found';
   echo json_encode(['data'=> $data]);
}
