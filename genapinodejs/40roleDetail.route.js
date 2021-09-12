const express = require('express');                            
const { roleDetailControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(roleDetailControler.find)                              
  .post(roleDetailControler.create)                           
  .put(roleDetailControler.findByIdAndUpdate)                 
  .delete(roleDetailControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(roleDetailControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(roleDetailControler.findById);                         
                                                               
module.exports = router;                                       
