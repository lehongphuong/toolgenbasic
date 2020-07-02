<?php 
	switch ($data->what) { 
        //******************package************************
        // package(id,idcoaching,name,price)
        // Get all data from package
        case 100: {
            $sql = "SELECT * FROM package";
            break;
        }

        // Insert data to package
        case 101: {
            $sql = "INSERT INTO package(idcoaching,name,price)
            		VALUES('$data->idcoaching','$data->name','$data->price')";
            break;
        }

        // Update data package
        case 102: {
            $sql = "UPDATE package SET idcoaching='$data->idcoaching', name='$data->name', price = '$data->price'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of package
        case 103: {
            $sql = "DELETE FROM package
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id package
        case 104: {
            $sql = "SELECT * FROM package
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) package
        case 105: {
            $sql = "SELECT * FROM package
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of package
        case 106: {
            $sql = "SELECT COUNT(1) FROM package ";
            break;
        }

	}
?> 
