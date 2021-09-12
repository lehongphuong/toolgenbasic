const httpStatus = require('http-status');                                               
const pick = require('../utils/pick');                                                   
const ApiError = require('../utils/ApiError');                                           
const catchAsync = require('../utils/catchAsync');                                       
const { roleDetailService } = require('../services');                                   
                                                                                         
/**                                                                                      
 * find                                                                                  
 */                                                                                      
const find = catchAsync(async (req, res) => {                                            
  const result = await roleDetailService.find();                                        
  res.send(result);                                                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * create                                                                                
 */                                                                                      
const create = catchAsync(async (req, res) => {                                          
  const roleDetail = await roleDetailService.create(req.body);                         
  res.status(httpStatus.CREATED).send(roleDetail);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Update                                                                 
 */                                                                                      
const findByIdAndUpdate = catchAsync(async (req, res) => {                               
  const roleDetail = await roleDetailService.findByIdAndUpdate(req.body.id, req.body); 
  res.status(httpStatus.CREATED).send(roleDetail);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Delete                                                                 
 */                                                                                      
const findByIdAndDelete = catchAsync(async (req, res) => {                               
  const roleDetail = await roleDetailService.findByIdAndDelete(req.body.id);           
  res.status(httpStatus.CREATED).send(roleDetail);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * findById                                                                              
 */                                                                                      
const findById = catchAsync(async (req, res) => {                                        
  const roleDetail = await roleDetailService.findById(req.params.id);                  
  res.status(httpStatus.CREATED).send(roleDetail);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * paginate                                                                              
 */                                                                                      
const paginate = catchAsync(async (req, res) => {                                        
  const filter = pick(req.query, ['name']);                                              
  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          
                                                                                         
  const result = await roleDetailService.paginate(filter, options);                     
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
