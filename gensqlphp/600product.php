<?php 
	switch ($data->what) { 
        //******************product************************
        // product(id,image,productname,price,description,uselink,amount)
        // Get all data from product
        case 600: {
            $sql = |SELECT * FROM product|;
            break;
        }

        // Insert data to product
        case 601: {
            $sql = |INSERT INTO product(image,productname,price,description,uselink,amount)
            		VALUES('$data->image','$data->productname','$data->price','$data->description','$data->uselink','$data->amount')|;
            break;
        }

        // Update data product
        case 602: {
            $sql = |UPDATE product SET image='$data->image', productname='$data->productname', price='$data->price', description='$data->description', uselink='$data->uselink', amount = '$data->amount'
            		WHERE id='$data->id'|;
            break;
        }

        // Delete data of product
        case 603: {
            $sql = |DELETE FROM product
            		WHERE id IN($data->id)|;
            break;
        }

        // Find data with id product
        case 604: {
            $sql = |SELECT * FROM product
            		WHERE id='$data->id'|;
            break;
        }

        // Select with pagination(offset, number-item-in-page) product
        case 605: {
            $sql = |SELECT * FROM product
            		LIMIT $data->offset, $data->limit|;
            break;
        }

        // Count number item of product
        case 606: {
            $sql = |SELECT COUNT(1) FROM product |;
            break;
        }

	}
?> 
