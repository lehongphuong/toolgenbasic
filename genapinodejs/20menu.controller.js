const httpStatus = require('http-status');                                               
const pick = require('../utils/pick');                                                   
const ApiError = require('../utils/ApiError');                                           
const catchAsync = require('../utils/catchAsync');                                       
const { menuService } = require('../services');                                   
                                                                                         
/**                                                                                      
 * find                                                                                  
 */                                                                                      
const find = catchAsync(async (req, res) => {                                            
  const result = await menuService.find();                                        
  res.send(result);                                                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * create                                                                                
 */                                                                                      
const create = catchAsync(async (req, res) => {                                          
  const menu = await menuService.create(req.body);                         
  res.status(httpStatus.CREATED).send(menu);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Update                                                                 
 */                                                                                      
const findByIdAndUpdate = catchAsync(async (req, res) => {                               
  const menu = await menuService.findByIdAndUpdate(req.body.id, req.body); 
  res.status(httpStatus.CREATED).send(menu);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Delete                                                                 
 */                                                                                      
const findByIdAndDelete = catchAsync(async (req, res) => {                               
  const menu = await menuService.findByIdAndDelete(req.body.id);           
  res.status(httpStatus.CREATED).send(menu);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * findById                                                                              
 */                                                                                      
const findById = catchAsync(async (req, res) => {                                        
  const menu = await menuService.findById(req.params.id);                  
  res.status(httpStatus.CREATED).send(menu);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * paginate                                                                              
 */                                                                                      
const paginate = catchAsync(async (req, res) => {                                        
  const filter = pick(req.query, ['name']);                                              
  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          
                                                                                         
  const result = await menuService.paginate(filter, options);                     
  res.send(result);                                                                      
});                                                                                      
                                                                                         
module.exports = {                                                                       
  find,                                                                                  
  create,                                                                                
  findByIdAndUpdate,                                                                     
  findByIdAndDelete,                                                                     
  findById,                                                                              
  paginate,                                                                              
};                                                                                       
