<?php 
	switch ($data->what) { 
        //******************news************************
        // news(id,typeid,siteid,title,url,postdate,changedate,summary,content,pathimage,author,approved,comment,lang,isfocus,isNew,view)
        // Get all data from news
        case 100: {
            $sql = "SELECT id, typeid, siteid, title, url, postdate, changedate, summary, pathimage, view FROM news 
					WHERE approved = '1'				
						AND lang='$data->lang'
						AND siteid='$data->siteid'
						AND typeid='$data->typeid'
						ORDER BY postdate DESC
						LIMIT $data->offset, $data->limit"; 
            break;
        }

        // Get all data from news isfocus
        case 101: {
            $sql = "SELECT * FROM news 
					WHERE approved = '1'				
						AND isfocus='1'
						AND lang='$data->lang'
						AND siteid='$data->siteid' 
						ORDER BY postdate DESC
						LIMIT $data->offset, $data->limit"; 
            break;
        }

        // Find data with id news
        case 102: {
            $sql = "SELECT * FROM news
            		WHERE id='$data->id'";
            break;
        }
		
		case 103: {
            $sql = "SELECT id, typeid, siteid, title, url, postdate, changedate, summary, pathimage, view FROM news 
					WHERE approved = '1'				
						AND lang='$data->lang'
						AND siteid='$data->siteid'
						AND typeid IN(SELECT id FROM sys_menu WHERE ptypeid='$data->typeid')
						ORDER BY postdate DESC
						LIMIT $data->offset, $data->limit";  
            break;
        }
		
		case 104: {
            $sql = "SELECT id, typeid, siteid, title, url, postdate, changedate, summary, pathimage, view FROM news 
					WHERE approved = '1'				
						AND lang='$data->lang'
						AND siteid='$data->siteid'
						AND typeid IN(SELECT id FROM sys_menu WHERE ptypeid='$data->typeid')
						ORDER BY postdate DESC
						LIMIT $data->offset, $data->limit";  
            break;
        }
		
		
		// Get news related by typeid and id
        case 105: {
            $sql = "SELECT id, typeid, siteid, title, url, postdate, changedate, summary, pathimage, view 
					FROM news 
					WHERE approved = '1'				
						AND lang='$data->lang'
						AND siteid='$data->siteid'
						AND typeid='$data->typeid'
						AND id NOT IN('$data->id')
						ORDER BY postdate DESC
						LIMIT $data->offset, $data->limit";  
            break;
        }
		
		// update view of news
        case 106: {
            $sql = "UPDATE news SET view=view + 1 WHERE id = '$data->id' ";
			echo $sql;
            break;
        }
 
	}
?> 
