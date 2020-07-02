<?php 
	switch ($data->what) { 
        //******************booking************************
        // booking(id,dateorder,timeorder,idservice,idemployee,status,startdate)
        // Get all data from booking
        case 500: {
            $sql = SELECT * FROM booking;
            break;
        }

        // Insert data to booking
        case 501: {
            $sql = INSERT INTO booking(dateorder,timeorder,idservice,idemployee,status,startdate)
            		VALUES('$data->dateorder','$data->timeorder','$data->idservice','$data->idemployee','$data->status','$data->startdate');
            break;
        }

        // Update data booking
        case 502: {
            $sql = UPDATE booking SET dateorder='$data->dateorder', timeorder='$data->timeorder', idservice='$data->idservice', idemployee='$data->idemployee', status='$data->status', startdate = '$data->startdate'
            		WHERE id='$data->id';
            break;
        }

        // Delete data of booking
        case 503: {
            $sql = DELETE FROM booking
            		WHERE id IN($data->id);
            break;
        }

        // Find data with id booking
        case 504: {
            $sql = SELECT * FROM booking
            		WHERE id='$data->id';
            break;
        }

        // Select with pagination(offset, number-item-in-page) booking
        case 505: {
            $sql = SELECT * FROM booking
            		LIMIT $data->offset, $data->limit;
            break;
        }

        // Count number item of booking
        case 506: {
            $sql = SELECT COUNT(1) FROM booking ;
            break;
        }

	}
?> 
