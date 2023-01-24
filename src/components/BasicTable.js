import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function BasicTable (props) {
     console.log(props.data);
    return (
        <div>
        {
            props.data.length>0 ?(<TableContainer >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {props.data && Object.keys(props.data[0]).map((item, index) => (
                                <TableCell key={index}>{item}</TableCell>
    
                            ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                           props.data && props.data.map((object, i) => (
                                <TableRow>
                                    {Object.values(object).map((item, index) => (
                                        <TableCell key={index}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>):""
        }
    </div>
       
    );
}


export default BasicTable
