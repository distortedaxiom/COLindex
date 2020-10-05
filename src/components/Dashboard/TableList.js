import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function TableList(props) {

    const [propsData, setPropsData] = useState([])

    const classes = useStyles();

    const data = props.data.data

    console.log(data)

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell align="right">Living Wage</TableCell>
              <TableCell align="right">Minimum Wage</TableCell>
              <TableCell align="right">Poverty Wage</TableCell>
              <TableCell align="right">Required Income After Taxes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.state}>
                <TableCell component="th" scope="row">
                  {data.state}
                </TableCell>
                <TableCell align="right">{data.livingwage1a0c_avg}</TableCell>
                <TableCell align="right">{data.minimumwage1a0c_avg}</TableCell>
                <TableCell align="right">{data.povertywage1a0c_avg}</TableCell>
                <TableCell align="right">{data.reqincomeaftertaxes1a0c_avg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
