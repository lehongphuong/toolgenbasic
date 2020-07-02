<?php 
	switch ($data->what) { 
        //******************service************************
        // service(id,name,price)
        // Get all data from service
        case 300: {
            $sql = |SELECT * FROM service|;
            break;
        }

        // Insert data to service
        case 301: {
            $sql = |INSERT INTO service(name,price)
            		VALUES('$data->name','$data->price')|;
            break;
        }

        // Update data service
        case 302: {
            $sql = |UPDATE service SET name='$data->name', price = '$data->price'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of service
        case 303: {
            $sql = |DELETE FROM service
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id service
        case 304: {
            $sql = |SELECT * FROM service
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) service
        case 305: {
            $sql = |SELECT * FROM service
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of service
        case 306: {
            $sql = |SELECT COUNT(1) FROM service |;
            break;
        }

	}
?> 
