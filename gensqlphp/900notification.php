<?php 
	switch ($data->what) { 
        //******************notification************************
        // notification(id,title,description,startdate,status)
        // Get all data from notification
        case 900: {
            $sql = |SELECT * FROM notification|;
            break;
        }

        // Insert data to notification
        case 901: {
            $sql = |INSERT INTO notification(title,description,startdate,status)
            		VALUES('$data->title','$data->description','$data->startdate','$data->status')|;
            break;
        }

        // Update data notification
        case 902: {
            $sql = |UPDATE notification SET title='$data->title', description='$data->description', startdate='$data->startdate', status = '$data->status'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of notification
        case 903: {
            $sql = |DELETE FROM notification
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id notification
        case 904: {
            $sql = |SELECT * FROM notification
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) notification
        case 905: {
            $sql = |SELECT * FROM notification
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of notification
        case 906: {
            $sql = |SELECT COUNT(1) FROM notification |;
            break;
        }

	}
?> 
