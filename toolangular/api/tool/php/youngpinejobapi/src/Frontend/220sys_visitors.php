<?php 
	switch ($data->what) { 
        //******************schedule************************
        // sys_visitors(visits,menuid,siteid,pageviews)
        // Get all data from schedule
        case 220: {
            $sql = "SELECT * FROM sys_visitors "; 
            break;
        } 
         
		// update visitor
		case 221: {
            $sql = "UPDATE sys_visitors SET visits = visits+1"; 
            break;
        } 
         
	}
?> 
