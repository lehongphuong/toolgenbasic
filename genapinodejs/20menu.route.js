const express = require('express');                            
const { menuControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(menuControler.find)                              
  .post(menuControler.create)                           
  .put(menuControler.findByIdAndUpdate)                 
  .delete(menuControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(menuControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(menuControler.findById);                         
                                                               
module.exports = router;                                       
