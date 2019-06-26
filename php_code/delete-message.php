<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$id = $request->data->id;

	
$sql = "DELETE FROM messages WHERE id='".$id."'";
if(mysqli_query($con,$sql)){
	$data['error'] = false;
	$data['msg'] = 'Message Deleted Successfully.';
}else{
	$data['error'] = true;
	$data['msg'] = 'Error: Failed to Delete Message.';	
}
echo json_encode(['data'=>$data]);
?>