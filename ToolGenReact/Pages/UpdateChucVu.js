import React, { useEffect } from "react";                                                                          
import { useDispatch, useSelector } from "react-redux";                                                            
import { useHistory } from "react-router-dom";                                                                     
import {                                                                                                             
  getChucVuByIdRequest,                                                                                    
  updateChucVuRequest,                                                                                     
} from "../../../reducers/qly-chucvu/ChucVu/ChucVuAction";                         
import UpdateFormChucVu from "./components/UpdateFormChucVu";                                  
																													 
/**                                                                                                                  
 * Update ChucVu                                                                                           
 * @param {*} props                                                                                                  
 * @returns                                                                                                          
 */                                                                                                                  
const UpdateChucVu = (props) => {                                                                          
  /**                                                                                                                
   * url id                                                                                                          
   */                                                                                                                
  var query = window.location.pathname.split("/");                                                                 
  var id = query[query.length - 1];                                                                                  
																													 
  const dispatch = useDispatch();                                                                                    
  const chucvu = useSelector((state) => state.chucvu.chucvu);                    
  const loading = useSelector((state) => state.chucvu.isLoading);                                        
  let history = useHistory();                                                                                        
																													 
  /**                                                                                                                
   * get by id                                                                                                       
   */                                                                                                                
  useEffect(() => {                                                                                                  
    const fetching = async () => {                                                                                   
      try {                                                                                                          
        await dispatch(getChucVuByIdRequest(id));                                                          
      } catch (error) {                                                                                              
        alert(error);                                                                                                
      }                                                                                                              
    };                                                                                                               
    fetching();                                                                                                      
  }, []);                                                                                                            
																													 
  /**                                                                                                                
   * submit                                                                                                          
   * @param {*} values                                                                                               
   */                                                                                                                
  const submit = async (values) => {                                                                                 
    try {                                                                                                            
      // update chucvu when click button submit                                                          
      await dispatch(updateChucVuRequest(values, id));                                                     
      history.goBack();                                                                                              
    } catch (error) {                                                                                                
      alert(error);                                                                                                  
    }                                                                                                                
  };                                                                                                                 
																													 
  return (                                                                                                           
    <>                                                                                                               
      <h1>C?p nh?p thông tin chucvu</h1>                                                                 
      {!loading && <UpdateFormChucVu onSubmit={submit} chucvu={chucvu} />}         
    </>                                                                                                              
  );                                                                                                                 
};                                                                                                                   
export default UpdateChucVu;                                                                               
