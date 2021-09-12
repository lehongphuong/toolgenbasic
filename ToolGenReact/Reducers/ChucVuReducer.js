import _ from "lodash";                                                                      
import types from "./ChucVuTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  chucvus: [],                                                                     
  chucvu: {}                                                                       
};                                                                                             
																							   
const ChucVuReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_CHUCVU:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.CREATE_CHUCVU:                                                   
      return {                                                                                 
        ...state,                                                                              
        isLoading: false,                                                                      
      };                                                                                       
																							   
    case types.GET_ALL_CHUCVU:                                                  
      return { ...state, chucvus: action.chucvus, isLoading: false };  
																							   
    case types.GET_BY_ID_CHUCVU:                                                
      return { ...state, chucvu: action.chucvu, isLoading: false };    
																							   
    case types.UPDATE_CHUCVU:                                                   
      return {                                                                                 
        ...state,                                                                              
        isLoading: false,                                                                      
      };                                                                                       
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default ChucVuReducer;                                                        
