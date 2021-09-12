const express = require('express');                            
const { sinhvienControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(sinhvienControler.find)                              
  .post(sinhvienControler.create)                           
  .put(sinhvienControler.findByIdAndUpdate)                 
  .delete(sinhvienControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(sinhvienControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(sinhvienControler.findById);                         
                                                               
module.exports = router;                                       
