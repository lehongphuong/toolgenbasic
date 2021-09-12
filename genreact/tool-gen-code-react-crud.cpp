#include<iostream>
#include<bits/stdc++.h>
#include <string>   
#include <conio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h> 
#include <windows.h>
#include <stdio.h>

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


/**
* genModel
*/
void genService(string s, int ans){ 
	vector<string> result;
	string temp,table, param1, param2, param3, param4; 
	
	table = s.substr(0,s.find("("));
	temp = s.substr(s.find("(") +1 ,s.length()-1);
	result = split(temp,",");   
	param1 = s.substr(s.find(",") +1);
	param2 = "";
	param3 = "";
	param4 = "";
	 
	// convert number to string
	ostringstream ostream;
	ostream << ans; 
	
	string fileName = ostream.str() + table + ".php";
	ofstream cout (fileName.c_str());
	
	cout<<"<?php "<<endl;
	cout<<"	switch ($data->what) { "<<endl; 
	
	// get all data from table
	// select * from table 
	cout<<"        //******************"<<table<<"************************"<<endl;
	cout<<"        // "<<s<<endl;
	cout<<"        // Get all data from "<<table<<endl;
	cout<<"        case "<<ans<<": {"<<endl;
	cout<<"            $sql = \"SELECT * FROM "<<table<<"\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
		
	for(int i=1;i<result.size()-1;i++){
		// insert
		param2 += "'$data->"+result[i]+"',";  
		
		// update
		param3 += ""+result[i]+"='$data->"+result[i]+"', "; 
	} 
	
	// insert
	param2 += "'$data->"+result[result.size()-1]+"'"; 
	
	// updata
	param3 += ""+result[result.size()-1]+" = '$data->"+result[result.size()-1]+"'"; 
	
	// Insert data to table 
	cout<<"        // Insert data to "<<table<<endl;
	cout<<"        case "<<ans + 1<<": {"<<endl;
	cout<<"            $sql = \"INSERT INTO "<<table<<"("+param1+""<<endl;
	cout<<"            		VALUES("+param2+")\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	
	// Update data table 
	cout<<"        // Update data "<<table<<endl;
	cout<<"        case "<<ans + 2<<": {"<<endl;
	cout<<"            $sql = \"UPDATE "<<table<<" SET "+param3+""<<endl;
	cout<<"            		WHERE id='$data->id'\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	
	// Delete data from id
	cout<<"        // Delete data of "<<table<<endl;
	cout<<"        case "<<ans + 3<<": {"<<endl;
	cout<<"            $sql = \"DELETE FROM "<<table<<endl;
	cout<<"            		WHERE id IN($data->id)\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	
	// Find data with id
	cout<<"        // Find data with id "<<table<<endl;
	cout<<"        case "<<ans + 4<<": {"<<endl;
	cout<<"            $sql = \"SELECT * FROM "<<table<<endl;
	cout<<"            		WHERE id='$data->id'\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	
	// Select with pagination(offset, number-item-in-page)
	cout<<"        // Select with pagination(offset, number-item-in-page) "<<table<<endl;
	cout<<"        case "<<ans + 5<<": {"<<endl;
	cout<<"            $sql = \"SELECT * FROM "<<table<<endl;
	cout<<"            		LIMIT $data->offset, $data->limit\";"<<endl;
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	
	// Count number item of table
	cout<<"        // Count number item of "<<table<<endl;
	cout<<"        case "<<ans + 6<<": {"<<endl;
	cout<<"            $sql = \"SELECT COUNT(1) FROM "<<table<<" \";"<<endl; 
	cout<<"            break;"<<endl;
	cout<<"        }"<<endl<<endl;
	 
	cout<<"	}"<<endl;
	cout<<"?> "<<endl; 
}

