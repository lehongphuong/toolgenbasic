<?php 
	switch ($data->what) { 
        //******************candidateview************************
        // candidateview(id,idcandidate,idcompany,startdate,phone,point)
        // Get all data from candidateview
        case 80: {
            $sql = "SELECT * FROM candidateview";
            break;
        }

        // Insert data to candidateview
        case 81: {
            $sql = "INSERT INTO candidateview(idcandidate,idcompany,startdate,phone,point)
            		VALUES('$data->idcandidate','$data->idcompany','$data->startdate','$data->phone','$data->point')";
            break;
        }

        // Update data candidateview
        case 82: {
            $sql = "UPDATE candidateview SET idcandidate='$data->idcandidate', idcompany='$data->idcompany', startdate='$data->startdate', phone='$data->phone', point = '$data->point'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of candidateview
        case 83: {
            $sql = "DELETE FROM candidateview
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id candidateview
        case 84: {
            $sql = "SELECT * FROM candidateview
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) candidateview
        case 85: {
            $sql = "SELECT * FROM candidateview
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of candidateview
        case 86: {
            $sql = "SELECT COUNT(1) FROM candidateview ";
            break;
        }

	}
?> 
