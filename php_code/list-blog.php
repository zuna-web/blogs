 <?php

	require 'db.php';
    $id = $_GET['id'];
	$data = [];
	
	
	if(isset($id) && !empty($id))
	{
		
		$sql = "SELECT * FROM blogs WHERE id='".$id."' and status = 1";
		
		if($result = mysqli_query($con,$sql))
		{
		  
		  while($row = mysqli_fetch_assoc($result))
		  {
			$data['id']    = $row['id'];
			$data['title'] = $row['title'];
			$data['content'] = $row['content'];
			$data['small_content'] = $row['small_content'];
			$data['author'] = $row['author'];
			$data['date'] = $row['date'];
			
		  }
			
		  echo json_encode(['data'=>$data]);
		}
		else
		{
		  $data['error'] = true;
		  $data['msg'] = 'Cannot find the Blog';
		  echo json_encode(['data'=>$data]);
		}
	}
	else
	{
		$data['error'] = true;
		$data['msg'] = 'Cannot find the Blog';
		echo json_encode(['data'=>$data]);
	}
	
	
