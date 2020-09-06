#include<iostream>
#include<bits/stdc++.h>
//#include <boost/algorithm/string.hpp> 

using namespace std;

vector<string> split(string str,string delimiter){  
	vector<string> result;
	size_t pos = 0; 
	while ((pos = str.find(delimiter)) != string::npos) {
	   	result.push_back(str.substr(0, pos)); 
	    str.erase(0, pos + delimiter.length());
	} 
	result.push_back(str.substr(0, str.length()-1)); 
	return result;
}

string toSnakeCase(string pascalCase){
	int len = pascalCase.length();
	string output = "";
	if(pascalCase[0]<97){
		output += (pascalCase[0]+32); 
	}else{
		output += pascalCase[0];
	} 
	
	for(int i=1;i<len;i++){
		if(pascalCase[i]<97){
			output += "_";
			output += (pascalCase[i]+32);
		}else{
			output += pascalCase[i];
		}
	}
	return output;
}

void genView(string table){ 
	ofstream cout ("django-view.txt", ios_base::app);
	string tableSnakeCase = toSnakeCase(table);
	
	cout<<"# *********************************************	"<<endl;
	cout<<"# begin "<<table<<"	"<<endl;
	cout<<"@api_view(['POST'])	"<<endl;
	cout<<"@parser_classes((JSONParser,))	"<<endl;
	cout<<"# get all data from "<<table<<"	"<<endl;
	cout<<"def create_data_"<<tableSnakeCase<<"(request, format=None):	"<<endl;
	cout<<"    data = json.loads(json.dumps(request.data))	"<<endl;
	cout<<"    obj = models."<<table<<"(**data)	"<<endl;
	cout<<"    obj.save()	"<<endl;
	cout<<"    return Response({\"id\": obj.id, \"result\": \"ok\"})"<<endl;
	cout<<"	"<<endl;
	cout<<"	"<<endl;
	cout<<"@api_view(['POST'])	"<<endl;
	cout<<"@parser_classes((JSONParser,))	"<<endl;
	cout<<"# get all data from "<<table<<"	"<<endl;
	cout<<"def read_data_"<<tableSnakeCase<<"(request, format=None):	"<<endl;
	cout<<"    return Response(serializers.serialize(\"json\", models."<<table<<".objects.all()))	"<<endl;
	cout<<"	"<<endl;
	cout<<"	"<<endl;
	cout<<"@api_view(['POST'])	"<<endl;
	cout<<"@parser_classes((JSONParser,))	"<<endl;
	cout<<"# get update data from "<<table<<"	"<<endl;
	cout<<"def update_data_"<<tableSnakeCase<<"(request, format=None):	"<<endl;
	cout<<"    data = json.loads(json.dumps(request.data))	"<<endl;
	cout<<"    models."<<table<<"(**data).save()	"<<endl;
	cout<<"    return Response({\"result\": \"ok\"})	"<<endl;
	cout<<"	"<<endl;
	cout<<"	"<<endl;
	cout<<"@api_view(['POST'])	"<<endl;
	cout<<"@parser_classes((JSONParser,))	"<<endl;
	cout<<"# get delete data from "<<table<<"	"<<endl;
	cout<<"def delete_data_"<<tableSnakeCase<<"(request, format=None):	"<<endl;
	cout<<"    data = json.loads(json.dumps(request.data))	"<<endl;
	cout<<"    models."<<table<<"(**data).delete()	"<<endl;
	cout<<"    return Response({\"result\": \"ok\"})	"<<endl;
	cout<<"	"<<endl;
	cout<<"	"<<endl;
	cout<<"@api_view(['POST'])	"<<endl;
	cout<<"@parser_classes((JSONParser,))	"<<endl;
	cout<<"# get delete data from "<<table<<"	"<<endl;
	cout<<"def find_data_"<<tableSnakeCase<<"(request, format=None):	"<<endl;
	cout<<"    return Response(serializers.serialize(\"json\", models."<<table<<".objects.filter(pk=request.data['pk'])))	"<<endl;
	cout<<"	"<<endl;
	cout<<"# end "<<table<<"	"<<endl;
	cout<<"# *********************************************	"<<endl; 
	cout<<endl;
}

void genUrl(string table){
	string tableSnakeCase = toSnakeCase(table);
	ofstream cout("django-url.txt", ios_base::app);
	cout<<"    # *******************************************************	"<<endl;
	cout<<"    # begin "<<table<<"	"<<endl;
	cout<<"    path('create_data_"<<tableSnakeCase<<"', views.create_data_"<<tableSnakeCase<<", name='create_data_"<<tableSnakeCase<<"'), 	"<<endl;
	cout<<"    path('read_data_"<<tableSnakeCase<<"', views.read_data_"<<tableSnakeCase<<", name='read_data_"<<tableSnakeCase<<"'), 	"<<endl;
	cout<<"    path('update_data_"<<tableSnakeCase<<"', views.update_data_"<<tableSnakeCase<<", name='update_data_"<<tableSnakeCase<<"'), 	"<<endl;
	cout<<"    path('delete_data_"<<tableSnakeCase<<"', views.delete_data_"<<tableSnakeCase<<", name='delete_data_"<<tableSnakeCase<<"'),  	"<<endl;
	cout<<"    path('find_data_"<<tableSnakeCase<<"', views.find_data_"<<tableSnakeCase<<", name='find_data_"<<tableSnakeCase<<"'),  	"<<endl;
	cout<<"    # end "<<table<<"	"<<endl;
	cout<<"    # *******************************************************	"<<endl;
	cout<<endl;
}

int main(){
	ifstream cin ("input-django.txt");
	
	string s,temp,table, param1, param2, param3, param4;
	vector<string> result;
	int n;
	cin>>n; 
	while(n--){
		cin>>s; 
		table = s.substr(0,s.find("("));
		genView(table);
		genUrl(table); 
	}   
	 
	return 0;
}


