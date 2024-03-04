import * as React from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

function createData(name, tot, ava, taken, remaining) {
  return { name, tot, ava, taken, remaining };
}

const rows = [
  createData('BasketBall', 15, 6, 2, 4),
  createData('FootBall', 23, 9, 3, 4),
  createData('Cricket Bat', 26, 16, 2, 6),
  createData('Cricket Ball', 35, 3, 6, 4),
  createData('VollyBall', 35, 16, 4, 3),
];

export default function BasicTable() {
  const navigate = useNavigate();
  return (
    <>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Equipment Name</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Taken</TableCell>
            <TableCell align="right">Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tot}</TableCell>
              <TableCell align="right">{row.ava}</TableCell>
              <TableCell align="right">{row.taken}</TableCell>
              <TableCell align="right">{row.remaining}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
    <Button variant="contained"   onClick={() => navigate("/scannerform")}>Borrow</Button>
    <Button variant="contained"   onClick={() => navigate("/")}>Return</Button>
    
    </div>
    </>
  );
}
