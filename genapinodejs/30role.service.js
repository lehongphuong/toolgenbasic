const { Role } = require('../models');                
const ApiError = require('../utils/ApiError');                        
                                                                      
                                                                      
/**                                                                   
 * Find all role                                               
 * @returns                                                           
 */                                                                   
const find = async () => {                                            
  return Role.find();                                 
};                                                                    
                                                                      
/**                                                                   
 * Create a role                                               
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const create = async (body) => {                                      
  return Role.create(body);                           
};                                                                    
                                                                      
/**                                                                   
 * Update a role                                               
 * @param {*} id                                                      
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const findByIdAndUpdate = async (id, body) => {                       
  return Role.findByIdAndUpdate({ '_id': id }, body); 
};                                                                    
                                                                      
/**                                                                   
 * Delete a role                                               
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findByIdAndDelete = async (id) => {                             
  return Role.findByIdAndDelete({ '_id': id });       
};                                                                    
                                                                      
/**                                                                   
 * Find a role by id                                           
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findById = async (id) => {                                      
  return Role.findById({ '_id': id });                
};                                                                    
                                                                      
/**                                                                   
 * Paginate                                                           
 * @param {*} filter                                                  
 * @param {*} options                                                 
 * @returns                                                           
 */                                                                   
const paginate = async (filter, options) => {                         
  return await Role.paginate(filter, options);        
};                                                                    
                                                                      
module.exports = {                                                    
  find,                                                               
  create,                                                             
  findByIdAndUpdate,                                                  
  findByIdAndDelete,                                                  
  findById,                                                           
  paginate,                                                           
};                                                                    
