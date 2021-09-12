const { RoleDetail } = require('../models');                
const ApiError = require('../utils/ApiError');                        
                                                                      
                                                                      
/**                                                                   
 * Find all roleDetail                                               
 * @returns                                                           
 */                                                                   
const find = async () => {                                            
  return RoleDetail.find();                                 
};                                                                    
                                                                      
/**                                                                   
 * Create a roleDetail                                               
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const create = async (body) => {                                      
  return RoleDetail.create(body);                           
};                                                                    
                                                                      
/**                                                                   
 * Update a roleDetail                                               
 * @param {*} id                                                      
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const findByIdAndUpdate = async (id, body) => {                       
  return RoleDetail.findByIdAndUpdate({ '_id': id }, body); 
};                                                                    
                                                                      
/**                                                                   
 * Delete a roleDetail                                               
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findByIdAndDelete = async (id) => {                             
  return RoleDetail.findByIdAndDelete({ '_id': id });       
};                                                                    
                                                                      
/**                                                                   
 * Find a roleDetail by id                                           
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findById = async (id) => {                                      
  return RoleDetail.findById({ '_id': id });                
};                                                                    
                                                                      
/**                                                                   
 * Paginate                                                           
 * @param {*} filter                                                  
 * @param {*} options                                                 
 * @returns                                                           
 */                                                                   
const paginate = async (filter, options) => {                         
  return await RoleDetail.paginate(filter, options);        
};                                                                    
                                                                      
module.exports = {                                                    
  find,                                                               
  create,                                                             
  findByIdAndUpdate,                                                  
  findByIdAndDelete,                                                  
  findById,                                                           
  paginate,                                                           
};                                                                    
