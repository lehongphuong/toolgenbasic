const { Menu } = require('../models');                
const ApiError = require('../utils/ApiError');                        
                                                                      
                                                                      
/**                                                                   
 * Find all menu                                               
 * @returns                                                           
 */                                                                   
const find = async () => {                                            
  return Menu.find();                                 
};                                                                    
                                                                      
/**                                                                   
 * Create a menu                                               
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const create = async (body) => {                                      
  return Menu.create(body);                           
};                                                                    
                                                                      
/**                                                                   
 * Update a menu                                               
 * @param {*} id                                                      
 * @param {*} body                                                    
 * @returns                                                           
 */                                                                   
const findByIdAndUpdate = async (id, body) => {                       
  return Menu.findByIdAndUpdate({ '_id': id }, body); 
};                                                                    
                                                                      
/**                                                                   
 * Delete a menu                                               
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findByIdAndDelete = async (id) => {                             
  return Menu.findByIdAndDelete({ '_id': id });       
};                                                                    
                                                                      
/**                                                                   
 * Find a menu by id                                           
 * @param {*} id                                                      
 * @returns                                                           
 */                                                                   
const findById = async (id) => {                                      
  return Menu.findById({ '_id': id });                
};                                                                    
                                                                      
/**                                                                   
 * Paginate                                                           
 * @param {*} filter                                                  
 * @param {*} options                                                 
 * @returns                                                           
 */                                                                   
const paginate = async (filter, options) => {                         
  return await Menu.paginate(filter, options);        
};                                                                    
                                                                      
module.exports = {                                                    
  find,                                                               
  create,                                                             
  findByIdAndUpdate,                                                  
  findByIdAndDelete,                                                  
  findById,                                                           
  paginate,                                                           
};                                                                    
