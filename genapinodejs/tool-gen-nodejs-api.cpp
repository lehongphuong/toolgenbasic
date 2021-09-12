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


/**
* genModel
*/
void genModel(string model, string tableUppercase, vector<string> result, int ans){ 

	// convert number to string
	ostringstream ostream;
	ostream << ans;  
	
	string fileName = ostream.str() + model + ".models.js";
	ofstream cout (fileName.c_str());
	
	cout<<"const mongoose = require('mongoose');                                                  "<<endl;
	cout<<"const Schema = mongoose.Schema;                                                        "<<endl;
	cout<<"const validator = require('validator');                                                "<<endl;
	cout<<"const bcrypt = require('bcryptjs');                                                    "<<endl;
	cout<<"const { toJSON, paginate } = require('./plugins');                                     "<<endl;
	cout<<"                                                                                       "<<endl;
	cout<<"const "<<model<<"Schema = mongoose.Schema(                                             "<<endl;
	cout<<"  {                                                                                    "<<endl;
	
	for(int i=1;i<result.size();i++){ 
		cout<<"    "<<result[i]<<": { type: String, trim: true },                                 "<<endl;
	}   
	
	cout<<"  },                                                                                   "<<endl;
	cout<<"  {                                                                                    "<<endl;
	cout<<"    timestamps: true,                                                                  "<<endl;
	cout<<"  }                                                                                    "<<endl;
	cout<<");                                                                                     "<<endl;
	cout<<"                                                                                       "<<endl;
	cout<<"// add plugin that converts mongoose to json                                           "<<endl;
	cout<<""<<model<<"Schema.plugin(toJSON);                                                      "<<endl;
	cout<<""<<model<<"Schema.plugin(paginate);                                                    "<<endl;
	cout<<"                                                                                       "<<endl;
	cout<<"/**                                                                                    "<<endl;
	cout<<" * @typedef "<<tableUppercase<<"                                                       "<<endl;
	cout<<" */                                                                                    "<<endl;
	cout<<"const "<<tableUppercase<<" = mongoose.model('"<<tableUppercase<<"', "<<model<<"Schema);"<<endl;
	cout<<"                                                                                       "<<endl;
	cout<<"module.exports = "<<tableUppercase<<";                                                 "<<endl;
}

