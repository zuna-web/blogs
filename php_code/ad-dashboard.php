 <?php

	require 'db.php';
	
	$data = [];
	
	
	$result = mysqli_query($con,"SELECT count(*) as c FROM blogs ");
	$row = mysqli_fetch_assoc($result);
	$data['blogs'] = $row['c'];
	
	
	$result = mysqli_query($con,"SELECT count(*) as c FROM comments ");
	$row = mysqli_fetch_assoc($result);
	$data['comments'] = $row['c'];
	
	
	$result = mysqli_query($con,"SELECT count(*) as c FROM messages ");
	$row = mysqli_fetch_assoc($result);
	$data['messages'] = $row['c'];
	
	
	$result = mysqli_query($con,"SELECT count(*) as c FROM users ");
	$row = mysqli_fetch_assoc($result);
	$data['users'] = $row['c'];
	
	echo json_encode(['data'=>$data]);
	
?>
	
