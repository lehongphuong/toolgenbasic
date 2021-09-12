const express = require('express');                            
const { accountControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(accountControler.find)                              
  .post(accountControler.create)                           
  .put(accountControler.findByIdAndUpdate)                 
  .delete(accountControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(accountControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(accountControler.findById);                         
                                                               
module.exports = router;                                       
