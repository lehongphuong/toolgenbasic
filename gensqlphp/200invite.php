<?php 
	switch ($data->what) { 
        //******************invite************************
        // invite(id,iduser,idinvite,startdate)
        // Get all data from invite
        case 200: {
            $sql = |SELECT * FROM invite|;
            break;
        }

        // Insert data to invite
        case 201: {
            $sql = |INSERT INTO invite(iduser,idinvite,startdate)
            		VALUES('$data->iduser','$data->idinvite','$data->startdate')|;
            break;
        }

        // Update data invite
        case 202: {
            $sql = |UPDATE invite SET iduser='$data->iduser', idinvite='$data->idinvite', startdate = '$data->startdate'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of invite
        case 203: {
            $sql = |DELETE FROM invite
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id invite
        case 204: {
            $sql = |SELECT * FROM invite
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) invite
        case 205: {
            $sql = |SELECT * FROM invite
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of invite
        case 206: {
            $sql = |SELECT COUNT(1) FROM invite |;
            break;
        }

	}
?> 
