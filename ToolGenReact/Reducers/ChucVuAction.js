import types from "./ChucVuTypes";                                                           
import axios from "axios";                                                                             
																										 
/**                                                                                                      
 * create ChucVu Request                                                                       
 * @param {*} form                                                                                       
 * @returns                                                                                              
 */                                                                                                      
export const createChucVuRequest = (form) => {                                                 
  return async (dispatch) => {                                                                           
    // setLoadings true                                                                                  
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: true, });              
																										 
    try {                                                                                                
      const response = axios.post("chucvu", form);                                         
      const resData = await response;                                                                    
																										 
      if (resData.status) {                                                                              
        dispatch({                                                                                       
          type: types.CREATE_CHUCVU,                                                      
        });                                                                                              
      }                                                                                                  
      // setLoadings false                                                                               
      dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: true, });            
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * Get all ChucVu Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllChucVuRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("chucvu");                                          
      const resData = await response.data;                                                               
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_CHUCVU,                                                       
        cars: resData.chucvus,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * get ChucVu By Id                                                                            
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const getChucVuByIdRequest = (id) => {                                                  
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: false, });             
																										 
    try {                                                                                                
      // call get ChucVu by id                                                                 
      const response = await axios.get(`chucvu/${id}`);                                      
																										 
      dispatch({ type: types.GET_BY_ID_CHUCVU, car: response.data.chucvu });  
																										 
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * update ChucVu Request                                                                       
 * @param {*} form                                                                                       
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const updateChucVuRequest = (form, id) => {                                             
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: false, });             
																										 
    try {                                                                                                
      // call update ChucVu                                                                    
      const response = axios.put(`chucvu/${id}`, form);                                      
      const resData = await response;                                                                    
																										 
      if (resData.status) {                                                                              
        // update status when update                                                                     
        dispatch({                                                                                       
          type: types.UPDATE_CHUCVU,                                                      
        });                                                                                              
      }                                                                                                  
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 
/**                                                                                                      
 * delete ChucVu Request                                                                       
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const deleteChucVuRequest = (id) => async (dispatch) => {                               
  try {                                                                                                  
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: true, });              
																										 
    // call delete ChucVu                                                                      
    const response = axios.delete(`chucvu/${id}`);                                           
    const resData = await response;                                                                      
																										 
    if (resData) {                                                                                       
      // call load data after delete                                                                     
      dispatch(GetAllChucVuRequest());                                                         
    }                                                                                                    
																										 
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: false, });             
  } catch (e) {                                                                                          
    console.error(e);                                                                                    
    dispatch({ type: types.SET_LOADING_CHUCVU, chucvu: false, });             
  }                                                                                                      
};                                                                                                       
