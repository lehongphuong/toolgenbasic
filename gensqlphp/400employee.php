<?php 
	switch ($data->what) { 
        //******************employee************************
        // employee(id,fullname,phone,password,image,job,startworking,exp)
        // Get all data from employee
        case 400: {
            $sql = SELECT * FROM employee;
            break;
        }

        // Insert data to employee
        case 401: {
            $sql = INSERT INTO employee(fullname,phone,password,image,job,startworking,exp)
            		VALUES('$data->fullname','$data->phone','$data->password','$data->image','$data->job','$data->startworking','$data->exp');
            break;
        }

        // Update data employee
        case 402: {
            $sql = UPDATE employee SET fullname='$data->fullname', phone='$data->phone', password='$data->password', image='$data->image', job='$data->job', startworking='$data->startworking', exp = '$data->exp'
            		WHERE id='$data->id';
            break;
        }

        // Delete data of employee
        case 403: {
            $sql = DELETE FROM employee
            		WHERE id IN($data->id);
            break;
        }

        // Find data with id employee
        case 404: {
            $sql = SELECT * FROM employee
            		WHERE id='$data->id';
            break;
        }

        // Select with pagination(offset, number-item-in-page) employee
        case 405: {
            $sql = SELECT * FROM employee
            		LIMIT $data->offset, $data->limit;
            break;
        }

        // Count number item of employee
        case 406: {
            $sql = SELECT COUNT(1) FROM employee ;
            break;
        }

	}
?> 
