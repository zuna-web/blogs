  <?php

	require 'db.php';
    $bid = $_GET['id'];
	$data = [];
	
	$sql = "SELECT * FROM comments WHERE b_id='".$bid."' and status = 1";

	if($result = mysqli_query($con,$sql))
	{
	  $i = 0;
	  while($row = mysqli_fetch_assoc($result))
	  {
		$data[$i]['name']    = $row['name'];
		$data[$i]['comment'] = $row['comment'];
		$i++;
	  }
		
	  echo json_encode(['data'=>$data]);
	}
	else
	{
	   $data['error'] = 'Error. No Comment Found';
	   echo json_encode(['data'=> $data]);
	}

?>