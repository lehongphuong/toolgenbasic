const express = require('express');                            
const { lopControler } = require('../../controllers'); 
const auth = require('../../middlewares/auth');                
                                                               
const router = express.Router();                               
                                                               
router                                                         
  .route('/')                                                  
  .get(lopControler.find)                              
  .post(lopControler.create)                           
  .put(lopControler.findByIdAndUpdate)                 
  .delete(lopControler.findByIdAndDelete);             
                                                               
router                                                         
  .route('/paginate')                                          
  .get(lopControler.paginate);                         
                                                               
router                                                         
  .route('/:id')                                               
  .get(lopControler.findById);                         
                                                               
module.exports = router;                                       
