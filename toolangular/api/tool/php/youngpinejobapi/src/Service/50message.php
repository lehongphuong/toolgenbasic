<?php 
	switch ($data->what) { 
        //******************message************************
        // message(id,idcandidate,idcompany,startdate,content)
        // Get all data from message
        case 50: {
            $sql = "SELECT * FROM message";
            break;
        }

        // Insert data to message
        case 51: {
            $sql = "INSERT INTO message(idcandidate,idcompany,startdate,content)
            		VALUES('$data->idcandidate','$data->idcompany','$data->startdate','$data->content')";
            break;
        }

        // Update data message
        case 52: {
            $sql = "UPDATE message SET idcandidate='$data->idcandidate', idcompany='$data->idcompany', startdate='$data->startdate', content = '$data->content'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of message
        case 53: {
            $sql = "DELETE FROM message
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id message
        case 54: {
            $sql = "SELECT * FROM message
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) message
        case 55: {
            $sql = "SELECT * FROM message
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of message
        case 56: {
            $sql = "SELECT COUNT(1) FROM message ";
            break;
        }

	}
?> 
