<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
include "BaseConnection.php";
$data = json_decode(file_get_contents("php://input"));

//include "db.php";
$sql = "";
//$data = base64_decode("W29iamVjdCBPYmplY3Rd");
// echo json_encode($data);

// $param = file_get_contents("php://input");

// decode param data
for($i = 0; $i < 3; $i++){
    // $param = base64_decode($param); 
} 

// decode param data 

//$data = json_decode($param);
//$sql = $data; 

if (isset($data->what)) { 
    // jobs(id,idcompany,position,amountrecruitment,positionrecruitment,salary,asomission,addresswork,career,descriptionwork,benefit,exprience,academiclevel,sex,languagelevel,deadlineapply,requirementwork,requirementdocument,fullname,phone,email,positioncontact,point,startads,endads)
	// candidate(id,email,password,avatar,fullname,phone,born,country,city,provine,address,sex,marriage,positionapply,academiclevel,yearsofexperience,workingplace,career,typeofwork,level,salary,minsalary,maxsalary,targetjob,descriptionstargetjob,school,department,certificate,specialized,classification,startadmission,endadmission,additioninfor,posisionold,companyold,startworked,endworked,descriptionsoldjob,descriptionskill,skill,language,infomation)
	// applywork(id,idcandidate,idjobs,startdate,status)
	// applysave(id,idcandidate,idjobs,startdate) 
	// message(id,idcandidate,idcompany,startdate,content)
	// company(id,email,password,avatar,fullname,phone,companyname,companyphone,personalscale,address,city,point,website,career,about,logo,bussinesslicence,position,personalemail,point,startads,endads,banner,pointbanner,startadsbanner,endadsbanner)
	// candidatesave(id,idcandidate,idcompany,startdate)
	// candidateview(id,idcandidate,idcompany,startdate,phone,point)
	// coaching(id,fullname,born,sex,phone,address,about,skill,avatar)
	// package(id,idcoaching,name,price)
	// ordercoaching(id,idcoaching,idcandidate,idpackage,startdate,startconnect,statuspayment,amount)
	// commentcoaching(id,idcandidate,idcoaching,startdate,content,star,approve)
	// career(id,name)
	// staff(id,username,password,phone,born,address,sex,wokingstatus,role)
	
	include "../Service/10jobs.php";
	include "../Service/20candidate.php";
	include "../Service/30applywork.php";
	include "../Service/40applysave.php";
	include "../Service/50message.php";
	include "../Service/60company.php";
	include "../Service/70candidatesave.php";
	include "../Service/80candidateview.php";
	include "../Service/90coaching.php";
	include "../Service/100package.php";
	include "../Service/110ordercoaching.php";
	include "../Service/120commentcoaching.php";
	include "../Service/130career.php";
	include "../Service/140staff.php";
     
    // echo $sql."<br>";
    
    //excute sql 
    $result = $conn->query($sql);
    
    // echo json_encode($result);
    if (isset($result->num_rows) && ($result->num_rows > 0)) {
        // output data of each row 
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        } 
        echo json_encode($data);
    } else { 
        echo "{}";
    }
}
$conn->close();
?>