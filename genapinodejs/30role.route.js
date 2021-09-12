const express = require('express');                            
const { roleControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(roleControler.find)                              
  .post(roleControler.create)                           
  .put(roleControler.findByIdAndUpdate)                 
  .delete(roleControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(roleControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(roleControler.findById);                         
                                                               
module.exports = router;                                       
