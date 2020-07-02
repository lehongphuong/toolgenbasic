<?php 
	switch ($data->what) { 
        //******************company************************
        // company(id,email,password,avatar,fullname,phone,companyname,companyphone,personalscale,address,city,website,career,about,logo,bussinesslicence,position,personalemail,point,startads,endads,banner,pointbanner,startadsbanner,endadsbanner)
        // Get all data from company
        case 60: {
            $sql = "SELECT * FROM company";
            break;
        }

        // Insert data to company
        case 61: {
            $sql = "INSERT INTO company(email,password,avatar,fullname,phone,companyname,companyphone,personalscale,address,city,website,career,about,logo,bussinesslicence,position,personalemail,point,startads,endads,banner,pointbanner,startadsbanner,endadsbanner)
            		VALUES('$data->email','$data->password','$data->avatar','$data->fullname','$data->phone','$data->companyname','$data->companyphone','$data->personalscale','$data->address','$data->city','$data->website','$data->career','$data->about','$data->logo','$data->bussinesslicence','$data->position','$data->personalemail','$data->point','$data->startads','$data->endads','$data->banner','$data->pointbanner','$data->startadsbanner','$data->endadsbanner')";
            break;
        }

        // Update data company
        case 62: {
            $sql = "UPDATE company SET email='$data->email', password='$data->password', avatar='$data->avatar', fullname='$data->fullname', phone='$data->phone', companyname='$data->companyname', companyphone='$data->companyphone', personalscale='$data->personalscale', address='$data->address', city='$data->city', website='$data->website', career='$data->career', about='$data->about', logo='$data->logo', bussinesslicence='$data->bussinesslicence', position='$data->position', personalemail='$data->personalemail', point='$data->point', startads='$data->startads', endads='$data->endads', banner='$data->banner', pointbanner='$data->pointbanner', startadsbanner='$data->startadsbanner', endadsbanner = '$data->endadsbanner'
            		WHERE id='$data->id'";
            break;
        }

        // Delete data of company
        case 63: {
            $sql = "DELETE FROM company
            		WHERE id IN($data->id)";
            break;
        }

        // Find data with id company
        case 64: {
            $sql = "SELECT * FROM company
            		WHERE id='$data->id'";
            break;
        }

        // Select with pagination(offset, number-item-in-page) company
        case 65: {
            $sql = "SELECT * FROM company
            		LIMIT $data->offset, $data->limit";
            break;
        }

        // Count number item of company
        case 66: {
            $sql = "SELECT COUNT(1) FROM company ";
            break;
        }

	}
?> 
