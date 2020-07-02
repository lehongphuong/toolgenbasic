<?php 
	switch ($data->what) { 
        //******************order************************
        // order(id,idproduct,iduser,status,startdate,amount)
        // Get all data from order
        case 700: {
            $sql = |SELECT * FROM order|;
            break;
        }

        // Insert data to order
        case 701: {
            $sql = |INSERT INTO order(idproduct,iduser,status,startdate,amount)
            		VALUES('$data->idproduct','$data->iduser','$data->status','$data->startdate','$data->amount')|;
            break;
        }

        // Update data order
        case 702: {
            $sql = |UPDATE order SET idproduct='$data->idproduct', iduser='$data->iduser', status='$data->status', startdate='$data->startdate', amount = '$data->amount'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of order
        case 703: {
            $sql = |DELETE FROM order
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id order
        case 704: {
            $sql = |SELECT * FROM order
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) order
        case 705: {
            $sql = |SELECT * FROM order
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of order
        case 706: {
            $sql = |SELECT COUNT(1) FROM order |;
            break;
        }

	}
?> 
