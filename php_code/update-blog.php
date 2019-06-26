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
		$id = mysqli_real_escape_string($con, trim($request->data->id));
		$title = mysqli_real_escape_string($con, trim($request->data->title));
		$small_content = mysqli_real_escape_string($con, trim($request->data->small_content));
		$content = mysqli_real_escape_string($con, trim($request->data->content));
		$author = mysqli_real_escape_string($con, trim($request->data->author));
		$status = mysqli_real_escape_string($con, trim($request->data->status));
		$dt = time();  
echo 'ID'.$id;
		// Store.
		
		$sql = "Update blogs SET title='".$title."',  small_content='".$small_content."',  content='".$content."',  author='".$author."',  status='".$status."' WHERE id='".$id."' ";
		echo  $sql;	
		if(mysqli_query($con,$sql))
		{
			
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
			$error = ['msg' => 'Sorry. System Faliure. Blog not Updated.'];
			echo json_encode(['data'=>$error]);
		}
	}
}
else
{
	$error = ['msg' => 'Error: Please enter blogs Details.'];
	echo json_encode(['data'=>$error]);
}