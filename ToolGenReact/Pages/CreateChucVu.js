import React from "react";                                                                                                          
import { useDispatch } from "react-redux";                                                                                          
import { useHistory } from "react-router-dom";                                                                                      
import { createChucVuRequest } from "../../../reducers/qly-chucvu/ChucVu/ChucVuAction";   
import CreateFormChucVu from "./components/CreateFormChucVu";                                                   
																																	  
/**                                                                                                                                   
 * CreateChucVu                                                                                                             
 * @param {*} props                                                                                                                   
 * @returns                                                                                                                           
 */                                                                                                                                   
const CreateChucVu = (props) => {                                                                                           
  const dispatch = useDispatch();                                                                                                     
  let history = useHistory();                                                                                                         
																																	  
  /**                                                                                                                                 
   * submit                                                                                                                           
   * @param {*} values                                                                                                                
   */                                                                                                                                 
  const submit = async (values) => {                                                                                                  
    try {                                                                                                                             
      // create data when click button add                                                                                            
      await dispatch(createChucVuRequest(values));                                                                          
      history.goBack();                                                                                                               
    } catch (error) {                                                                                                                 
      alert(error);                                                                                                                   
    }                                                                                                                                 
  };                                                                                                                                  
																																	  
  return (                                                                                                                            
    <>                                                                                                                                
      <h1>Thêm m?i chucvu</h1>                                                                                            
																																	  
      <CreateFormChucVu onSubmit={submit} />                                                                                
    </>                                                                                                                               
  );                                                                                                                                  
};                                                                                                                                    
																																	  
CreateChucVu.propTypes = {};                                                                                                
																																	  
export default CreateChucVu;                                                                                                
