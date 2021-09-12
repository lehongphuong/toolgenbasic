import { Button, makeStyles, Paper } from "@material-ui/core";                   
import Grid from "@material-ui/core/Grid";                                       
import { ComboBoxField, TextField } from "../../../../components";               
import { reduxForm, Field } from "redux-form";                                   
import React, { useEffect } from "react";                                        
import { useHistory } from "react-router-dom";                                   
																				   
/**                                                                                
 * makeStyles                                                                      
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
 * UpdateFromNhatKyPhuong                                                      
 * @param {*} props                                                                
 * @returns                                                                        
 */                                                                                
const UpdateFormNhatKyPhuong = (props) => {                                    
  let history = useHistory();                                                      
  const classes = useStyles();                                                     
  const { handleSubmit, initialize, nhatkyphuong } = props;                  
																				   
  /**                                                                              
   * initialize                                                                    
   */                                                                              
  useEffect(() => {                                                                
    initialize(nhatkyphuong);                                                
  }, []);                                                                          
																				   
  /**                                                                              
   * handerBack                                                                    
   */                                                                              
  const handerBack = () => {                                                       
    history.goBack();                                                              
  };                                                                               
																				   
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
                className={classes.button} > H?y </Button>                         
              <Button variant="contained" type="submit" color="secondary">   
                Luu                                                                
              </Button>                                                            
            </Grid>                                                                
          </Grid>                                                                  
        </form>                                                                    
      </Paper>                                                                     
    </React.Fragment>                                                              
  );                                                                               
};                                                                                 
export default reduxForm({                                                         
  form: "UpdateFormNhatKyPhuong"                                             
})(UpdateFormNhatKyPhuong);                                                    
