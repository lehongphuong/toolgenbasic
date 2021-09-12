import types from "./NhatKyPhuongTypes";                                                           
import axios from "axios";                                                                             
																										 
/**                                                                                                      
 * create NhatKyPhuong Request                                                                       
 * @param {*} form                                                                                       
 * @returns                                                                                              
 */                                                                                                      
export const createNhatKyPhuongRequest = (form) => {                                                 
  return async (dispatch) => {                                                                           
    // setLoadings true                                                                                  
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: true, });              
																										 
    try {                                                                                                
      const response = axios.post("nhatkyphuong", form);                                         
      const resData = await response;                                                                    
																										 
      if (resData.status) {                                                                              
        dispatch({                                                                                       
          type: types.CREATE_NHATKYPHUONG,                                                      
        });                                                                                              
      }                                                                                                  
      // setLoadings false                                                                               
      dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: true, });            
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * Get all NhatKyPhuong Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllNhatKyPhuongRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("nhatkyphuong");                                          
      const resData = await response.data;                                                               
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_NHATKYPHUONG,                                                       
        cars: resData.nhatkyphuongs,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * get NhatKyPhuong By Id                                                                            
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const getNhatKyPhuongByIdRequest = (id) => {                                                  
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: false, });             
																										 
    try {                                                                                                
      // call get NhatKyPhuong by id                                                                 
      const response = await axios.get(`nhatkyphuong/${id}`);                                      
																										 
      dispatch({ type: types.GET_BY_ID_NHATKYPHUONG, car: response.data.nhatkyphuong });  
																										 
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * update NhatKyPhuong Request                                                                       
 * @param {*} form                                                                                       
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const updateNhatKyPhuongRequest = (form, id) => {                                             
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: false, });             
																										 
    try {                                                                                                
      // call update NhatKyPhuong                                                                    
      const response = axios.put(`nhatkyphuong/${id}`, form);                                      
      const resData = await response;                                                                    
																										 
      if (resData.status) {                                                                              
        // update status when update                                                                     
        dispatch({                                                                                       
          type: types.UPDATE_NHATKYPHUONG,                                                      
        });                                                                                              
      }                                                                                                  
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * delete NhatKyPhuong Request                                                                       
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const deleteNhatKyPhuongRequest = (id) => async (dispatch) => {                               
  try {                                                                                                  
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: true, });              
																										 
    // call delete NhatKyPhuong                                                                      
    const response = axios.delete(`nhatkyphuong/${id}`);                                           
    const resData = await response;                                                                      
																										 
    if (resData) {                                                                                       
      // call load data after delete                                                                     
      dispatch(GetAllNhatKyPhuongRequest());                                                         
    }                                                                                                    
																										 
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: false, });             
  } catch (e) {                                                                                          
    console.error(e);                                                                                    
    dispatch({ type: types.SET_LOADING_NHATKYPHUONG, nhatkyphuong: false, });             
  }                                                                                                      
};                                                                                                       
