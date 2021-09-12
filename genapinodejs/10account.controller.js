const httpStatus = require('http-status');                                               
const pick = require('../utils/pick');                                                   
const ApiError = require('../utils/ApiError');                                           
const catchAsync = require('../utils/catchAsync');                                       
const { accountService } = require('../services');                                   
                                                                                         
/**                                                                                      
 * find                                                                                  
 */                                                                                      
const find = catchAsync(async (req, res) => {                                            
  const result = await accountService.find();                                        
  res.send(result);                                                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * create                                                                                
 */                                                                                      
const create = catchAsync(async (req, res) => {                                          
  const account = await accountService.create(req.body);                         
  res.status(httpStatus.CREATED).send(account);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Update                                                                 
 */                                                                                      
const findByIdAndUpdate = catchAsync(async (req, res) => {                               
  const account = await accountService.findByIdAndUpdate(req.body.id, req.body); 
  res.status(httpStatus.CREATED).send(account);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Delete                                                                 
 */                                                                                      
const findByIdAndDelete = catchAsync(async (req, res) => {                               
  const account = await accountService.findByIdAndDelete(req.body.id);           
  res.status(httpStatus.CREATED).send(account);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * findById                                                                              
 */                                                                                      
const findById = catchAsync(async (req, res) => {                                        
  const account = await accountService.findById(req.params.id);                  
  res.status(httpStatus.CREATED).send(account);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * paginate                                                                              
 */                                                                                      
const paginate = catchAsync(async (req, res) => {                                        
  const filter = pick(req.query, ['name']);                                              
  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          
                                                                                         
  const result = await accountService.paginate(filter, options);                     
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
