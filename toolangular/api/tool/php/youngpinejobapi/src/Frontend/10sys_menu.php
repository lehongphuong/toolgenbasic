<?php 
	switch ($data->what) { 
        //******************sys_menu************************
        // sys_menu(id,ptypeid,siteid,title,keyword,arrange,position,approved,lang,url,intranet)
        // Get all data top sys_menu
        case 10: {
            $sql = "SELECT * FROM sys_menu 
					WHERE position like('%$data->position%')
						AND approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						ORDER BY arrange";
            break;
        }

        // Get all data main parent sys_menu
        case 11: {
            $sql = "SELECT * FROM sys_menu 
					WHERE position like('%$data->position%')
						AND ptypeid = '0'
						AND approved = '1'
						AND siteid='$data->siteid'
						AND lang='$data->lang'
						ORDER BY arrange";
            break;
        }
		
		// Get data main child sys_menu
		case 12: {
            $sql = "SELECT t2.*
					FROM sys_menu t1 
						LEFT JOIN sys_menu t2 ON t1.id = t2.ptypeid 
					WHERE t1.ptypeid = 0  
						AND t1.approved = '1'
						AND t2.approved = '1'
						AND t1.position like('%$data->position%')
						AND t1.lang ='$data->lang' 
						AND t1.siteid = '$data->siteid'
					ORDER BY t1.id, t1.arrange, t2.arrange";
            break;
        }
 

        // Delete data of sys_menu
        case 13: {
            $sql = "DELETE FROM sys_menu
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id sys_menu
        case 14: {
            $sql = "SELECT * FROM sys_menu
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) sys_menu
        case 15: {
            $sql = "SELECT * FROM sys_menu
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of sys_menu
        case 16: {
            $sql = "SELECT COUNT(1) FROM sys_menu ";
            break;
        }
		
		// select menu home
        case 17: {
			$sql = "SELECT id, title, keyword FROM sys_menu
					WHERE position LIKE '%2%' 
						AND ptypeid = 0 
						AND siteid = 1 
						AND lang = 'vn' 
						AND approved =1 
						ORDER BY arrange";
			break;
		}
	}
?> 
