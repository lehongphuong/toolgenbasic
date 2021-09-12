import _ from "lodash";                                                                      
import types from "./NhatKyPhuongTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  nhatkyphuongs: [],                                                                     
  nhatkyphuong: {}                                                                       
};                                                                                             
																							   
const NhatKyPhuongReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_NHATKYPHUONG:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.CREATE_NHATKYPHUONG:                                                   
      return {                                                                                 
        ...state,                                                                              
        isLoading: false,                                                                      
      };                                                                                       
																							   
    case types.GET_ALL_NHATKYPHUONG:                                                  
      return { ...state, nhatkyphuongs: action.nhatkyphuongs, isLoading: false };  
																							   
    case types.GET_BY_ID_NHATKYPHUONG:                                                
      return { ...state, nhatkyphuong: action.nhatkyphuong, isLoading: false };    
																							   
    case types.UPDATE_NHATKYPHUONG:                                                   
      return {                                                                                 
        ...state,                                                                              
        isLoading: false,                                                                      
      };                                                                                       
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default NhatKyPhuongReducer;                                                        
