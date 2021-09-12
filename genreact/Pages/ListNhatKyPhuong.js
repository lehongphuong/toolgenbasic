import React from 'react';                                                
import { Header, ListNhatKyPhuong, BoxSearch } from './components';   
																			
/**                                                                         
 * NhatKyPhuong                                                         
 * @param {*} props                                                         
 * @returns                                                                 
 */                                                                         
const ListNhatKyPhuong = (props) => {                                   
  return (                                                                  
    <>                                                                      
      <Header />                                                            
      <BoxSearch />                                                         
      <ListNhatKyPhuong />                                              
    </>                                                                     
  );                                                                        
};                                                                          
																			
ListNhatKyPhuong.propTypes = {};                                        
																			
export default ListNhatKyPhuong;                                        
