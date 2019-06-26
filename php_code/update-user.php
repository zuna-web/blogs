<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");


if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);
	$id = $request->data->id;
	if($request->data->firstname == '')
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please enter your First Name.';		
	}
	else if($request->data->lastname == '')
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please enter your Last Name.';		
	}
	else if($request->data->username == '')
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please enter your User Name.';		
	}
	else if($request->data->pass == '')
	{
		$data['error'] = true;
		$data['msg'] = 'Error: Please enter your Password.';		
	}
	else
	{
		// Sanitize.
		$firstname = mysqli_real_escape_string($con, trim($request->data->firstname));
		$lastname = mysqli_real_escape_string($con, trim($request->data->lastname));
		$username = mysqli_real_escape_string($con, trim($request->data->username));
		$pass = mysqli_real_escape_string($con, trim($request->data->pass));
		$status = mysqli_real_escape_string($con, trim($request->data->status));
		

		// Store.
		$sql = "Update users SET `firstname`='".$firstname."', `lastname`='".$lastname."', `username`='".$username."', `pass`='".$pass."', `status`='".$status."' WHERE id='".$id."'";

		if(mysqli_query($con,$sql))
		{
			$data['error'] = false;
			$data['msg'] = ucfirst($firstname).' '. ucfirst($lastname).' updated successfully.';			
		}
		else
		{
			$data['error'] = true;
			$data['msg'] = 'Sorry. System Faliure. Cannot Update User.';			
		}
	}
}
else
{
	$data['error'] = true;
	$data['msg'] = 'Sorry. System Faliure. Cannot Update User.';
}

echo json_encode(['data'=>$data]);

?>