<?php 
	switch ($data->what) { 
        //******************contents************************
        // contents(id,typeid,siteid,title,url,summary,content,pathfile,pathimage,comment,postdate,changedate,approved,lang,author)
        // Count number item of contents
        case 90: {
            $sql = "SELECT count(1) as count FROM contents 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						AND typeid='$data->typeid'";
            break;
        }

        // select data item with count = 1
        case 91: {
            $sql = "SELECT * FROM contents 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						AND id='$data->id'";
            break;
        }
		
		// select data item with count = 1
        case 92: {
            $sql = "SELECT * FROM contents 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						AND typeid='$data->id'
						LIMIT 0,1"; 
            break;
        }

        // Select data with child
        case 93: {
            $sql = "SELECT id,typeid,title,url,summary,pathfile,pathimage,postdate FROM contents 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						AND typeid IN (SELECT id FROM sys_menu WHERE ptypeid='$data->typeid' ORDER BY arrange)
						";
            break;
        }
		
		// Select data with child
        case 94: {
            $sql = "SELECT id,typeid,title,url,summary,pathfile,pathimage,postdate FROM contents 
					WHERE approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						AND typeid IN (SELECT id FROM sys_menu WHERE ptypeid='$data->typeid' ORDER BY arrange)
						AND title LIKE ('%$data->title%')
						LIMIT $data->offset,$data->limit";
            break;
        }
		
		// update view of content
        case 95: {
            $sql = "UPDATE content SET view=view + 1 WHERE id = '$data->id' ";
            break;
        }

	}
?> 
