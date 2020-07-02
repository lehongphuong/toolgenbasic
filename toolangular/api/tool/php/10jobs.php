<?php 
	switch ($data->what) { 
        //******************jobs************************
        // jobs(id,idcompany,position,amountrecruitment,positionrecruitment,salary,asomission,addresswork,career,descriptionwork,benefit,exprience,academiclevel,sex,languagelevel,deadlineapply,requirementwork,requirementdocument,fullname,phone,email,positioncontact,point,startads,endads)
        // Get all data from jobs
        case 10: {
            $sql = "SELECT * FROM jobs";
            break;
        }

        // Insert data to jobs
        case 11: {
            $sql = "INSERT INTO jobs(idcompany,position,amountrecruitment,positionrecruitment,salary,asomission,addresswork,career,descriptionwork,benefit,exprience,academiclevel,sex,languagelevel,deadlineapply,requirementwork,requirementdocument,fullname,phone,email,positioncontact,point,startads,endads)
            		VALUES('$data->idcompany','$data->position','$data->amountrecruitment','$data->positionrecruitment','$data->salary','$data->asomission','$data->addresswork','$data->career','$data->descriptionwork','$data->benefit','$data->exprience','$data->academiclevel','$data->sex','$data->languagelevel','$data->deadlineapply','$data->requirementwork','$data->requirementdocument','$data->fullname','$data->phone','$data->email','$data->positioncontact','$data->point','$data->startads','$data->endads')";
            break;
        }

        // Update data jobs
        case 12: {
            $sql = "UPDATE jobs SET idcompany='$data->idcompany', position='$data->position', amountrecruitment='$data->amountrecruitment', positionrecruitment='$data->positionrecruitment', salary='$data->salary', asomission='$data->asomission', addresswork='$data->addresswork', career='$data->career', descriptionwork='$data->descriptionwork', benefit='$data->benefit', exprience='$data->exprience', academiclevel='$data->academiclevel', sex='$data->sex', languagelevel='$data->languagelevel', deadlineapply='$data->deadlineapply', requirementwork='$data->requirementwork', requirementdocument='$data->requirementdocument', fullname='$data->fullname', phone='$data->phone', email='$data->email', positioncontact='$data->positioncontact', point='$data->point', startads='$data->startads', endads = '$data->endads'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of jobs
        case 13: {
            $sql = "DELETE FROM jobs
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id jobs
        case 14: {
            $sql = "SELECT * FROM jobs
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) jobs
        case 15: {
            $sql = "SELECT * FROM jobs
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of jobs
        case 16: {
            $sql = "SELECT COUNT(1) FROM jobs ";
            break;
        }

	}
?> 
