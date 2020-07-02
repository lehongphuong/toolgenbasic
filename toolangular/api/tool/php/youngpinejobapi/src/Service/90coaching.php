<?php 
	switch ($data->what) { 
        //******************coaching************************
        // coaching(id,fullname,born,sex,phone,address,about,skill,avatar)
        // Get all data from coaching
        case 90: {
            $sql = "SELECT * FROM coaching";
            break;
        }

        // Insert data to coaching
        case 91: {
            $sql = "INSERT INTO coaching(fullname,born,sex,phone,address,about,skill,avatar)
            		VALUES('$data->fullname','$data->born','$data->sex','$data->phone','$data->address','$data->about','$data->skill','$data->avatar')";
            break;
        }

        // Update data coaching
        case 92: {
            $sql = "UPDATE coaching SET fullname='$data->fullname', born='$data->born', sex='$data->sex', phone='$data->phone', address='$data->address', about='$data->about', skill='$data->skill', avatar = '$data->avatar'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of coaching
        case 93: {
            $sql = "DELETE FROM coaching
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id coaching
        case 94: {
            $sql = "SELECT * FROM coaching
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) coaching
        case 95: {
            $sql = "SELECT * FROM coaching
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of coaching
        case 96: {
            $sql = "SELECT COUNT(1) FROM coaching ";
            break;
        }

	}
?> 
