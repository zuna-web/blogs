<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);
	
	if( !isset($request->data->name) || !isset($request->data->message))
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please type your name and message.';
		echo json_encode(['data'=>$data]);
	}
	else
	{
		// Sanitize.
		$name = mysqli_real_escape_string($con, trim($request->data->name));
		$message = mysqli_real_escape_string($con, trim($request->data->message));
		$dt = time();  

		// Store.
		$sql = "INSERT INTO `messages`(`name`,`message`, `date`) VALUES ('{$name}','{$message}','{$dt}')";

		if(mysqli_query($con,$sql))
		{
			
			$message = [
			'name' => $name,
			'message' => $message,
			'date' => $dt,
			'id'    => mysqli_insert_id($con),
			'error'    => false,
			'msg' => 'We Received your Message.'
			];
			
			echo json_encode(['data'=>$message]);
		}
		else
		{
			$data['error'] = true;
			$data['msg'] = 'Sorry. System Faliure. We did not receiveyour message.';
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