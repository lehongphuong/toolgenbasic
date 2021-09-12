const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const roleDetailSchema = mongoose.Schema(                                             
  {                                                                                    
    role: { type: String, trim: true },                                 
    menu: { type: String, trim: true },                                 
    status: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
roleDetailSchema.plugin(toJSON);                                                      
roleDetailSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef RoleDetail                                                       
 */                                                                                    
const RoleDetail = mongoose.model('RoleDetail', roleDetailSchema);
                                                                                       
module.exports = RoleDetail;                                                 
