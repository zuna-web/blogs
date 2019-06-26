<?php
require 'db.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$id = $request->data->id;
if($request->data->status == 1){
	$newStatus = 0;
}
else{
	$newStatus = 1;
}
	
$sql = "Update comments SET status='".$newStatus."' WHERE id='".$id."'";
if(mysqli_query($con,$sql)){
	$data['error'] = false;
	$data['msg'] = 'Comment Status Updated Successfully.';
}else{
	$data['error'] = true;
	$data['msg'] = 'Failed to updated Comment.';	
}
echo json_encode(['data'=>$data]);
?>