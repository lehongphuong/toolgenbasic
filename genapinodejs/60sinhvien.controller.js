const httpStatus = require('http-status');                                               
const pick = require('../utils/pick');                                                   
const ApiError = require('../utils/ApiError');                                           
const catchAsync = require('../utils/catchAsync');                                       
const { sinhvienService } = require('../services');                                   
                                                                                         
/**                                                                                      
 * find                                                                                  
 */                                                                                      
const find = catchAsync(async (req, res) => {                                            
  const result = await sinhvienService.find();                                        
  res.send(result);                                                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * create                                                                                
 */                                                                                      
const create = catchAsync(async (req, res) => {                                          
  const sinhvien = await sinhvienService.create(req.body);                         
  res.status(httpStatus.CREATED).send(sinhvien);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Update                                                                 
 */                                                                                      
const findByIdAndUpdate = catchAsync(async (req, res) => {                               
  const sinhvien = await sinhvienService.findByIdAndUpdate(req.body.id, req.body); 
  res.status(httpStatus.CREATED).send(sinhvien);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * find By Id And Delete                                                                 
 */                                                                                      
const findByIdAndDelete = catchAsync(async (req, res) => {                               
  const sinhvien = await sinhvienService.findByIdAndDelete(req.body.id);           
  res.status(httpStatus.CREATED).send(sinhvien);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * findById                                                                              
 */                                                                                      
const findById = catchAsync(async (req, res) => {                                        
  const sinhvien = await sinhvienService.findById(req.params.id);                  
  res.status(httpStatus.CREATED).send(sinhvien);                                      
});                                                                                      
                                                                                         
/**                                                                                      
 * paginate                                                                              
 */                                                                                      
const paginate = catchAsync(async (req, res) => {                                        
  const filter = pick(req.query, ['name']);                                              
  const options = pick(req.query, ['sortBy', 'limit', 'page']);                          
                                                                                         
  const result = await sinhvienService.paginate(filter, options);                     
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
