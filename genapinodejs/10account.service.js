const { Account } = require('../models');                
const ApiError = require('../utils/ApiError');                        
                                                                      
                                                                      
/**                                                                   
 * Find all account                                               
 * @returns                                                           
 */                                                                   
const find = async () => {                                            
  return Account.find();                                 
};                                                                    
                                                                      
/**                                                                   
 * Create a account                                               
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const create = async (body) => {                                      
  return Account.create(body);                           
};                                                                    
                                                                      
/**                                                                   
 * Update a account                                               
 * @param {*} id                                                      
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const findByIdAndUpdate = async (id, body) => {                       
  return Account.findByIdAndUpdate({ '_id': id }, body); 
};                                                                    
                                                                      
/**                                                                   
 * Delete a account                                               
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findByIdAndDelete = async (id) => {                             
  return Account.findByIdAndDelete({ '_id': id });       
};                                                                    
                                                                      
/**                                                                   
 * Find a account by id                                           
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findById = async (id) => {                                      
  return Account.findById({ '_id': id });                
};                                                                    
                                                                      
/**                                                                   
 * Paginate                                                           
 * @param {*} filter                                                  
 * @param {*} options                                                 
 * @returns                                                           
 */                                                                   
const paginate = async (filter, options) => {                         
  return await Account.paginate(filter, options);        
};                                                                    
                                                                      
module.exports = {                                                    
  find,                                                               
  create,                                                             
  findByIdAndUpdate,                                                  
  findByIdAndDelete,                                                  
  findById,                                                           
  paginate,                                                           
};                                                                    
