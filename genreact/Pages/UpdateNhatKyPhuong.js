import React, { useEffect } from "react";                                                                          
import { useDispatch, useSelector } from "react-redux";                                                            
import { useHistory } from "react-router-dom";                                                                     
import {                                                                                                             
  getNhatKyPhuongByIdRequest,                                                                                    
  updateNhatKyPhuongRequest,                                                                                     
} from "../../../reducers/qly-nhatkyphuong/NhatKyPhuong/NhatKyPhuongAction";                         
import UpdateFormNhatKyPhuong from "./components/UpdateFormNhatKyPhuong";                                  
																													 
/**                                                                                                                  
 * Update NhatKyPhuong                                                                                           
 * @param {*} props                                                                                                  
 * @returns                                                                                                          
 */                                                                                                                  
const UpdateNhatKyPhuong = (props) => {                                                                          
  /**                                                                                                                
   * url id                                                                                                          
   */                                                                                                                
  var query = window.location.pathname.split("/");                                                                 
  var id = query[query.length - 1];                                                                                  
																													 
  const dispatch = useDispatch();                                                                                    
  const nhatkyphuong = useSelector((state) => state.nhatkyphuong.nhatkyphuong);                    
  const loading = useSelector((state) => state.nhatkyphuong.isLoading);                                        
  let history = useHistory();                                                                                        
																													 
  /**                                                                                                                
   * get by id                                                                                                       
   */                                                                                                                
  useEffect(() => {                                                                                                  
    const fetching = async () => {                                                                                   
      try {                                                                                                          
        await dispatch(getNhatKyPhuongByIdRequest(id));                                                          
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
      // update nhatkyphuong when click button submit                                                          
      await dispatch(updateNhatKyPhuongRequest(values, id));                                                     
      history.goBack();                                                                                              
    } catch (error) {                                                                                                
      alert(error);                                                                                                  
    }                                                                                                                
  };                                                                                                                 
																													 
  return (                                                                                                           
    <>                                                                                                               
      <h1>C?p nh?p thông tin nhatkyphuong</h1>                                                                 
      {!loading && <UpdateFormNhatKyPhuong onSubmit={submit} nhatkyphuong={nhatkyphuong} />}         
    </>                                                                                                              
  );                                                                                                                 
};                                                                                                                   
export default UpdateNhatKyPhuong;                                                                               
