<?php
require 'db.php';
    
$data = [];
$sql = "SELECT * FROM blogs where status=1";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['id']    = $row['id'];
    $data[$i]['title'] = $row['title'];
    $data[$i]['small_content'] = $row['small_content'];
    $data[$i]['content'] = $row['content'];
    $data[$i]['author'] = $row['author'];
    $data[$i]['date'] = $row['date'];
    $data[$i]['status'] = $row['status'];
    $i++;
  }
    
  echo json_encode(['data'=>$data]);
}
else
{
   $data['error'] = 'Error. No blog Found';
   echo json_encode(['data'=> $data]);
}
