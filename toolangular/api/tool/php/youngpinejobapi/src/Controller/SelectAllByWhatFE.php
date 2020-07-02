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
    // 10 sys_menu(id,ptypeid,siteid,title,keyword,arrange,position,approved,lang,url,intranet)
    // 20 sys_configsite(id,siteid,title,keywords,description,footer,approved,lang)
    // 30 sys_functions(id,title,typeid,arrange,icon,link)
    // 40 sys_member(id,maphongban,manhom,kyvanban,name,siteid,password,username,postdate,approved,level,permission,email)
    // 50 sys_attributes(id,title,approved,lang,groupid,keyword) 
    // 60 sys_sites(id,name,keyword,url,approved)
    // 70 sys_templates(id,siteid,title,folder,imagepath,approved)
    // 80 sys_banner(id,siteid,title,link,arrange,approved,lang,pathimage)
    // 90 contents(id,typeid,siteid,title,url,summary,content,pathfile,pathimage,comment,postdate,changedate,approved,lang,author)
    // 100 news(id,typeid,siteid,title,url,postdate,changedate,summary,content,pathimage,author,approved,comment,lang,isfocus,isNew,view)
    // 110 documents(id,typeid,siteid,title,url,content,pathfile,postdate,changedate,approved,lang,author)
    // 120 album(id,siteid,title,arrange,approved,lang,pathimage,description,postdate)
    // 130 photos(id,typeid,title,pathimage,postdate,approved,lang,arrange)
    // 140 supportonline(id,siteid,typeid,nick,name,approved,arrange,note,phone)
    // 150 contactus(id,siteid,title,content,approved,lang,email)
    // 160 weblink(id,siteid,title,link,approved,arrange,lang)
    // 170 feedbacks(id,siteid,name,email,phone,address,title,content,approved,lang,postdate,reply)
    // 180 trungcauykien(id)
    // 190 advertises_type(id,keyword,title,approved)
    // 200 advertises(id,siteid,title,pathimage,position,approved,arrange,link,lang)
    // 210 schedule(id,sdate,stime,content,stakeholder,location,host,approved,postdate,lang)
	// 220 sys_visitors(visits,menuid,siteid,pageviews)
	
	include "../Frontend/10sys_menu.php";
	include "../Frontend/20sys_configsite.php";
	include "../Frontend/30sys_functions.php";
	include "../Frontend/40sys_member.php";
	include "../Frontend/50sys_attributes.php";
	include "../Frontend/60sys_sites.php";
	include "../Frontend/70sys_templates.php";
	include "../Frontend/80sys_banner.php";
	include "../Frontend/90contents.php";
	include "../Frontend/100news.php";
	include "../Frontend/110documents.php";
	include "../Frontend/120album.php";
	include "../Frontend/130photos.php";
	include "../Frontend/140supportonline.php";
	include "../Frontend/150contactus.php";
	include "../Frontend/160weblink.php";
	include "../Frontend/170feedbacks.php";
	include "../Frontend/180trungcauykien.php";
	include "../Frontend/190advertises_type.php";
	include "../Frontend/200advertises.php";
	include "../Frontend/210schedule.php";
	include "../Frontend/220sys_visitors.php"; 
  
     
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
        echo "[]";
    }
}
$conn->close();
?>