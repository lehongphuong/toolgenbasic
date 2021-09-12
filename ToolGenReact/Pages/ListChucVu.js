import React from 'react';                                                
import { Header, ListChucVu, BoxSearch } from './components';   
																			
/**                                                                         
 * ChucVu                                                         
 * @param {*} props                                                         
 * @returns                                                                 
 */                                                                         
const ListChucVu = (props) => {                                   
  return (                                                                  
    <>                                                                      
      <Header />                                                            
      <BoxSearch />                                                         
      <ListChucVu />                                              
    </>                                                                     
  );                                                                        
};                                                                          
																			
ListChucVu.propTypes = {};                                        
																			
export default ListChucVu;                                        
