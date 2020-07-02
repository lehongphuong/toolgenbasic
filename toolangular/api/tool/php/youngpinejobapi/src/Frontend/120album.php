<?php 
	switch ($data->what) { 
        //******************album************************
        // album(id,siteid,title,arrange,approved,lang,pathimage,description,postdate)
        // Get all data from album
        case 120: {
            $sql = "SELECT * FROM album 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						ORDER BY arrange";
            break;
        }

        // Insert data to album
        case 121: {
            $sql = "INSERT INTO album(siteid,title,arrange,approved,lang,pathimage,description,postdate)
            		VALUES('$data->siteid','$data->title','$data->arrange','$data->approved','$data->lang','$data->pathimage','$data->description','$data->postdate')";
            break;
        }

        // Update data album
        case 122: {
            $sql = "UPDATE album SET siteid='$data->siteid', title='$data->title', arrange='$data->arrange', approved='$data->approved', lang='$data->lang', pathimage='$data->pathimage', description='$data->description', postdate = '$data->postdate'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of album
        case 123: {
            $sql = "DELETE FROM album
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id album
        case 124: {
            $sql = "SELECT * FROM album
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) album
        case 125: {
            $sql = "SELECT * FROM album
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of album
        case 126: {
            $sql = "SELECT COUNT(1) FROM album ";
            break;
        }
		
		// select all item of album
        case 127: {
            $sql = "SELECT * FROM album
					WHERE approved=1";
            break;
        }
		
		// Find data with id album
        case 128: {
            $sql = "SELECT title FROM album
            		WHERE id='$data->id'";
            break;
        }

	}
?> 
