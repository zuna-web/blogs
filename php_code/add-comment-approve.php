<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);
	
	if(trim($request->data->name) === '' || (int)$request->data->message === '')
	{
		$error = ['msg' => 'Error: Please type your name and message.'];
		echo json_encode(['data'=>$error]);
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
			http_response_code(201);
			$message = [
			'name' => $name,
			'message' => $message,
			'date' => $dt,
			'id'    => mysqli_insert_id($con)
			];
			
			echo json_encode(['data'=>$message]);
		}
		else
		{
			$error = ['msg' => 'Sorry. System Faliure. We did not receiveyour message.'];
			echo json_encode(['data'=>$error]);
		}
	}
}
else
{
	$error = ['msg' => 'Error: Please type your name and message.'];
	echo json_encode(['data'=>$error]);
}