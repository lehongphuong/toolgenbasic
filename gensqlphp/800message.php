<?php 
	switch ($data->what) { 
        //******************message************************
        // message(id,iduser,idemployee,isuser,isemployee,content,startdate)
        // Get all data from message
        case 800: {
            $sql = |SELECT * FROM message|;
            break;
        }

        // Insert data to message
        case 801: {
            $sql = |INSERT INTO message(iduser,idemployee,isuser,isemployee,content,startdate)
            		VALUES('$data->iduser','$data->idemployee','$data->isuser','$data->isemployee','$data->content','$data->startdate')|;
            break;
        }

        // Update data message
        case 802: {
            $sql = |UPDATE message SET iduser='$data->iduser', idemployee='$data->idemployee', isuser='$data->isuser', isemployee='$data->isemployee', content='$data->content', startdate = '$data->startdate'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of message
        case 803: {
            $sql = |DELETE FROM message
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id message
        case 804: {
            $sql = |SELECT * FROM message
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) message
        case 805: {
            $sql = |SELECT * FROM message
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of message
        case 806: {
            $sql = |SELECT COUNT(1) FROM message |;
            break;
        }

	}
?> 
