import React from 'react'
import "./Table.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#5eb432",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
const DiscountTable = ({headings,discountData}) => {
  return (
   <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>  
            {headings.map((heading) => (
              <StyledTableCell align="center">{heading}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            
          {discountData?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">
                {row?.userRole}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.type}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.discount}
              </StyledTableCell>
              
              
              <StyledTableCell align="center">
              {
                  <Button
                  //onClick={() => ApproveBooking(row.id,row?.bookingDate,row?.endDate, row?.firstName,row?.lastName)}
                  variant="outlined" color="success">
                  Update
                </Button>
                
                  }
              </StyledTableCell>
              {/* <StyledTableCell align="center">
              
                {deleting === row.userId ? (
                  <span className="tble_deleting_text">deleting...</span>
                ) : (
                  <Button
                  onClick={() => UpdatingBooking(row.id)}
                  variant="outlined" color="error">
                  Reject
                </Button>
                )}
              </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  )
}

export default DiscountTable