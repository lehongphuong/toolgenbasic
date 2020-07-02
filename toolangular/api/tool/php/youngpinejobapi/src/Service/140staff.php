<?php 
	switch ($data->what) { 
        //******************staff************************
        // staff(id,username,password,phone,born,address,sex,wokingstatus,role)
        // Get all data from staff
        case 140: {
            $sql = "SELECT * FROM staff";
            break;
        }

        // Insert data to staff
        case 141: {
            $sql = "INSERT INTO staff(username,password,phone,born,address,sex,wokingstatus,role)
            		VALUES('$data->username','$data->password','$data->phone','$data->born','$data->address','$data->sex','$data->wokingstatus','$data->role')";
            break;
        }

        // Update data staff
        case 142: {
            $sql = "UPDATE staff SET username='$data->username', password='$data->password', phone='$data->phone', born='$data->born', address='$data->address', sex='$data->sex', wokingstatus='$data->wokingstatus', role = '$data->role'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of staff
        case 143: {
            $sql = "DELETE FROM staff
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id staff
        case 144: {
            $sql = "SELECT * FROM staff
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) staff
        case 145: {
            $sql = "SELECT * FROM staff
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of staff
        case 146: {
            $sql = "SELECT COUNT(1) FROM staff ";
            break;
        }

	}
?> 
