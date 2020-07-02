<?php 
	switch ($data->what) { 
        //******************user************************
        // user(id,phone,password,fullname,address,image,point)
        // Get all data from user
        case 100: {
            $sql = SELECT * FROM user;
            break;
        }

        // Insert data to user
        case 101: {
            $sql = INSERT INTO user(phone,password,fullname,address,image,point)
            		VALUES('$data->phone','$data->password','$data->fullname','$data->address','$data->image','$data->point');
            break;
        }

        // Update data user
        case 102: {
            $sql = UPDATE user SET phone='$data->phone', password='$data->password', fullname='$data->fullname', address='$data->address', image='$data->image', point = '$data->point'
            		WHERE id='$data->id';
            break;
        }

        // Delete data of user
        case 103: {
            $sql = DELETE FROM user
            		WHERE id IN($data->id);
            break;
        }

        // Find data with id user
        case 104: {
            $sql = SELECT * FROM user
            		WHERE id='$data->id';
            break;
        }

        // Select with pagination(offset, number-item-in-page) user
        case 105: {
            $sql = SELECT * FROM user
            		LIMIT $data->offset, $data->limit;
            break;
        }

        // Count number item of user
        case 106: {
            $sql = SELECT COUNT(1) FROM user ;
            break;
        }

	}
?> 
