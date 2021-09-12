const httpStatus = require('http-status');                                               
const pick = require('../utils/pick');                                                   
const ApiError = require('../utils/ApiError');                                           
const catchAsync = require('../utils/catchAsync');                                       
const { lopService } = require('../services');                                   
                                                                                         
/**                                                                                      
 * find                                                                                  
 */                                                                                      
const find = catchAsync(async (req, res) => {                                            
  const result = await lopService.find();                                        
  res.send(result);                                                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * create                                                                                
 */                                                                                      
const create = catchAsync(async (req, res) => {                                          
  const lop = await lopService.create(req.body);                         
  res.status(httpStatus.CREATED).send(lop);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Update                                                                 
 */                                                                                      
const findByIdAndUpdate = catchAsync(async (req, res) => {                               
  const lop = await lopService.findByIdAndUpdate(req.body.id, req.body); 
  res.status(httpStatus.CREATED).send(lop);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Delete                                                                 
 */                                                                                      
const findByIdAndDelete = catchAsync(async (req, res) => {                               
  const lop = await lopService.findByIdAndDelete(req.body.id);           
  res.status(httpStatus.CREATED).send(lop);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * findById                                                                              
 */                                                                                      
const findById = catchAsync(async (req, res) => {                                        
  const lop = await lopService.findById(req.params.id);                  
  res.status(httpStatus.CREATED).send(lop);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * paginate                                                                              
 */                                                                                      
const paginate = catchAsync(async (req, res) => {                                        
  const filter = pick(req.query, ['name']);                                              
  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          
                                                                                         
  const result = await lopService.paginate(filter, options);                     
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
