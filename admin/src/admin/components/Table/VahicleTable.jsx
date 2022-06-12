import React, { useState } from "react";
import "./Table.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditVahicle from "../EditVahicle/EditVahicle";
import axios from "../../../axiosInstance";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const VahicleTable = ({ headings, data, setVahicles }) => {
  const [editVahicle, setEditVahicle] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const getVahicles = async () => {
    const res = await axios.get("/vehicle", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("adminToken")
        )}`,
      },
    });
    setVahicles(res.data.data);
  };
  const handleDelete = async (id) => {
    setDeleting(id);
    let res = await axios({
      method: "delete",
      url: "/vehicle/" + id,
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("adminToken")
        )}`,
      },
    });
    getVahicles();
    setDeleting(false);
  };
  return (
    <TableContainer component={Paper}>
      {editVahicle && (
        <EditVahicle
          onClose={() => setEditVahicle(false)}
          data={editVahicle}
          setVahicles={setVahicles}
        />
      )}
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headings.map((heading) => (
              <StyledTableCell align="center">{heading}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.isAvailable ? "Yes" : "No"}
              </StyledTableCell>
              <StyledTableCell align="center">
                <EditIcon
                  className="cst_edit_icon"
                  onClick={() => setEditVahicle(row)}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                {deleting === row.id ? (
                  <span className="tble_deleting_text">deleting...</span>
                ) : (
                  <DeleteIcon
                    className="cst_delete_icon"
                    fontSize="large"
                    onClick={() => handleDelete(row.id)}
                  />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default VahicleTable;
