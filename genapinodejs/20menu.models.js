const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const menuSchema = mongoose.Schema(                                             
  {                                                                                    
    menu: { type: String, trim: true },                                 
    isGroup: { type: String, trim: true },                                 
    name: { type: String, trim: true },                                 
    slug: { type: String, trim: true },                                 
    icon: { type: String, trim: true },                                 
    position: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
menuSchema.plugin(toJSON);                                                      
menuSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef Menu                                                       
 */                                                                                    
const Menu = mongoose.model('Menu', menuSchema);
                                                                                       
module.exports = Menu;                                                 
