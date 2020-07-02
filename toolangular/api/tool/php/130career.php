<?php 
	switch ($data->what) { 
        //******************career************************
        // career(id,name)
        // Get all data from career
        case 130: {
            $sql = "SELECT * FROM career";
            break;
        }

        // Insert data to career
        case 131: {
            $sql = "INSERT INTO career(name)
            		VALUES('$data->name')";
            break;
        }

        // Update data career
        case 132: {
            $sql = "UPDATE career SET name = '$data->name'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of career
        case 133: {
            $sql = "DELETE FROM career
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id career
        case 134: {
            $sql = "SELECT * FROM career
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) career
        case 135: {
            $sql = "SELECT * FROM career
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of career
        case 136: {
            $sql = "SELECT COUNT(1) FROM career ";
            break;
        }

	}
?> 
