<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);
	
	if(trim($request->data->name) === '' || (int)$request->data->comment === '')
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please type your name and message.';
		echo json_encode(['data'=>$data]);
	}
	else
	{
		// Sanitize.
		$name = mysqli_real_escape_string($con, trim($request->data->name));
		$comment = mysqli_real_escape_string($con, trim($request->data->comment));
		$bid = mysqli_real_escape_string($con, trim($request->data->bid));
		

		// Store.
		$sql = "INSERT INTO `comments`(`b_id`,`name`,`comment`,`status`) VALUES ('{$bid}', '{$name}','{$comment}',0)";

		if(mysqli_query($con,$sql))
		{
			
			$data = [
			'name' => $name,
			'comment' => $comment,
			'id'    => mysqli_insert_id($con)
			];
			
			echo json_encode(['data'=>$data]);
		}
		else
		{
			$data['error'] = true;
			$data['msg'] = 'Sorry. System Faliure. We did not received your Comment.';
			echo json_encode(['data'=>$data]);
		}
	}
}
else
{
	$data['error'] = true;
	$data['msg'] = 'Error: Please type your name and message.';
	echo json_encode(['data'=>$data]);
}