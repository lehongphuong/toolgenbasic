<?php 
	switch ($data->what) { 
        //******************candidate************************
        // candidate(id,email,password,avatar,fullname,phone,born,country,city,provine,address,sex,marriage,positionapply,academiclevel,yearsofexperience,workingplace,career,typeofwork,level,salary,minsalary,maxsalary,targetjob,descriptionstargetjob,school,department,certificate,specialized,classification,startadmission,endadmission,additioninfor,posisionold,companyold,startworked,endworked,descriptionsoldjob,descriptionskill,skill,language,infomation)
        // Get all data from candidate
        case 20: {
            $sql = "SELECT * FROM candidate";
            break;
        }

        // Insert data to candidate
        case 21: {
            $sql = "INSERT INTO candidate(email,password,avatar,fullname,phone,born,country,city,provine,address,sex,marriage,positionapply,academiclevel,yearsofexperience,workingplace,career,typeofwork,level,salary,minsalary,maxsalary,targetjob,descriptionstargetjob,school,department,certificate,specialized,classification,startadmission,endadmission,additioninfor,posisionold,companyold,startworked,endworked,descriptionsoldjob,descriptionskill,skill,language,infomation)
            		VALUES('$data->email','$data->password','$data->avatar','$data->fullname','$data->phone','$data->born','$data->country','$data->city','$data->provine','$data->address','$data->sex','$data->marriage','$data->positionapply','$data->academiclevel','$data->yearsofexperience','$data->workingplace','$data->career','$data->typeofwork','$data->level','$data->salary','$data->minsalary','$data->maxsalary','$data->targetjob','$data->descriptionstargetjob','$data->school','$data->department','$data->certificate','$data->specialized','$data->classification','$data->startadmission','$data->endadmission','$data->additioninfor','$data->posisionold','$data->companyold','$data->startworked','$data->endworked','$data->descriptionsoldjob','$data->descriptionskill','$data->skill','$data->language','$data->infomation')";
            break;
        }

        // Update data candidate
        case 22: {
            $sql = "UPDATE candidate SET email='$data->email', password='$data->password', avatar='$data->avatar', fullname='$data->fullname', phone='$data->phone', born='$data->born', country='$data->country', city='$data->city', provine='$data->provine', address='$data->address', sex='$data->sex', marriage='$data->marriage', positionapply='$data->positionapply', academiclevel='$data->academiclevel', yearsofexperience='$data->yearsofexperience', workingplace='$data->workingplace', career='$data->career', typeofwork='$data->typeofwork', level='$data->level', salary='$data->salary', minsalary='$data->minsalary', maxsalary='$data->maxsalary', targetjob='$data->targetjob', descriptionstargetjob='$data->descriptionstargetjob', school='$data->school', department='$data->department', certificate='$data->certificate', specialized='$data->specialized', classification='$data->classification', startadmission='$data->startadmission', endadmission='$data->endadmission', additioninfor='$data->additioninfor', posisionold='$data->posisionold', companyold='$data->companyold', startworked='$data->startworked', endworked='$data->endworked', descriptionsoldjob='$data->descriptionsoldjob', descriptionskill='$data->descriptionskill', skill='$data->skill', language='$data->language', infomation = '$data->infomation'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of candidate
        case 23: {
            $sql = "DELETE FROM candidate
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id candidate
        case 24: {
            $sql = "SELECT * FROM candidate
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) candidate
        case 25: {
            $sql = "SELECT * FROM candidate
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of candidate
        case 26: {
            $sql = "SELECT COUNT(1) FROM candidate ";
            break;
        }

	}
?> 
