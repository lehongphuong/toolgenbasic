<?php 
	switch ($data->what) { 
        //******************applywork************************
        // applywork(id,idcandidate,idjobs,startdate,status)
        // Get all data from applywork
        case 30: {
            $sql = "SELECT * FROM applywork";
            break;
        }

        // Insert data to applywork
        case 31: {
            $sql = "INSERT INTO applywork(idcandidate,idjobs,startdate,status)
            		VALUES('$data->idcandidate','$data->idjobs','$data->startdate','$data->status')";
            break;
        }

        // Update data applywork
        case 32: {
            $sql = "UPDATE applywork SET idcandidate='$data->idcandidate', idjobs='$data->idjobs', startdate='$data->startdate', status = '$data->status'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of applywork
        case 33: {
            $sql = "DELETE FROM applywork
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id applywork
        case 34: {
            $sql = "SELECT * FROM applywork
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) applywork
        case 35: {
            $sql = "SELECT * FROM applywork
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of applywork
        case 36: {
            $sql = "SELECT COUNT(1) FROM applywork ";
            break;
        }

	}
?> 
