<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);
	
	if( $request->data->title === '' )
	{
		$data['error'] = false;
		$data['msg'] = 'Error: Please enter Blog Title.';
		echo json_encode(['data'=>$data]);
	}
	else if( $request->data->small_content === '' )
	{
		$data['error'] = false;
		$data['msg'] = 'Error: Please enter Blog Small Content.';
		echo json_encode(['data'=>$data]);
	}
	else if( $request->data->content === '' )
	{
		$data['error'] = false;
		$data['msg'] = 'Error: Please enter Blog Content.';
		echo json_encode(['data'=>$data]);
	}
	else if( $request->data->author === '' )
	{
		$data['error'] = false;
		$data['msg'] = 'Error: Please type Blog Author.';
		echo json_encode(['data'=>$data]);
	}
	else
	{
		// Sanitize.
		$title = mysqli_real_escape_string($con, trim($request->data->title));
		$small_content = mysqli_real_escape_string($con, trim($request->data->small_content));
		$content = mysqli_real_escape_string($con, trim($request->data->content));
		$author = mysqli_real_escape_string($con, trim($request->data->author));
		$dt = time();  

		// Store.
		$sql = "INSERT INTO `blogs`(`title`,`small_content`, `content`, `author`, `date`, `status`) VALUES ('{$title}','{$small_content}','{$content}','{$author}','{$dt}','1')";

		if(mysqli_query($con,$sql))
		{
			http_response_code(201);
			$message = [
			'title' => $title,
			'small_content' => $small_content,
			'content' => $content,
			'author' => $author,
			'date' => $dt,
			'status' => 1,
			'id'    => mysqli_insert_id($con)
			];
			
			echo json_encode(['data'=>$message]);
		}
		else
		{
			$error = ['msg' => 'Sorry. System Faliure. Blog not added.'];
			echo json_encode(['data'=>$error]);
		}
	}
}
else
{
	$error = ['msg' => 'Error: Please enter blogs Details.'];
	echo json_encode(['data'=>$error]);
}