import React from "react";                                                                                                          
import { useDispatch } from "react-redux";                                                                                          
import { useHistory } from "react-router-dom";                                                                                      
import { createNhatKyPhuongRequest } from "../../../reducers/qly-nhatkyphuong/NhatKyPhuong/NhatKyPhuongAction";   
import CreateFormNhatKyPhuong from "./components/CreateFormNhatKyPhuong";                                                   
																																	  
/**                                                                                                                                   
 * CreateNhatKyPhuong                                                                                                             
 * @param {*} props                                                                                                                   
 * @returns                                                                                                                           
 */                                                                                                                                   
const CreateNhatKyPhuong = (props) => {                                                                                           
  const dispatch = useDispatch();                                                                                                     
  let history = useHistory();                                                                                                         
																																	  
  /**                                                                                                                                 
   * submit                                                                                                                           
   * @param {*} values                                                                                                                
   */                                                                                                                                 
  const submit = async (values) => {                                                                                                  
    try {                                                                                                                             
      // create data when click button add                                                                                            
      await dispatch(createNhatKyPhuongRequest(values));                                                                          
      history.goBack();                                                                                                               
    } catch (error) {                                                                                                                 
      alert(error);                                                                                                                   
    }                                                                                                                                 
  };                                                                                                                                  
																																	  
  return (                                                                                                                            
    <>                                                                                                                                
      <h1>Thêm m?i nhatkyphuong</h1>                                                                                            
																																	  
      <CreateFormNhatKyPhuong onSubmit={submit} />                                                                                
    </>                                                                                                                               
  );                                                                                                                                  
};                                                                                                                                    
																																	  
CreateNhatKyPhuong.propTypes = {};                                                                                                
																																	  
export default CreateNhatKyPhuong;                                                                                                
