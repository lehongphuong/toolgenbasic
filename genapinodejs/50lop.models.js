const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const lopSchema = mongoose.Schema(                                             
  {                                                                                    
    name: { type: String, trim: true },                                 
    born: { type: String, trim: true },                                 
    detail: { type: String, trim: true },                                 
    address: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
lopSchema.plugin(toJSON);                                                      
lopSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef Lop                                                       
 */                                                                                    
const Lop = mongoose.model('Lop', lopSchema);
                                                                                       
module.exports = Lop;                                                 
