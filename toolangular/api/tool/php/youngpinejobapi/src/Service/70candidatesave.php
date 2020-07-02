<?php 
	switch ($data->what) { 
        //******************candidatesave************************
        // candidatesave(id,idcandidate,idcompany,startdate)
        // Get all data from candidatesave
        case 70: {
            $sql = "SELECT * FROM candidatesave";
            break;
        }

        // Insert data to candidatesave
        case 71: {
            $sql = "INSERT INTO candidatesave(idcandidate,idcompany,startdate)
            		VALUES('$data->idcandidate','$data->idcompany','$data->startdate')";
            break;
        }

        // Update data candidatesave
        case 72: {
            $sql = "UPDATE candidatesave SET idcandidate='$data->idcandidate', idcompany='$data->idcompany', startdate = '$data->startdate'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of candidatesave
        case 73: {
            $sql = "DELETE FROM candidatesave
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id candidatesave
        case 74: {
            $sql = "SELECT * FROM candidatesave
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) candidatesave
        case 75: {
            $sql = "SELECT * FROM candidatesave
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of candidatesave
        case 76: {
            $sql = "SELECT COUNT(1) FROM candidatesave ";
            break;
        }

	}
?> 
