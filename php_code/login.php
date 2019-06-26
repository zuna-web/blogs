<?php 
require 'db.php';

// Get the posted data.
$postdata = json_decode(file_get_contents("php://input"));

$data = [];


if( !isset($postdata->data->username) || $postdata->data->username == ''){
	$data['error'] = true;
	$data['msg'] = 'Please Enter Username.';
}
else if ( !isset($postdata->data->pass) || $postdata->data->pass == '' ){
	$data['error'] = true;
	$data['msg'] = 'Please Enter Password.';
}
else{
	$username = $postdata->data->username;
	$pass = $postdata->data->pass;
	$sql = "SELECT * FROM users WHERE username='".$username."' and pass='".$pass."' and status = 1";
	
	if ($result=mysqli_query($con,$sql))
	{
	   if(mysqli_num_rows($result) > 0)
		{
			$data['login'] =  true;
			$data['msg'] =  "Login Successful";
			
			$row = mysqli_fetch_assoc($result);
			$data['firstname'] = $row['firstname'];
			$data['lastname'] = $row['lastname'];
			$data['username'] = $row['username'];
			$data['error'] = false;
		}
		else{
			$data['login'] =  false;
			$data['error'] = true;
			$data['msg'] =  "Username or Password incorrect.";	
		}			
	}
	else{
		$data['login'] =  false;
		$data['error'] = true;
		$data['msg'] =  "Username or Password incorrect.";
	}
}
echo json_encode($data);
?>