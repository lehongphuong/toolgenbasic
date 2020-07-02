<?php 
	switch ($data->what) { 
        //******************ordercoaching************************
        // ordercoaching(id,idcoaching,idcandidate,idpackage,startdate,startconnect,statuspayment,amount)
        // Get all data from ordercoaching
        case 110: {
            $sql = "SELECT * FROM ordercoaching";
            break;
        }

        // Insert data to ordercoaching
        case 111: {
            $sql = "INSERT INTO ordercoaching(idcoaching,idcandidate,idpackage,startdate,startconnect,statuspayment,amount)
            		VALUES('$data->idcoaching','$data->idcandidate','$data->idpackage','$data->startdate','$data->startconnect','$data->statuspayment','$data->amount')";
            break;
        }

        // Update data ordercoaching
        case 112: {
            $sql = "UPDATE ordercoaching SET idcoaching='$data->idcoaching', idcandidate='$data->idcandidate', idpackage='$data->idpackage', startdate='$data->startdate', startconnect='$data->startconnect', statuspayment='$data->statuspayment', amount = '$data->amount'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of ordercoaching
        case 113: {
            $sql = "DELETE FROM ordercoaching
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id ordercoaching
        case 114: {
            $sql = "SELECT * FROM ordercoaching
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) ordercoaching
        case 115: {
            $sql = "SELECT * FROM ordercoaching
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of ordercoaching
        case 116: {
            $sql = "SELECT COUNT(1) FROM ordercoaching ";
            break;
        }

	}
?> 
