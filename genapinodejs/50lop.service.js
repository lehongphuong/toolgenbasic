const { Lop } = require('../models');                
const ApiError = require('../utils/ApiError');                        
                                                                      
                                                                      
/**                                                                   
 * Find all lop                                               
 * @returns                                                           
 */                                                                   
const find = async () => {                                            
  return Lop.find();                                 
};                                                                    
                                                                      
/**                                                                   
 * Create a lop                                               
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const create = async (body) => {                                      
  return Lop.create(body);                           
};                                                                    
                                                                      
/**                                                                   
 * Update a lop                                               
 * @param {*} id                                                      
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const findByIdAndUpdate = async (id, body) => {                       
  return Lop.findByIdAndUpdate({ '_id': id }, body); 
};                                                                    
                                                                      
/**                                                                   
 * Delete a lop                                               
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findByIdAndDelete = async (id) => {                             
  return Lop.findByIdAndDelete({ '_id': id });       
};                                                                    
                                                                      
/**                                                                   
 * Find a lop by id                                           
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findById = async (id) => {                                      
  return Lop.findById({ '_id': id });                
};                                                                    
                                                                      
/**                                                                   
 * Paginate                                                           
 * @param {*} filter                                                  
 * @param {*} options                                                 
 * @returns                                                           
 */                                                                   
const paginate = async (filter, options) => {                         
  return await Lop.paginate(filter, options);        
};                                                                    
                                                                      
module.exports = {                                                    
  find,                                                               
  create,                                                             
  findByIdAndUpdate,                                                  
  findByIdAndDelete,                                                  
  findById,                                                           
  paginate,                                                           
};                                                                    
