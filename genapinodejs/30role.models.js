const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const roleSchema = mongoose.Schema(                                             
  {                                                                                    
    name: { type: String, trim: true },                                 
    salary: { type: String, trim: true },                                 
    condition: { type: String, trim: true },                                 
    description: { type: String, trim: true },                                 
    bonus: { type: String, trim: true },                                 
    conditionBonus: { type: String, trim: true },                                 
    descriptionBonus: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
roleSchema.plugin(toJSON);                                                      
roleSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef Role                                                       
 */                                                                                    
const Role = mongoose.model('Role', roleSchema);
                                                                                       
module.exports = Role;                                                 
