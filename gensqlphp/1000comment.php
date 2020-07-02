<?php 
	switch ($data->what) { 
        //******************comment************************
        // comment(id,idbooking,idemployee,iduser,startdate,rate,feedback)
        // Get all data from comment
        case 1000: {
            $sql = |SELECT * FROM comment|;
            break;
        }

        // Insert data to comment
        case 1001: {
            $sql = |INSERT INTO comment(idbooking,idemployee,iduser,startdate,rate,feedback)
            		VALUES('$data->idbooking','$data->idemployee','$data->iduser','$data->startdate','$data->rate','$data->feedback')|;
            break;
        }

        // Update data comment
        case 1002: {
            $sql = |UPDATE comment SET idbooking='$data->idbooking', idemployee='$data->idemployee', iduser='$data->iduser', startdate='$data->startdate', rate='$data->rate', feedback = '$data->feedback'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of comment
        case 1003: {
            $sql = |DELETE FROM comment
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id comment
        case 1004: {
            $sql = |SELECT * FROM comment
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) comment
        case 1005: {
            $sql = |SELECT * FROM comment
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of comment
        case 1006: {
            $sql = |SELECT COUNT(1) FROM comment |;
            break;
        }

	}
?> 
