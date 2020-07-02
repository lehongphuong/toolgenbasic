<?php 
	switch ($data->what) { 
        //******************applysave************************
        // applysave(id,idcandidate,idjobs,startdate)
        // Get all data from applysave
        case 40: {
            $sql = "SELECT * FROM applysave";
            break;
        }

        // Insert data to applysave
        case 41: {
            $sql = "INSERT INTO applysave(idcandidate,idjobs,startdate)
            		VALUES('$data->idcandidate','$data->idjobs','$data->startdate')";
            break;
        }

        // Update data applysave
        case 42: {
            $sql = "UPDATE applysave SET idcandidate='$data->idcandidate', idjobs='$data->idjobs', startdate = '$data->startdate'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of applysave
        case 43: {
            $sql = "DELETE FROM applysave
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id applysave
        case 44: {
            $sql = "SELECT * FROM applysave
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) applysave
        case 45: {
            $sql = "SELECT * FROM applysave
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of applysave
        case 46: {
            $sql = "SELECT COUNT(1) FROM applysave ";
            break;
        }

	}
?> 
