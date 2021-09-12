import React, { useEffect } from "react";                                                                                                               
import { makeStyles } from "@material-ui/core/styles";                                                                                                  
import Paper from "@material-ui/core/Paper";                                                                                                            
import Table from "@material-ui/core/Table";                                                                                                            
import TableBody from "@material-ui/core/TableBody";                                                                                                    
import TableCell from "@material-ui/core/TableCell";                                                                                                    
import TableContainer from "@material-ui/core/TableContainer";                                                                                          
import TableHead from "@material-ui/core/TableHead";                                                                                                    
import TablePagination from "@material-ui/core/TablePagination";                                                                                        
import TableRow from "@material-ui/core/TableRow";                                                                                                      
import { Delete, Edit } from "@material-ui/icons";                                                                                                      
import ModalDelete from "./ModalDelete";                                                                                                                
import { Link } from "react-router-dom";                                                                                                                
import { useDispatch, useSelector } from "react-redux";                                                                                                 
import { deleteNhatKyPhuongRequest, GetAllNhatKyPhuongRequest} from "../../../../reducers/qly-nhatkyphuong/NhatKyPhuong/NhatKyPhuongAction";    
import { get as _get } from "lodash";                                                                                                                   
																																						  
// define column of grid                                                                                                                                  
const columns = [                                                                                                                                         
  { id: "bienso", label: "Bi?n s?", minWidth: 120 },                                                                                                  
];                                                                                                                                                        
																																						  
// style of data grid                                                                                                                                     
const useStyles = makeStyles({                                                                                                                            
  root: {                                                                                                                                                 
    width: "100%",                                                                                                                                      
  },                                                                                                                                                      
  container: {                                                                                                                                            
    maxHeight: 440,                                                                                                                                       
  },                                                                                                                                                      
  button: {                                                                                                                                               
    marginRight: 3,                                                                                                                                       
  },                                                                                                                                                      
});                                                                                                                                                       
																																						  
/**                                                                                                                                                       
 * ListNhatKyPhuong                                                                                                                                   
 * @param {*} props                                                                                                                                       
 * @returns                                                                                                                                               
 */                                                                                                                                                       
export default function ListNhatKyPhuong(props) {                                                                                                     
  const classes = useStyles();                                                                                                                            
  const [page, setPage] = React.useState(0);                                                                                                              
  const [rowsPerPage, setRowsPerPage] = React.useState(10);                                                                                               
  const [openDelete, setOpenDelete] = React.useState(false);                                                                                              
																																						  
  const dispatch = useDispatch();                                                                                                                         
																																						  
  // listen data of grid                                                                                                                                  
  const rows = useSelector((state) => _get(state, "nhatkyphuong.nhatkyphuongs", []));                                                       
																																						  
  /**                                                                                                                                                     
   * handle Change Page                                                                                                                                   
   * @param {*} event                                                                                                                                     
   * @param {*} newPage                                                                                                                                   
   */                                                                                                                                                     
  const handleChangePage = (event, newPage) => {                                                                                                          
    setPage(newPage);                                                                                                                                     
  };                                                                                                                                                      
																																						  
  /**                                                                                                                                                     
   * handle Change Rows Per Page                                                                                                                          
   * @param {*} event                                                                                                                                     
   */                                                                                                                                                     
  const handleChangeRowsPerPage = (event) => {                                                                                                            
    setRowsPerPage(+event.target.value);                                                                                                                  
    setPage(0);                                                                                                                                           
  };                                                                                                                                                      
																																						  
  /**                                                                                                                                                     
   * Get NhatKyPhuong Request                                                                                                                         
   */                                                                                                                                                     
  useEffect(() => {                                                                                                                                       
    dispatch(GetAllNhatKyPhuongRequest());                                                                                                            
  }, []);                                                                                                                                                 
																																						  
  return (                                                                                                                                                
    <Paper className={classes.root}>                                                                                                                      
      <TableContainer className={classes.container}>                                                                                                      
        <Table stickyHeader aria-label="sticky table">                                                                                                  
          <TableHead>                                                                                                                                     
            <TableRow>                                                                                                                                    
              {columns.map((column) => (                                                                                                                  
                <TableCell                                                                                                                                
                  key={column.id}                                                                                                                         
                  align={column.align}                                                                                                                    
                  style={{ minWidth: column.minWidth }}                                                                                                   
                >                                                                                                                                         
                  {column.label}                                                                                                                          
                </TableCell>                                                                                                                              
              ))}                                                                                                                                         
              <TableCell>Thao Tác</TableCell>                                                                                                             
            </TableRow>                                                                                                                                   
          </TableHead>                                                                                                                                    
																																						  
          <TableBody>                                                                                                                                     
            {rows                                                                                                                                         
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)                                                                                
              .map((row) => {                                                                                                                             
                return (                                                                                                                                  
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>                                                                         
                    <TableCell>{row.bienSoNhatKyPhuong}</TableCell>                                                                                   
                    <TableCell>                                                                                                                           
                      <Link to={`/ql_nhatkyphuong/sua_thong_tin_nhatkyphuong/${row.id}`} className={classes.link}>                            
                        <Edit />                                                                                                                          
                      </Link>                                                                                                                             
                      <Delete                                                                                                                             
                        onClick={() => {                                                                                                                  
                          setOpenDelete(!openDelete);                                                                                                     
                          dispatch(deleteNhatKyPhuongRequest(row.id));                                                                                
                        }}                                                                                                                                
                      />                                                                                                                                  
                    </TableCell>                                                                                                                          
                  </TableRow>                                                                                                                             
                );                                                                                                                                        
              })}                                                                                                                                         
          </TableBody>                                                                                                                                    
        </Table>                                                                                                                                          
      </TableContainer>                                                                                                                                   
																																						  
      <TablePagination                                                                                                                                    
        rowsPerPageOptions={[10, 25, 100]}                                                                                                                
        component="div"                                                                                                                                 
        count={rows.length}                                                                                                                               
        rowsPerPage={rowsPerPage}                                                                                                                         
        page={page}                                                                                                                                       
        onChangePage={handleChangePage}                                                                                                                   
        onChangeRowsPerPage={handleChangeRowsPerPage}                                                                                                     
      />                                                                                                                                                  
      <ModalDelete open={openDelete} setOpenDelete={setOpenDelete} />                                                                                     
    </Paper>                                                                                                                                              
  );                                                                                                                                                      
}                                                                                                                                                         
