<?php 
	switch ($data->what) { 
        //******************commentcoaching************************
        // commentcoaching(id,idcandidate,idcoaching,startdate,content,star,approve)
        // Get all data from commentcoaching
        case 120: {
            $sql = "SELECT * FROM commentcoaching";
            break;
        }

        // Insert data to commentcoaching
        case 121: {
            $sql = "INSERT INTO commentcoaching(idcandidate,idcoaching,startdate,content,star,approve)
            		VALUES('$data->idcandidate','$data->idcoaching','$data->startdate','$data->content','$data->star','$data->approve')";
            break;
        }

        // Update data commentcoaching
        case 122: {
            $sql = "UPDATE commentcoaching SET idcandidate='$data->idcandidate', idcoaching='$data->idcoaching', startdate='$data->startdate', content='$data->content', star='$data->star', approve = '$data->approve'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of commentcoaching
        case 123: {
            $sql = "DELETE FROM commentcoaching
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id commentcoaching
        case 124: {
            $sql = "SELECT * FROM commentcoaching
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) commentcoaching
        case 125: {
            $sql = "SELECT * FROM commentcoaching
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of commentcoaching
        case 126: {
            $sql = "SELECT COUNT(1) FROM commentcoaching ";
            break;
        }

	}
?> 