/**
* genController
*/
void genController(string model, string tableUppercase, vector<string> result, int ans){ 

	// convert number to string
	ostringstream ostream;
	ostream << ans;  
	
	string fileName = ostream.str() + model + ".controller.js";
	ofstream cout (fileName.c_str());
	
	cout<<"const httpStatus = require('http-status');                                               "<<endl;
	cout<<"const pick = require('../utils/pick');                                                   "<<endl;
	cout<<"const ApiError = require('../utils/ApiError');                                           "<<endl;
	cout<<"const catchAsync = require('../utils/catchAsync');                                       "<<endl;
	cout<<"const { "<<model<<"Service } = require('../services');                                   "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * find                                                                                  "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const find = catchAsync(async (req, res) => {                                            "<<endl;
	cout<<"  const result = await "<<model<<"Service.find();                                        "<<endl;
	cout<<"  res.send(result);                                                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * create                                                                                "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const create = catchAsync(async (req, res) => {                                          "<<endl;
	cout<<"  const "<<model<<" = await "<<model<<"Service.create(req.body);                         "<<endl;
	cout<<"  res.status(httpStatus.CREATED).send("<<model<<");                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * find By Id And Update                                                                 "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const findByIdAndUpdate = catchAsync(async (req, res) => {                               "<<endl;
	cout<<"  const "<<model<<" = await "<<model<<"Service.findByIdAndUpdate(req.body.id, req.body); "<<endl;
	cout<<"  res.status(httpStatus.CREATED).send("<<model<<");                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * find By Id And Delete                                                                 "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const findByIdAndDelete = catchAsync(async (req, res) => {                               "<<endl;
	cout<<"  const "<<model<<" = await "<<model<<"Service.findByIdAndDelete(req.body.id);           "<<endl;
	cout<<"  res.status(httpStatus.CREATED).send("<<model<<");                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * findById                                                                              "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const findById = catchAsync(async (req, res) => {                                        "<<endl;
	cout<<"  const "<<model<<" = await "<<model<<"Service.findById(req.params.id);                  "<<endl;
	cout<<"  res.status(httpStatus.CREATED).send("<<model<<");                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"/**                                                                                      "<<endl;
	cout<<" * paginate                                                                              "<<endl;
	cout<<" */                                                                                      "<<endl;
	cout<<"const paginate = catchAsync(async (req, res) => {                                        "<<endl;
	cout<<"  const filter = pick(req.query, ['name']);                                              "<<endl;
	cout<<"  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"  const result = await "<<model<<"Service.paginate(filter, options);                     "<<endl;
	cout<<"  res.send(result);                                                                      "<<endl;
	cout<<"});                                                                                      "<<endl;
	cout<<"                                                                                         "<<endl;
	cout<<"module.exports = {                                                                       "<<endl;
	cout<<"  find,                                                                                  "<<endl;
	cout<<"  create,                                                                                "<<endl;
	cout<<"  findByIdAndUpdate,                                                                     "<<endl;
	cout<<"  findByIdAndDelete,                                                                     "<<endl;
	cout<<"  findById,                                                                              "<<endl;
	cout<<"  paginate,                                                                              "<<endl;
	cout<<"};                                                                                       "<<endl;
}


/**
* genRoute
*/
void genRoute(string model, string tableUppercase, vector<string> result, int ans){ 

	// convert number to string
	ostringstream ostream;
	ostream << ans;  
	
	string fileName = ostream.str() + model + ".route.js";
	ofstream cout (fileName.c_str());
	
	cout<<"const express = require('express');                            "<<endl;
	cout<<"const { "<<model<<"Controler } = require('../../controllers'); "<<endl;
	cout<<"const auth = require('../../middlewares/auth');                "<<endl;
	cout<<"                                                               "<<endl;
	cout<<"const router = express.Router();                               "<<endl;
	cout<<"                                                               "<<endl;
	cout<<"router                                                         "<<endl;
	cout<<"  .route('/')                                                  "<<endl;
	cout<<"  .get("<<model<<"Controler.find)                              "<<endl;
	cout<<"  .post("<<model<<"Controler.create)                           "<<endl;
	cout<<"  .put("<<model<<"Controler.findByIdAndUpdate)                 "<<endl;
	cout<<"  .delete("<<model<<"Controler.findByIdAndDelete);             "<<endl;
	cout<<"                                                               "<<endl;
	cout<<"router                                                         "<<endl;
	cout<<"  .route('/paginate')                                          "<<endl;
	cout<<"  .get("<<model<<"Controler.paginate);                         "<<endl;
	cout<<"                                                               "<<endl;
	cout<<"router                                                         "<<endl;
	cout<<"  .route('/:id')                                               "<<endl;
	cout<<"  .get("<<model<<"Controler.findById);                         "<<endl;
	cout<<"                                                               "<<endl;
	cout<<"module.exports = router;                                       "<<endl;
}


/**
* genService
*/
void genService(string model, string tableUppercase, vector<string> result, int ans){ 

	// convert number to string
	ostringstream ostream;
	ostream << ans;  
	
	string fileName = ostream.str() + model + ".service.js";
	ofstream cout (fileName.c_str());
	
	cout<<"const { "<<tableUppercase<<" } = require('../models');                "<<endl;
	cout<<"const ApiError = require('../utils/ApiError');                        "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Find all "<<model<<"                                               "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const find = async () => {                                            "<<endl;
	cout<<"  return "<<tableUppercase<<".find();                                 "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Create a "<<model<<"                                               "<<endl;
	cout<<" * @param {*} body                                                    "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const create = async (body) => {                                      "<<endl;
	cout<<"  return "<<tableUppercase<<".create(body);                           "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Update a "<<model<<"                                               "<<endl;
	cout<<" * @param {*} id                                                      "<<endl;
	cout<<" * @param {*} body                                                    "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const findByIdAndUpdate = async (id, body) => {                       "<<endl;
	cout<<"  return "<<tableUppercase<<".findByIdAndUpdate({ '_id': id }, body); "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Delete a "<<model<<"                                               "<<endl;
	cout<<" * @param {*} id                                                      "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const findByIdAndDelete = async (id) => {                             "<<endl;
	cout<<"  return "<<tableUppercase<<".findByIdAndDelete({ '_id': id });       "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Find a "<<model<<" by id                                           "<<endl;
	cout<<" * @param {*} id                                                      "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const findById = async (id) => {                                      "<<endl;
	cout<<"  return "<<tableUppercase<<".findById({ '_id': id });                "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"/**                                                                   "<<endl;
	cout<<" * Paginate                                                           "<<endl;
	cout<<" * @param {*} filter                                                  "<<endl;
	cout<<" * @param {*} options                                                 "<<endl;
	cout<<" * @returns                                                           "<<endl;
	cout<<" */                                                                   "<<endl;
	cout<<"const paginate = async (filter, options) => {                         "<<endl;
	cout<<"  return await "<<tableUppercase<<".paginate(filter, options);        "<<endl;
	cout<<"};                                                                    "<<endl;
	cout<<"                                                                      "<<endl;
	cout<<"module.exports = {                                                    "<<endl;
	cout<<"  find,                                                               "<<endl;
	cout<<"  create,                                                             "<<endl;
	cout<<"  findByIdAndUpdate,                                                  "<<endl;
	cout<<"  findByIdAndDelete,                                                  "<<endl;
	cout<<"  findById,                                                           "<<endl;
	cout<<"  paginate,                                                           "<<endl;
	cout<<"};                                                                    "<<endl;
}

int main(){
	ifstream cin ("input.txt");
	
	string s,temp,table, param1, param2, param3, param4;
	vector<string> result;
	int n,pos,ans=10;
	cin>>n;
	while(n--){
		cin>>s; 
		table = s.substr(0,s.find("(")); 
		
		char firstUpper = toupper(table[0]);
		string tableUppercase =  firstUpper + table.substr(1);
		
		temp = s.substr(s.find("(") +1 ,s.length()-1);
		result = split(temp,",");
		
		// create directory
		int check; 
	    string dirname = table;      
		
		// genController
		genController(table, tableUppercase, result, ans); 
		
		// genModel
		genModel(table, tableUppercase, result, ans); 
		
		// genRoute
		genRoute(table, tableUppercase, result, ans);
		
		// genService
		genService(table, tableUppercase, result, ans);
		
		ans+=10; 
	} 
	return 0;
}