void genAction(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	
	string fileName = "Reducers/" + tablePacal + "Action.js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"import types from \"./"<<tablePacal<<"Types\";                                                           "<<endl;
	cout<<"import axios from \"axios\";                                                                             "<<endl;
	cout<<"																										 "<<endl;
	cout<<"/**                                                                                                      "<<endl;
	cout<<" * create "<<tablePacal<<" Request                                                                       "<<endl;
	cout<<" * @param {*} form                                                                                       "<<endl;
	cout<<" * @returns                                                                                              "<<endl;
	cout<<" */                                                                                                      "<<endl;
	cout<<"export const create"<<tablePacal<<"Request = (form) => {                                                 "<<endl;
	cout<<"  return async (dispatch) => {                                                                           "<<endl;
	cout<<"    // setLoadings true                                                                                  "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": true, });              "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    try {                                                                                                "<<endl;
	cout<<"      const response = axios.post(\""<<tableLowcase<<"\", form);                                         "<<endl;
	cout<<"      const resData = await response;                                                                    "<<endl;
	cout<<"																										 "<<endl;
	cout<<"      if (resData.status) {                                                                              "<<endl;
	cout<<"        dispatch({                                                                                       "<<endl;
	cout<<"          type: types.CREATE_"<<tablePacalUpper<<",                                                      "<<endl;
	cout<<"        });                                                                                              "<<endl;
	cout<<"      }                                                                                                  "<<endl;
	cout<<"      // setLoadings false                                                                               "<<endl;
	cout<<"      dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": true, });            "<<endl;
	cout<<"    } catch (error) {                                                                                    "<<endl;
	cout<<"      throw error;                                                                                       "<<endl;
	cout<<"    }                                                                                                    "<<endl;
	cout<<"  };                                                                                                     "<<endl;
	cout<<"};                                                                                                       "<<endl;
	cout<<"																										 "<<endl;
	cout<<"/**                                                                                                      "<<endl;
	cout<<" * Get all "<<tablePacal<<" Request                                                                      "<<endl;
	cout<<" * @returns                                                                                              "<<endl;
	cout<<" */                                                                                                      "<<endl;
	cout<<"export const GetAll"<<tablePacal<<"Request = () => {                                                     "<<endl;
	cout<<"  return async (dispatch) => {                                                                           "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": false, });             "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    try {                                                                                                "<<endl;
	cout<<"      const response = await axios.get(\""<<tableLowcase<<"\");                                          "<<endl;
	cout<<"      const resData = await response.data;                                                               "<<endl;
	cout<<"      if (resData !== 200) {                                                                             "<<endl;
	cout<<"      }                                                                                                  "<<endl;
	cout<<"																										 "<<endl;
	cout<<"      dispatch({                                                                                         "<<endl;
	cout<<"        type: types.GET_ALL_"<<tablePacalUpper<<",                                                       "<<endl;
	cout<<"        cars: resData."<<tableLowcase<<"s,                                                               "<<endl;
	cout<<"      });                                                                                                "<<endl;
	cout<<"    } catch (error) {                                                                                    "<<endl;
	cout<<"      throw error;                                                                                       "<<endl;
	cout<<"    }                                                                                                    "<<endl;
	cout<<"  };                                                                                                     "<<endl;
	cout<<"};                                                                                                       "<<endl;
	cout<<"																										 "<<endl;
	cout<<"/**                                                                                                      "<<endl;
	cout<<" * get "<<tablePacal<<" By Id                                                                            "<<endl;
	cout<<" * @param {*} id                                                                                         "<<endl;
	cout<<" * @returns                                                                                              "<<endl;
	cout<<" */                                                                                                      "<<endl;
	cout<<"export const get"<<tablePacal<<"ByIdRequest = (id) => {                                                  "<<endl;
	cout<<"  return async (dispatch) => {                                                                           "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": false, });             "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    try {                                                                                                "<<endl;
	cout<<"      // call get "<<tablePacal<<" by id                                                                 "<<endl;
	cout<<"      const response = await axios.get(`"<<tableLowcase<<"/${id}`);                                      "<<endl;
	cout<<"																										 "<<endl;
	cout<<"      dispatch({ type: types.GET_BY_ID_"<<tablePacalUpper<<", car: response.data."<<tableLowcase<<" });  "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    } catch (error) {                                                                                    "<<endl;
	cout<<"      throw error;                                                                                       "<<endl;
	cout<<"    }                                                                                                    "<<endl;
	cout<<"  };                                                                                                     "<<endl;
	cout<<"};                                                                                                       "<<endl;
	cout<<"																										 "<<endl;
	cout<<"/**                                                                                                      "<<endl;
	cout<<" * update "<<tablePacal<<" Request                                                                       "<<endl;
	cout<<" * @param {*} form                                                                                       "<<endl;
	cout<<" * @param {*} id                                                                                         "<<endl;
	cout<<" * @returns                                                                                              "<<endl;
	cout<<" */                                                                                                      "<<endl;
	cout<<"export const update"<<tablePacal<<"Request = (form, id) => {                                             "<<endl;
	cout<<"  return async (dispatch) => {                                                                           "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": false, });             "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    try {                                                                                                "<<endl;
	cout<<"      // call update "<<tablePacal<<"                                                                    "<<endl;
	cout<<"      const response = axios.put(`"<<tableLowcase<<"/${id}`, form);                                      "<<endl;
	cout<<"      const resData = await response;                                                                    "<<endl;
	cout<<"																										 "<<endl;
	cout<<"      if (resData.status) {                                                                              "<<endl;
	cout<<"        // update status when update                                                                     "<<endl;
	cout<<"        dispatch({                                                                                       "<<endl;
	cout<<"          type: types.UPDATE_"<<tablePacalUpper<<",                                                      "<<endl;
	cout<<"        });                                                                                              "<<endl;
	cout<<"      }                                                                                                  "<<endl;
	cout<<"    } catch (error) {                                                                                    "<<endl;
	cout<<"      throw error;                                                                                       "<<endl;
	cout<<"    }                                                                                                    "<<endl;
	cout<<"  };                                                                                                     "<<endl;
	cout<<"};                                                                                                       "<<endl;
	cout<<"																										 "<<endl;
	cout<<"/**                                                                                                      "<<endl;
	cout<<" * delete "<<tablePacal<<" Request                                                                       "<<endl;
	cout<<" * @param {*} id                                                                                         "<<endl;
	cout<<" * @returns                                                                                              "<<endl;
	cout<<" */                                                                                                      "<<endl;
	cout<<"export const delete"<<tablePacal<<"Request = (id) => async (dispatch) => {                               "<<endl;
	cout<<"  try {                                                                                                  "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": true, });              "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    // call delete "<<tablePacal<<"                                                                      "<<endl;
	cout<<"    const response = axios.delete(`"<<tableLowcase<<"/${id}`);                                           "<<endl;
	cout<<"    const resData = await response;                                                                      "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    if (resData) {                                                                                       "<<endl;
	cout<<"      // call load data after delete                                                                     "<<endl;
	cout<<"      dispatch(GetAll"<<tablePacal<<"Request());                                                         "<<endl;
	cout<<"    }                                                                                                    "<<endl;
	cout<<"																										 "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": false, });             "<<endl;
	cout<<"  } catch (e) {                                                                                          "<<endl;
	cout<<"    console.error(e);                                                                                    "<<endl;
	cout<<"    dispatch({ type: types.SET_LOADING_"<<tablePacalUpper<<", "<<tableLowcase<<": false, });             "<<endl;
	cout<<"  }                                                                                                      "<<endl;
	cout<<"};                                                                                                       "<<endl;  
	
}

void genReducer(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	
	string fileName = "Reducers/" + tablePacal + "Reducer.js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"import _ from \"lodash\";                                                                      "<<endl;
	cout<<"import types from \"./"<<tablePacal<<"Types\";                                                 "<<endl;
	cout<<"																							   "<<endl;
	cout<<"const initialState = {                                                                         "<<endl;
	cout<<"  isLoading: false,                                                                            "<<endl;
	cout<<"  "<<tableLowcase<<"s: [],                                                                     "<<endl;
	cout<<"  "<<tableLowcase<<": {}                                                                       "<<endl;
	cout<<"};                                                                                             "<<endl;
	cout<<"																							   "<<endl;
	cout<<"const "<<tablePacal<<"Reducer = (state = initialState, action) => {                            "<<endl;
	cout<<"  switch (action.type) {                                                                       "<<endl;
	cout<<"    case types.SET_LOADING_"<<tablePacalUpper<<":                                              "<<endl;
	cout<<"      return { ...state, isLoading: true };                                                    "<<endl;
	cout<<"																							   "<<endl;
	cout<<"    case types.CREATE_"<<tablePacalUpper<<":                                                   "<<endl;
	cout<<"      return {                                                                                 "<<endl;
	cout<<"        ...state,                                                                              "<<endl;
	cout<<"        isLoading: false,                                                                      "<<endl;
	cout<<"      };                                                                                       "<<endl;
	cout<<"																							   "<<endl;
	cout<<"    case types.GET_ALL_"<<tablePacalUpper<<":                                                  "<<endl;
	cout<<"      return { ...state, "<<tableLowcase<<"s: action."<<tableLowcase<<"s, isLoading: false };  "<<endl;
	cout<<"																							   "<<endl;
	cout<<"    case types.GET_BY_ID_"<<tablePacalUpper<<":                                                "<<endl;
	cout<<"      return { ...state, "<<tableLowcase<<": action."<<tableLowcase<<", isLoading: false };    "<<endl;
	cout<<"																							   "<<endl;
	cout<<"    case types.UPDATE_"<<tablePacalUpper<<":                                                   "<<endl;
	cout<<"      return {                                                                                 "<<endl;
	cout<<"        ...state,                                                                              "<<endl;
	cout<<"        isLoading: false,                                                                      "<<endl;
	cout<<"      };                                                                                       "<<endl;
	cout<<"																							   "<<endl;
	cout<<"    default:                                                                                   "<<endl;
	cout<<"      return state;                                                                            "<<endl;
	cout<<"  }                                                                                            "<<endl;
	cout<<"};                                                                                             "<<endl;
	cout<<"																							   "<<endl;
	cout<<"export default "<<tablePacal<<"Reducer;                                                        "<<endl;
}


void genTypes(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Reducers/" + tablePacal + "Types.js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"export default {                                                         "<<endl;
	cout<<"  SET_LOADING_"<<tablePacalUpper<<": \"SET_LOADING_"<<tablePacalUpper<<"\",  "<<endl;
	cout<<"  CREATE_"<<tablePacalUpper<<": \"CREATE_"<<tablePacalUpper<<"\",            "<<endl;
	cout<<"  GET_ALL_"<<tablePacalUpper<<": \"GET_ALL_"<<tablePacalUpper<<"\",          "<<endl;
	cout<<"  GET_BY_ID_"<<tablePacalUpper<<": \"GET_BY_ID_"<<tablePacalUpper<<"\",          "<<endl;
	cout<<"  UPDATE_"<<tablePacalUpper<<": \"UPDATE_"<<tablePacalUpper<<"\",            "<<endl;
	cout<<"};                                                                       "<<endl;

 
}

void genPageList(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/List" + tablePacal + ".js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"import React from \'react\';                                                "<<endl;
	cout<<"import { Header, List"<<tablePacal<<", BoxSearch } from \'./components\';   "<<endl;
	cout<<"																			"<<endl;
	cout<<"/**                                                                         "<<endl;
	cout<<" * "<<tablePacal<<"                                                         "<<endl;
	cout<<" * @param {*} props                                                         "<<endl;
	cout<<" * @returns                                                                 "<<endl;
	cout<<" */                                                                         "<<endl;
	cout<<"const List"<<tablePacal<<" = (props) => {                                   "<<endl;
	cout<<"  return (                                                                  "<<endl;
	cout<<"    <>                                                                      "<<endl;
	cout<<"      <Header />                                                            "<<endl;
	cout<<"      <BoxSearch />                                                         "<<endl;
	cout<<"      <List"<<tablePacal<<" />                                              "<<endl;
	cout<<"    </>                                                                     "<<endl;
	cout<<"  );                                                                        "<<endl;
	cout<<"};                                                                          "<<endl;
	cout<<"																			"<<endl;
	cout<<"List"<<tablePacal<<".propTypes = {};                                        "<<endl;
	cout<<"																			"<<endl;
	cout<<"export default List"<<tablePacal<<";                                        "<<endl;    
}

void genPageCreate(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/Create" + tablePacal + ".js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"import React from \"react\";                                                                                                          "<<endl;
	cout<<"import { useDispatch } from \"react-redux\";                                                                                          "<<endl;
	cout<<"import { useHistory } from \"react-router-dom\";                                                                                      "<<endl;
	cout<<"import { create"<<tablePacal<<"Request } from \"../../../reducers/qly-"<<tableLowcase<<"/"<<tablePacal<<"/"<<tablePacal<<"Action\";   "<<endl;
	cout<<"import CreateForm"<<tablePacal<<" from \"./components/CreateForm"<<tablePacal<<"\";                                                   "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"/**                                                                                                                                   "<<endl;
	cout<<" * Create"<<tablePacal<<"                                                                                                             "<<endl;
	cout<<" * @param {*} props                                                                                                                   "<<endl;
	cout<<" * @returns                                                                                                                           "<<endl;
	cout<<" */                                                                                                                                   "<<endl;
	cout<<"const Create"<<tablePacal<<" = (props) => {                                                                                           "<<endl;
	cout<<"  const dispatch = useDispatch();                                                                                                     "<<endl;
	cout<<"  let history = useHistory();                                                                                                         "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"  /**                                                                                                                                 "<<endl;
	cout<<"   * submit                                                                                                                           "<<endl;
	cout<<"   * @param {*} values                                                                                                                "<<endl;
	cout<<"   */                                                                                                                                 "<<endl;
	cout<<"  const submit = async (values) => {                                                                                                  "<<endl;
	cout<<"    try {                                                                                                                             "<<endl;
	cout<<"      // create data when click button add                                                                                            "<<endl;
	cout<<"      await dispatch(create"<<tablePacal<<"Request(values));                                                                          "<<endl;
	cout<<"      history.goBack();                                                                                                               "<<endl;
	cout<<"    } catch (error) {                                                                                                                 "<<endl;
	cout<<"      alert(error);                                                                                                                   "<<endl;
	cout<<"    }                                                                                                                                 "<<endl;
	cout<<"  };                                                                                                                                  "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"  return (                                                                                                                            "<<endl;
	cout<<"    <>                                                                                                                                "<<endl;
	cout<<"      <h1>Thêm m?i "<<tableLowcase<<"</h1>                                                                                            "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"      <CreateForm"<<tablePacal<<" onSubmit={submit} />                                                                                "<<endl;
	cout<<"    </>                                                                                                                               "<<endl;
	cout<<"  );                                                                                                                                  "<<endl;
	cout<<"};                                                                                                                                    "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"Create"<<tablePacal<<".propTypes = {};                                                                                                "<<endl;
	cout<<"																																	  "<<endl;
	cout<<"export default Create"<<tablePacal<<";                                                                                                "<<endl;
  
}

void genPageUpdate(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/Update" + tablePacal + ".js";
	ofstream cout (fileName.c_str());
	  
	// Count number item of table
	cout<<"import React, { useEffect } from \"react\";                                                                          "<<endl;
	cout<<"import { useDispatch, useSelector } from \"react-redux\";                                                            "<<endl;
	cout<<"import { useHistory } from \"react-router-dom\";                                                                     "<<endl;
	cout<<"import {                                                                                                             "<<endl;
	cout<<"  get"<<tablePacal<<"ByIdRequest,                                                                                    "<<endl;
	cout<<"  update"<<tablePacal<<"Request,                                                                                     "<<endl;
	cout<<"} from \"../../../reducers/qly-"<<tableLowcase<<"/"<<tablePacal<<"/"<<tablePacal<<"Action\";                         "<<endl;
	cout<<"import UpdateForm"<<tablePacal<<" from \"./components/UpdateForm"<<tablePacal<<"\";                                  "<<endl;
	cout<<"																													 "<<endl;
	cout<<"/**                                                                                                                  "<<endl;
	cout<<" * Update "<<tablePacal<<"                                                                                           "<<endl;
	cout<<" * @param {*} props                                                                                                  "<<endl;
	cout<<" * @returns                                                                                                          "<<endl;
	cout<<" */                                                                                                                  "<<endl;
	cout<<"const Update"<<tablePacal<<" = (props) => {                                                                          "<<endl;
	cout<<"  /**                                                                                                                "<<endl;
	cout<<"   * url id                                                                                                          "<<endl;
	cout<<"   */                                                                                                                "<<endl;
	cout<<"  var query = window.location.pathname.split(\"/\");                                                                 "<<endl;
	cout<<"  var id = query[query.length - 1];                                                                                  "<<endl;
	cout<<"																													 "<<endl;
	cout<<"  const dispatch = useDispatch();                                                                                    "<<endl;
	cout<<"  const "<<tableLowcase<<" = useSelector((state) => state."<<tableLowcase<<"."<<tableLowcase<<");                    "<<endl;
	cout<<"  const loading = useSelector((state) => state."<<tableLowcase<<".isLoading);                                        "<<endl;
	cout<<"  let history = useHistory();                                                                                        "<<endl;
	cout<<"																													 "<<endl;
	cout<<"  /**                                                                                                                "<<endl;
	cout<<"   * get by id                                                                                                       "<<endl;
	cout<<"   */                                                                                                                "<<endl;
	cout<<"  useEffect(() => {                                                                                                  "<<endl;
	cout<<"    const fetching = async () => {                                                                                   "<<endl;
	cout<<"      try {                                                                                                          "<<endl;
	cout<<"        await dispatch(get"<<tablePacal<<"ByIdRequest(id));                                                          "<<endl;
	cout<<"      } catch (error) {                                                                                              "<<endl;
	cout<<"        alert(error);                                                                                                "<<endl;
	cout<<"      }                                                                                                              "<<endl;
	cout<<"    };                                                                                                               "<<endl;
	cout<<"    fetching();                                                                                                      "<<endl;
	cout<<"  }, []);                                                                                                            "<<endl;
	cout<<"																													 "<<endl;
	cout<<"  /**                                                                                                                "<<endl;
	cout<<"   * submit                                                                                                          "<<endl;
	cout<<"   * @param {*} values                                                                                               "<<endl;
	cout<<"   */                                                                                                                "<<endl;
	cout<<"  const submit = async (values) => {                                                                                 "<<endl;
	cout<<"    try {                                                                                                            "<<endl;
	cout<<"      // update "<<tableLowcase<<" when click button submit                                                          "<<endl;
	cout<<"      await dispatch(update"<<tablePacal<<"Request(values, id));                                                     "<<endl;
	cout<<"      history.goBack();                                                                                              "<<endl;
	cout<<"    } catch (error) {                                                                                                "<<endl;
	cout<<"      alert(error);                                                                                                  "<<endl;
	cout<<"    }                                                                                                                "<<endl;
	cout<<"  };                                                                                                                 "<<endl;
	cout<<"																													 "<<endl;
	cout<<"  return (                                                                                                           "<<endl;
	cout<<"    <>                                                                                                               "<<endl;
	cout<<"      <h1>C?p nh?p thông tin "<<tableLowcase<<"</h1>                                                                 "<<endl;
	cout<<"      {!loading && <UpdateForm"<<tablePacal<<" onSubmit={submit} "<<tableLowcase<<"={"<<tableLowcase<<"} />}         "<<endl;
	cout<<"    </>                                                                                                              "<<endl;
	cout<<"  );                                                                                                                 "<<endl;
	cout<<"};                                                                                                                   "<<endl;
	cout<<"export default Update"<<tablePacal<<";                                                                               "<<endl;
}

void genPageIndex(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	string fileName = "Pages/index.js";
	ofstream cout (fileName.c_str());
	   
	cout<<"export { default as List"<<tablePacal<<" } from \"./List"<<tablePacal<<"\"; "<<endl;   
}



void genPageComponentBoxSearch(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	string fileName = "Pages/components/BoxSearch.js";
	ofstream cout (fileName.c_str());
	   
	cout<<"export { default as "<<tablePacal<<"} from \"./"<<tablePacal<<"\";"<<endl;   
}


void genPageComponentCreateFormXe(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	string fileName = "Pages/components/CreateForm"+tablePacal+".js";
	ofstream cout (fileName.c_str());
	   
	cout<<"import { Button, makeStyles, Paper } from \"@material-ui/core\";                                                         "<<endl;
	cout<<"import Grid from \"@material-ui/core/Grid\";                                                                             "<<endl;
	cout<<"import { ComboBoxField, TextField } from \"../../../../components\";                                                     "<<endl;
	cout<<"import { reduxForm, Field } from \"redux-form\";                                                                         "<<endl;
	cout<<"import { useHistory } from \"react-router-dom\";                                                                         "<<endl;
	cout<<"import React, { useEffect } from \"react\";                                                                              "<<endl;
	cout<<"import { useDispatch, useSelector } from \"react-redux\";                                                                "<<endl;
	cout<<"import { get as _get } from \"lodash\";                                                                                  "<<endl;
	cout<<"																														 "<<endl;
	cout<<"/**                                                                                                                      "<<endl;
	cout<<" * useStyles                                                                                                             "<<endl;
	cout<<" */                                                                                                                      "<<endl;
	cout<<"const useStyles = makeStyles((theme) => ({                                                                               "<<endl;
	cout<<"  button: {                                                                                                              "<<endl;
	cout<<"    marginRight: 10,                                                                                                     "<<endl;
	cout<<"  },                                                                                                                     "<<endl;
	cout<<"  link: {                                                                                                                "<<endl;
	cout<<"    textDecoration: \"none\",                                                                                            "<<endl;
	cout<<"  },                                                                                                                     "<<endl;
	cout<<"  form: {                                                                                                                "<<endl;
	cout<<"    marginLeft: 20,                                                                                                      "<<endl;
	cout<<"  },                                                                                                                     "<<endl;
	cout<<"}));                                                                                                                     "<<endl;
	cout<<"																														 "<<endl;
	cout<<"/**                                                                                                                      "<<endl;
	cout<<" * CreateForm"<<tablePacal<<"                                                                                                          "<<endl;
	cout<<" * @param {*} props                                                                                                      "<<endl;
	cout<<" * @returns                                                                                                              "<<endl;
	cout<<" */                                                                                                                      "<<endl;
	cout<<"const CreateForm"<<tablePacal<<" = (props) => {                                                                                        "<<endl;
	cout<<"  const { handleSubmit } = props;                                                                                        "<<endl;
	cout<<"  const classes = useStyles();                                                                                           "<<endl;
	cout<<"  let history = useHistory();                                                                                            "<<endl;
	cout<<"																														 "<<endl;
	cout<<"  const dispatch = useDispatch();                                                                                        "<<endl;
	cout<<"																														 "<<endl;
	cout<<"  // listen data loai "<<tableLowcase<<" of grid                                                                         "<<endl;
	cout<<"  const loai"<<tablePacal<<"s = useSelector((state) => _get(state, \""<<tableLowcase<<".loai"<<tablePacal<<"s\", []));   "<<endl;
	cout<<"  const loaiNhienLieus = useSelector((state) => _get(state, \""<<tableLowcase<<".loaiNLs\", []));                        "<<endl;
	cout<<"  console.log(loaiNhienLieus);                                                                                           "<<endl;
	cout<<"																														 "<<endl;
	cout<<"  /**                                                                                                                    "<<endl;
	cout<<"   * handerBack                                                                                                          "<<endl;
	cout<<"   */                                                                                                                    "<<endl;
	cout<<"  const handerBack = () => {                                                                                             "<<endl;
	cout<<"    history.goBack();                                                                                                    "<<endl;
	cout<<"  };                                                                                                                     "<<endl;
	cout<<"																														 "<<endl;
	cout<<"  /**                                                                                                                    "<<endl;
	cout<<"   * Get "<<tablePacal<<" Request                                                                                        "<<endl;
	cout<<"   */                                                                                                                    "<<endl;
	cout<<"  useEffect(() => {                                                                                                      "<<endl;
	cout<<"    dispatch(getLoai"<<tablePacal<<"Request());                                                                          "<<endl;
	cout<<"    dispatch(getLoaiNhienLieuRequest());                                                                                 "<<endl;
	cout<<"  }, []);                                                                                                                "<<endl;
	cout<<"																														 "<<endl;
	cout<<"  return (                                                                                                               "<<endl;
	cout<<"    <React.Fragment>                                                                                                     "<<endl;
	cout<<"      <Paper>                                                                                                            "<<endl;
	cout<<"        <form onSubmit={handleSubmit} className={classes.form}>                                                          "<<endl;
	cout<<"          <Grid container spacing={3}>                                                                                   "<<endl;
	cout<<"            <Grid item xs={12} sm={6}>                                                                                   "<<endl;
	cout<<"              <Field                                                                                                     "<<endl;
	cout<<"                variant=\"outlined\"                                                                                     "<<endl;
	cout<<"                margin=\"normal\"                                                                                        "<<endl;
	cout<<"                required                                                                                                 "<<endl;
	cout<<"                fullWidth                                                                                                "<<endl;
	cout<<"                id=\"bienSo"<<tablePacal<<"\"                                                                            "<<endl;
	cout<<"                label=\"Bi?n S? "<<tableLowcase<<"\"                                                                     "<<endl;
	cout<<"                name=\"bienSo"<<tablePacal<<"\"                                                                          "<<endl;
	cout<<"                autoComplete=\"Bi?n S? "<<tablePacal<<"\"                                                                "<<endl;
	cout<<"                autoFocus                                                                                                "<<endl;
	cout<<"                component={TextField}                                                                                    "<<endl;
	cout<<"              />                                                                                                         "<<endl;
	cout<<"            </Grid>                                                                                                      "<<endl;
	cout<<"																														 "<<endl;
	cout<<"            <Grid item xs={12} sm={6}>                                                                                   "<<endl;
	cout<<"              <Button                                                                                                    "<<endl;
	cout<<"                variant=\"contained\"                                                                                    "<<endl;
	cout<<"                color=\"primary\"                                                                                        "<<endl;
	cout<<"                onClick={handerBack}                                                                                     "<<endl;
	cout<<"                className={classes.button}>H?y</Button>                                                                  "<<endl;
	cout<<"              <Button variant=\"contained\" type=\"submit\" color=\"secondary\"> Luu </Button>                           "<<endl;
	cout<<"            </Grid>                                                                                                      "<<endl;
	cout<<"          </Grid>                                                                                                        "<<endl;
	cout<<"        </form>                                                                                                          "<<endl;
	cout<<"      </Paper>                                                                                                           "<<endl;
	cout<<"    </React.Fragment>                                                                                                    "<<endl;
	cout<<"  );                                                                                                                     "<<endl;
	cout<<"};                                                                                                                       "<<endl;
	cout<<"export default reduxForm({                                                                                               "<<endl;
	cout<<"  form: \"CreateForm"<<tablePacal<<"\"                                                                                   "<<endl;
	cout<<"})(CreateForm"<<tablePacal<<");                                                                                          "<<endl;
}

void genPageComponentHeader(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/components/Header.js";
	ofstream cout (fileName.c_str());
	   
	cout<<"import Button from \"@material-ui/core/Button\";                                                  "<<endl;
	cout<<"import { makeStyles } from \"@material-ui/core/styles\";                                          "<<endl;
	cout<<"import Typography from \"@material-ui/core/Typography\";                                          "<<endl;
	cout<<"import Paper from \"@material-ui/core/Paper\";                                                    "<<endl;
	cout<<"import React from \"react\";                                                                      "<<endl;
	cout<<"import { Link } from \"react-router-dom\";                                                        "<<endl;
	cout<<"																								  "<<endl;
	cout<<"/**                                                                                               "<<endl;
	cout<<" * make Styles                                                                                    "<<endl;
	cout<<" */                                                                                               "<<endl;
	cout<<"const useStyles = makeStyles((theme) => ({                                                        "<<endl;
	cout<<"  container: {                                                                                    "<<endl;
	cout<<"    display: \"flex\",                                                                            "<<endl;
	cout<<"    justifyContent: \"space-between\",                                                            "<<endl;
	cout<<"    backgroundColor: \"white\",                                                                   "<<endl;
	cout<<"    alignItems: \"center\",                                                                       "<<endl;
	cout<<"    padding: \"7px 15px\",                                                                        "<<endl;
	cout<<"    borderRadius: \"3px\",                                                                        "<<endl;
	cout<<"    marginBottom: theme.spacing(2),                                                               "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  root: {                                                                                         "<<endl;
	cout<<"    padding: \"2px 4px\",                                                                         "<<endl;
	cout<<"    display: \"flex\",                                                                            "<<endl;
	cout<<"    alignItems: \"center\",                                                                       "<<endl;
	cout<<"    width: 300,                                                                                   "<<endl;
	cout<<"    marginBottom: theme.spacing(2),                                                               "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  input: {                                                                                        "<<endl;
	cout<<"    marginLeft: theme.spacing(1),                                                                 "<<endl;
	cout<<"    flex: 1,                                                                                      "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  iconButton: {                                                                                   "<<endl;
	cout<<"    padding: 10,                                                                                  "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  divider: {                                                                                      "<<endl;
	cout<<"    height: 28,                                                                                   "<<endl;
	cout<<"    margin: 4,                                                                                    "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  paddingButton: {                                                                                "<<endl;
	cout<<"    marginRight: theme.spacing(1),                                                                "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"  link: {                                                                                         "<<endl;
	cout<<"    textDecoration: \"none\",                                                                     "<<endl;
	cout<<"  },                                                                                              "<<endl;
	cout<<"}));                                                                                              "<<endl;
	cout<<"																								  "<<endl;
	cout<<"/**                                                                                               "<<endl;
	cout<<" * Header                                                                                         "<<endl;
	cout<<" * @returns                                                                                       "<<endl;
	cout<<" */                                                                                               "<<endl;
	cout<<"export default function Header() {                                                                "<<endl;
	cout<<"  const classes = useStyles();                                                                    "<<endl;
	cout<<"																								  "<<endl;
	cout<<"  return (                                                                                        "<<endl;
	cout<<"    <Paper className={classes.container}>                                                         "<<endl;
	cout<<"      <Typography component=\"h1\" variant=\"h5\">                                                "<<endl;
	cout<<"        Danh sách "<<tablePacal<<"                                                                "<<endl;
	cout<<"      </Typography>                                                                               "<<endl;
	cout<<"																								  "<<endl;
	cout<<"      <div>                                                                                       "<<endl;
	cout<<"        <Link to={\"/ql_"<<tableLowcase<<"/them_"<<tableLowcase<<"\"} className={classes.link}>   "<<endl;
	cout<<"          <Button variant=\"contained\" color=\"primary\">                                        "<<endl;
	cout<<"            Thêm m?i                                                                              "<<endl;
	cout<<"          </Button>                                                                               "<<endl;
	cout<<"        </Link>                                                                                   "<<endl;
	cout<<"      </div>                                                                                      "<<endl;
	cout<<"    </Paper>                                                                                      "<<endl;
	cout<<"  );                                                                                              "<<endl;
	cout<<"}                                                                                                 "<<endl;   
}
 
void genPageComponentIndex(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/components/index.js";
	ofstream cout (fileName.c_str());
	   
	cout<<"export { default as List"<<tablePacal<<" } from \"./List"<<tablePacal<<"\"; "<<endl;
	cout<<"export { default as Header } from \"./Header\";               "<<endl;
	cout<<"export { default as BoxSearch } from \"./BoxSearch\";         "<<endl;
	cout<<"															  "<<endl;
	cout<<"export * from \"./CreateForm"<<tablePacal<<"\";               "<<endl;
	cout<<"export * from \"./UpdateForm"<<tablePacal<<"\";               "<<endl;

}

void genPageComponentListXe(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper);  
	
	string fileName = "Pages/components/List"+tablePacal+".js";
	ofstream cout (fileName.c_str());
	   
	cout<<"import React, { useEffect } from \"react\";                                                                                                               "<<endl;
	cout<<"import { makeStyles } from \"@material-ui/core/styles\";                                                                                                  "<<endl;
	cout<<"import Paper from \"@material-ui/core/Paper\";                                                                                                            "<<endl;
	cout<<"import Table from \"@material-ui/core/Table\";                                                                                                            "<<endl;
	cout<<"import TableBody from \"@material-ui/core/TableBody\";                                                                                                    "<<endl;
	cout<<"import TableCell from \"@material-ui/core/TableCell\";                                                                                                    "<<endl;
	cout<<"import TableContainer from \"@material-ui/core/TableContainer\";                                                                                          "<<endl;
	cout<<"import TableHead from \"@material-ui/core/TableHead\";                                                                                                    "<<endl;
	cout<<"import TablePagination from \"@material-ui/core/TablePagination\";                                                                                        "<<endl;
	cout<<"import TableRow from \"@material-ui/core/TableRow\";                                                                                                      "<<endl;
	cout<<"import { Delete, Edit } from \"@material-ui/icons\";                                                                                                      "<<endl;
	cout<<"import ModalDelete from \"./ModalDelete\";                                                                                                                "<<endl;
	cout<<"import { Link } from \"react-router-dom\";                                                                                                                "<<endl;
	cout<<"import { useDispatch, useSelector } from \"react-redux\";                                                                                                 "<<endl;
	cout<<"import { delete"<<tablePacal<<"Request, GetAll"<<tablePacal<<"Request} from \"../../../../reducers/qly-"<<tableLowcase<<"/"<<tablePacal<<"/"<<tablePacal<<"Action\";    "<<endl;
	cout<<"import { get as _get } from \"lodash\";                                                                                                                   "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"// define column of grid                                                                                                                                  "<<endl;
	cout<<"const columns = [                                                                                                                                         "<<endl;
	cout<<"  { id: \"bienso\", label: \"Bi?n s?\", minWidth: 120 },                                                                                                  "<<endl;
	cout<<"];                                                                                                                                                        "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"// style of data grid                                                                                                                                     "<<endl;
	cout<<"const useStyles = makeStyles({                                                                                                                            "<<endl;
	cout<<"  root: {                                                                                                                                                 "<<endl;
	cout<<"    width: \"100%\",                                                                                                                                      "<<endl;
	cout<<"  },                                                                                                                                                      "<<endl;
	cout<<"  container: {                                                                                                                                            "<<endl;
	cout<<"    maxHeight: 440,                                                                                                                                       "<<endl;
	cout<<"  },                                                                                                                                                      "<<endl;
	cout<<"  button: {                                                                                                                                               "<<endl;
	cout<<"    marginRight: 3,                                                                                                                                       "<<endl;
	cout<<"  },                                                                                                                                                      "<<endl;
	cout<<"});                                                                                                                                                       "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"/**                                                                                                                                                       "<<endl;
	cout<<" * List"<<tablePacal<<"                                                                                                                                   "<<endl;
	cout<<" * @param {*} props                                                                                                                                       "<<endl;
	cout<<" * @returns                                                                                                                                               "<<endl;
	cout<<" */                                                                                                                                                       "<<endl;
	cout<<"export default function List"<<tablePacal<<"(props) {                                                                                                     "<<endl;
	cout<<"  const classes = useStyles();                                                                                                                            "<<endl;
	cout<<"  const [page, setPage] = React.useState(0);                                                                                                              "<<endl;
	cout<<"  const [rowsPerPage, setRowsPerPage] = React.useState(10);                                                                                               "<<endl;
	cout<<"  const [openDelete, setOpenDelete] = React.useState(false);                                                                                              "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  const dispatch = useDispatch();                                                                                                                         "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  // listen data of grid                                                                                                                                  "<<endl;
	cout<<"  const rows = useSelector((state) => _get(state, \""<<tableLowcase<<"."<<tableLowcase<<"s\", []));                                                       "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  /**                                                                                                                                                     "<<endl;
	cout<<"   * handle Change Page                                                                                                                                   "<<endl;
	cout<<"   * @param {*} event                                                                                                                                     "<<endl;
	cout<<"   * @param {*} newPage                                                                                                                                   "<<endl;
	cout<<"   */                                                                                                                                                     "<<endl;
	cout<<"  const handleChangePage = (event, newPage) => {                                                                                                          "<<endl;
	cout<<"    setPage(newPage);                                                                                                                                     "<<endl;
	cout<<"  };                                                                                                                                                      "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  /**                                                                                                                                                     "<<endl;
	cout<<"   * handle Change Rows Per Page                                                                                                                          "<<endl;
	cout<<"   * @param {*} event                                                                                                                                     "<<endl;
	cout<<"   */                                                                                                                                                     "<<endl;
	cout<<"  const handleChangeRowsPerPage = (event) => {                                                                                                            "<<endl;
	cout<<"    setRowsPerPage(+event.target.value);                                                                                                                  "<<endl;
	cout<<"    setPage(0);                                                                                                                                           "<<endl;
	cout<<"  };                                                                                                                                                      "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  /**                                                                                                                                                     "<<endl;
	cout<<"   * Get "<<tablePacal<<" Request                                                                                                                         "<<endl;
	cout<<"   */                                                                                                                                                     "<<endl;
	cout<<"  useEffect(() => {                                                                                                                                       "<<endl;
	cout<<"    dispatch(GetAll"<<tablePacal<<"Request());                                                                                                            "<<endl;
	cout<<"  }, []);                                                                                                                                                 "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"  return (                                                                                                                                                "<<endl;
	cout<<"    <Paper className={classes.root}>                                                                                                                      "<<endl;
	cout<<"      <TableContainer className={classes.container}>                                                                                                      "<<endl;
	cout<<"        <Table stickyHeader aria-label=\"sticky table\">                                                                                                  "<<endl;
	cout<<"          <TableHead>                                                                                                                                     "<<endl;
	cout<<"            <TableRow>                                                                                                                                    "<<endl;
	cout<<"              {columns.map((column) => (                                                                                                                  "<<endl;
	cout<<"                <TableCell                                                                                                                                "<<endl;
	cout<<"                  key={column.id}                                                                                                                         "<<endl;
	cout<<"                  align={column.align}                                                                                                                    "<<endl;
	cout<<"                  style={{ minWidth: column.minWidth }}                                                                                                   "<<endl;
	cout<<"                >                                                                                                                                         "<<endl;
	cout<<"                  {column.label}                                                                                                                          "<<endl;
	cout<<"                </TableCell>                                                                                                                              "<<endl;
	cout<<"              ))}                                                                                                                                         "<<endl;
	cout<<"              <TableCell>Thao Tác</TableCell>                                                                                                             "<<endl;
	cout<<"            </TableRow>                                                                                                                                   "<<endl;
	cout<<"          </TableHead>                                                                                                                                    "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"          <TableBody>                                                                                                                                     "<<endl;
	cout<<"            {rows                                                                                                                                         "<<endl;
	cout<<"              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)                                                                                "<<endl;
	cout<<"              .map((row) => {                                                                                                                             "<<endl;
	cout<<"                return (                                                                                                                                  "<<endl;
	cout<<"                  <TableRow hover role=\"checkbox\" tabIndex={-1} key={row.code}>                                                                         "<<endl;
	cout<<"                    <TableCell>{row.bienSo"<<tablePacal<<"}</TableCell>                                                                                   "<<endl;
	cout<<"                    <TableCell>                                                                                                                           "<<endl;
	cout<<"                      <Link to={`/ql_"<<tableLowcase<<"/sua_thong_tin_"<<tableLowcase<<"/${row.id}`} className={classes.link}>                            "<<endl;
	cout<<"                        <Edit />                                                                                                                          "<<endl;
	cout<<"                      </Link>                                                                                                                             "<<endl;
	cout<<"                      <Delete                                                                                                                             "<<endl;
	cout<<"                        onClick={() => {                                                                                                                  "<<endl;
	cout<<"                          setOpenDelete(!openDelete);                                                                                                     "<<endl;
	cout<<"                          dispatch(delete"<<tablePacal<<"Request(row.id));                                                                                "<<endl;
	cout<<"                        }}                                                                                                                                "<<endl;
	cout<<"                      />                                                                                                                                  "<<endl;
	cout<<"                    </TableCell>                                                                                                                          "<<endl;
	cout<<"                  </TableRow>                                                                                                                             "<<endl;
	cout<<"                );                                                                                                                                        "<<endl;
	cout<<"              })}                                                                                                                                         "<<endl;
	cout<<"          </TableBody>                                                                                                                                    "<<endl;
	cout<<"        </Table>                                                                                                                                          "<<endl;
	cout<<"      </TableContainer>                                                                                                                                   "<<endl;
	cout<<"																																						  "<<endl;
	cout<<"      <TablePagination                                                                                                                                    "<<endl;
	cout<<"        rowsPerPageOptions={[10, 25, 100]}                                                                                                                "<<endl;
	cout<<"        component=\"div\"                                                                                                                                 "<<endl;
	cout<<"        count={rows.length}                                                                                                                               "<<endl;
	cout<<"        rowsPerPage={rowsPerPage}                                                                                                                         "<<endl;
	cout<<"        page={page}                                                                                                                                       "<<endl;
	cout<<"        onChangePage={handleChangePage}                                                                                                                   "<<endl;
	cout<<"        onChangeRowsPerPage={handleChangeRowsPerPage}                                                                                                     "<<endl;
	cout<<"      />                                                                                                                                                  "<<endl;
	cout<<"      <ModalDelete open={openDelete} setOpenDelete={setOpenDelete} />                                                                                     "<<endl;
	cout<<"    </Paper>                                                                                                                                              "<<endl;
	cout<<"  );                                                                                                                                                      "<<endl;
	cout<<"}                                                                                                                                                         "<<endl;
}
 

void genPageComponentUpdateFormXe(string tableCamel,string tableLowcase,string tablePacal,string properties){ 
	vector<string> result;
	string temp, tableUpperCase,tableCamelUpper, tablePacalUpper, param1, param2, param3, param4; 
	tableUpperCase = tableLowcase;
	tableCamelUpper = tableCamel;
	tablePacalUpper = tablePacal;
	transform(tableUpperCase.begin(), tableUpperCase.end(),tableUpperCase.begin(), ::toupper);
	transform(tableCamelUpper.begin(), tableCamelUpper.end(),tableCamelUpper.begin(), ::toupper); 
	transform(tablePacalUpper.begin(), tablePacalUpper.end(),tablePacalUpper.begin(), ::toupper); 
	
	string fileName = "Pages/components/UpdateForm"+tablePacal+".js";
	ofstream cout (fileName.c_str());
	   
	cout<<"import { Button, makeStyles, Paper } from \"@material-ui/core\";                   "<<endl;
	cout<<"import Grid from \"@material-ui/core/Grid\";                                       "<<endl;
	cout<<"import { ComboBoxField, TextField } from \"../../../../components\";               "<<endl;
	cout<<"import { reduxForm, Field } from \"redux-form\";                                   "<<endl;
	cout<<"import React, { useEffect } from \"react\";                                        "<<endl;
	cout<<"import { useHistory } from \"react-router-dom\";                                   "<<endl;
	cout<<"																				   "<<endl;
	cout<<"/**                                                                                "<<endl;
	cout<<" * makeStyles                                                                      "<<endl;
	cout<<" */                                                                                "<<endl;
	cout<<"const useStyles = makeStyles((theme) => ({                                         "<<endl;
	cout<<"  button: {                                                                        "<<endl;
	cout<<"    marginRight: 10,                                                               "<<endl;
	cout<<"  },                                                                               "<<endl;
	cout<<"  link: {                                                                          "<<endl;
	cout<<"    textDecoration: \"none\",                                                      "<<endl;
	cout<<"  },                                                                               "<<endl;
	cout<<"  form: {                                                                          "<<endl;
	cout<<"    marginLeft: 20,                                                                "<<endl;
	cout<<"  },                                                                               "<<endl;
	cout<<"}));                                                                               "<<endl;
	cout<<"																				   "<<endl;
	cout<<"/**                                                                                "<<endl;
	cout<<" * UpdateFrom"<<tablePacal<<"                                                      "<<endl;
	cout<<" * @param {*} props                                                                "<<endl;
	cout<<" * @returns                                                                        "<<endl;
	cout<<" */                                                                                "<<endl;
	cout<<"const UpdateForm"<<tablePacal<<" = (props) => {                                    "<<endl;
	cout<<"  let history = useHistory();                                                      "<<endl;
	cout<<"  const classes = useStyles();                                                     "<<endl;
	cout<<"  const { handleSubmit, initialize, "<<tableLowcase<<" } = props;                  "<<endl;
	cout<<"																				   "<<endl;
	cout<<"  /**                                                                              "<<endl;
	cout<<"   * initialize                                                                    "<<endl;
	cout<<"   */                                                                              "<<endl;
	cout<<"  useEffect(() => {                                                                "<<endl;
	cout<<"    initialize("<<tableLowcase<<");                                                "<<endl;
	cout<<"  }, []);                                                                          "<<endl;
	cout<<"																				   "<<endl;
	cout<<"  /**                                                                              "<<endl;
	cout<<"   * handerBack                                                                    "<<endl;
	cout<<"   */                                                                              "<<endl;
	cout<<"  const handerBack = () => {                                                       "<<endl;
	cout<<"    history.goBack();                                                              "<<endl;
	cout<<"  };                                                                               "<<endl;
	cout<<"																				   "<<endl;
	cout<<"  return (                                                                         "<<endl;
	cout<<"    <React.Fragment>                                                               "<<endl;
	cout<<"      <Paper>                                                                      "<<endl;
	cout<<"        <form onSubmit={handleSubmit} className={classes.form}>                    "<<endl;
	cout<<"          <Grid container spacing={3}>                                             "<<endl;
	cout<<"            <Grid item xs={12} sm={6}>                                             "<<endl;
	cout<<"              <Field                                                               "<<endl;
	cout<<"                variant=\"outlined\"                                               "<<endl;
	cout<<"                margin=\"normal\"                                                  "<<endl;
	cout<<"                required                                                           "<<endl;
	cout<<"                fullWidth                                                          "<<endl;
	cout<<"                id=\"bienSo"<<tablePacal<<"\"                                      "<<endl;
	cout<<"                label=\"Bi?n S? "<<tableLowcase<<"\"                               "<<endl;
	cout<<"                name=\"bienSo"<<tablePacal<<"\"                                    "<<endl;
	cout<<"                autoComplete=\"Bi?n S? "<<tablePacal<<"\"                          "<<endl;
	cout<<"                autoFocus                                                          "<<endl;
	cout<<"                component={TextField}                                              "<<endl;
	cout<<"              />                                                                   "<<endl;
	cout<<"            </Grid>                                                                "<<endl;
	cout<<"																				   "<<endl;
	cout<<"            <Grid item xs={12} sm={6}>                                             "<<endl;
	cout<<"              <Button                                                              "<<endl;
	cout<<"                variant=\"contained\"                                              "<<endl;
	cout<<"                color=\"primary\"                                                  "<<endl;
	cout<<"                onClick={handerBack}                                               "<<endl;
	cout<<"                className={classes.button} > H?y </Button>                         "<<endl;
	cout<<"              <Button variant=\"contained\" type=\"submit\" color=\"secondary\">   "<<endl;
	cout<<"                Luu                                                                "<<endl;
	cout<<"              </Button>                                                            "<<endl;
	cout<<"            </Grid>                                                                "<<endl;
	cout<<"          </Grid>                                                                  "<<endl;
	cout<<"        </form>                                                                    "<<endl;
	cout<<"      </Paper>                                                                     "<<endl;
	cout<<"    </React.Fragment>                                                              "<<endl;
	cout<<"  );                                                                               "<<endl;
	cout<<"};                                                                                 "<<endl;
	cout<<"export default reduxForm({                                                         "<<endl;
	cout<<"  form: \"UpdateForm"<<tablePacal<<"\"                                             "<<endl;
	cout<<"})(UpdateForm"<<tablePacal<<");                                                    "<<endl;  
}

int main(){
	ifstream cin ("input_table.txt");
//	ofstream cout ("output.txt");
	string s,temp,tableCamel, tableLowcase, tablePacal, properties, param1, param2, param3, param4;
	
	int n,pos,ans=100;
	cin>>n; 
	while(n--){
		cin>>tableCamel; 
		cin>>tableLowcase; 
		cin>>tablePacal; 
		cin>>properties;  
		 
  		// create folder
  		char* dirname = "Reducers";  
  		CreateDirectory(dirname ,NULL);
  		
  		dirname = "Pages";  
  		CreateDirectory(dirname ,NULL);
  		
  		dirname = "Pages/components";  
  		CreateDirectory(dirname ,NULL);
		
		// gen reducers
		genAction(tableCamel, tableLowcase, tablePacal, properties);
		genReducer(tableCamel, tableLowcase, tablePacal, properties);
		genTypes(tableCamel, tableLowcase, tablePacal, properties); 
		
		// gen pages
		genPageIndex(tableCamel, tableLowcase, tablePacal, properties); 
		genPageList(tableCamel, tableLowcase, tablePacal, properties); 
		genPageCreate(tableCamel, tableLowcase, tablePacal, properties); 
		genPageUpdate(tableCamel, tableLowcase, tablePacal, properties); 
		
		// gen pages component
		genPageComponentBoxSearch(tableCamel, tableLowcase, tablePacal, properties); 
		genPageComponentCreateFormXe(tableCamel, tableLowcase, tablePacal, properties); 
		genPageComponentHeader(tableCamel, tableLowcase, tablePacal, properties);  
		genPageComponentIndex(tableCamel, tableLowcase, tablePacal, properties);  
		genPageComponentListXe(tableCamel, tableLowcase, tablePacal, properties);  
		genPageComponentUpdateFormXe(tableCamel, tableLowcase, tablePacal, properties);    
	}  
	cout<<"Success Pink Ways ^.<"; 
	return 0;
}


