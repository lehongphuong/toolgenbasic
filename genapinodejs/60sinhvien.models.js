const mongoose = require('mongoose');                                                  
const Schema = mongoose.Schema;                                                        
const validator = require('validator');                                                
const bcrypt = require('bcryptjs');                                                    
const { toJSON, paginate } = require('./plugins');                                     
                                                                                       
const sinhvienSchema = mongoose.Schema(                                             
  {                                                                                    
    lop: { type: String, trim: true },                                 
    fullname: { type: String, trim: true },                                 
  },                                                                                   
  {                                                                                    
    timestamps: true,                                                                  
  }                                                                                    
);                                                                                     
                                                                                       
// add plugin that converts mongoose to json                                           
sinhvienSchema.plugin(toJSON);                                                      
sinhvienSchema.plugin(paginate);                                                    
                                                                                       
/**                                                                                    
 * @typedef Sinhvien                                                       
 */                                                                                    
const Sinhvien = mongoose.model('Sinhvien', sinhvienSchema);
                                                                                       
module.exports = Sinhvien;                                                 
