const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const accountSchema = mongoose.Schema(                                             
  {                                                                                    
    account: { type: String, trim: true },                                 
    role: { type: String, trim: true },                                 
    fullname: { type: String, trim: true },                                 
    username: { type: String, trim: true },                                 
    password: { type: String, trim: true },                                 
    sex: { type: String, trim: true },                                 
    avatar: { type: String, trim: true },                                 
    born: { type: String, trim: true },                                 
    phone: { type: String, trim: true },                                 
    email: { type: String, trim: true },                                 
    address: { type: String, trim: true },                                 
    status: { type: String, trim: true },                                 
    cmnd: { type: String, trim: true },                                 
    famalyId: { type: String, trim: true },                                 
    incomeCurrent: { type: String, trim: true },                                 
    percentCondition: { type: String, trim: true },                                 
    referralCode: { type: String, trim: true },                                 
    createdAt: { type: String, trim: true },                                 
    updatedAt: { type: String, trim: true },                                 
    endDateAt: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
accountSchema.plugin(toJSON);                                                      
accountSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef Account                                                       
 */                                                                                    
const Account = mongoose.model('Account', accountSchema);
                                                                                       
module.exports = Account;                                                 
