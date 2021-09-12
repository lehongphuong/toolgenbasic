import { Button, makeStyles, Paper } from "@material-ui/core";                                                         
import Grid from "@material-ui/core/Grid";                                                                             
import { ComboBoxField, TextField } from "../../../../components";                                                     
import { reduxForm, Field } from "redux-form";                                                                         
import { useHistory } from "react-router-dom";                                                                         
import React, { useEffect } from "react";                                                                              
import { useDispatch, useSelector } from "react-redux";                                                                
import { get as _get } from "lodash";                                                                                  
																														 
/**                                                                                                                      
 * useStyles                                                                                                             
 */                                                                                                                      
const useStyles = makeStyles((theme) => ({                                                                               
  button: {                                                                                                              
    marginRight: 10,                                                                                                     
  },                                                                                                                     
  link: {                                                                                                                
    textDecoration: "none",                                                                                            
  },                                                                                                                     
  form: {                                                                                                                
    marginLeft: 20,                                                                                                      
  },                                                                                                                     
}));                                                                                                                     
																														 
/**                                                                                                                      
 * CreateFormNhatKyPhuong                                                                                                          
 * @param {*} props                                                                                                      
 * @returns                                                                                                              
 */                                                                                                                      
const CreateFormNhatKyPhuong = (props) => {                                                                                        
  const { handleSubmit } = props;                                                                                        
  const classes = useStyles();                                                                                           
  let history = useHistory();                                                                                            
																														 
  const dispatch = useDispatch();                                                                                        
																														 
  // listen data loai nhatkyphuong of grid                                                                         
  const loaiNhatKyPhuongs = useSelector((state) => _get(state, "nhatkyphuong.loaiNhatKyPhuongs", []));   
  const loaiNhienLieus = useSelector((state) => _get(state, "nhatkyphuong.loaiNLs", []));                        
  console.log(loaiNhienLieus);                                                                                           
																														 
  /**                                                                                                                    
   * handerBack                                                                                                          
   */                                                                                                                    
  const handerBack = () => {                                                                                             
    history.goBack();                                                                                                    
  };                                                                                                                     
																														 
  /**                                                                                                                    
   * Get NhatKyPhuong Request                                                                                        
   */                                                                                                                    
  useEffect(() => {                                                                                                      
    dispatch(getLoaiNhatKyPhuongRequest());                                                                          
    dispatch(getLoaiNhienLieuRequest());                                                                                 
  }, []);                                                                                                                
																														 
  return (                                                                                                               
    <React.Fragment>                                                                                                     
      <Paper>                                                                                                            
        <form onSubmit={handleSubmit} className={classes.form}>                                                          
          <Grid container spacing={3}>                                                                                   
            <Grid item xs={12} sm={6}>                                                                                   
              <Field                                                                                                     
                variant="outlined"                                                                                     
                margin="normal"                                                                                        
                required                                                                                                 
                fullWidth                                                                                                
                id="bienSoNhatKyPhuong"                                                                            
                label="Bi?n S? nhatkyphuong"                                                                     
                name="bienSoNhatKyPhuong"                                                                          
                autoComplete="Bi?n S? NhatKyPhuong"                                                                
                autoFocus                                                                                                
                component={TextField}                                                                                    
              />                                                                                                         
            </Grid>                                                                                                      
																														 
            <Grid item xs={12} sm={6}>                                                                                   
              <Button                                                                                                    
                variant="contained"                                                                                    
                color="primary"                                                                                        
                onClick={handerBack}                                                                                     
                className={classes.button}>H?y</Button>                                                                  
              <Button variant="contained" type="submit" color="secondary"> Luu </Button>                           
            </Grid>                                                                                                      
          </Grid>                                                                                                        
        </form>                                                                                                          
      </Paper>                                                                                                           
    </React.Fragment>                                                                                                    
  );                                                                                                                     
};                                                                                                                       
export default reduxForm({                                                                                               
  form: "CreateFormNhatKyPhuong"                                                                                   
})(CreateFormNhatKyPhuong);                                                                                          
