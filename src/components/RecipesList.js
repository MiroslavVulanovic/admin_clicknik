import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const nizObjekata = [
  {
    checked: false,
    id: 1,
    imeRecepta: 'recept za kolace',
    opisRecepta: 'posno',
    vrijeme: 30,
  },
  {
    checked: false,
    id: 2,
    imeRecepta: 'recept za zito',
    opisRecepta: 'posno',
    vrijeme: 10,
  },
  {
    checked: false,
    id: 3,
    imeRecepta: 'recept za kolace',
    opisRecepta: 'mrsno',
    vrijeme: 30,
  },
  {
    checked: true,
    id: 4,
    imeRecepta: 'recept za slavski kolac',
    opisRecepta: 'posno',
    vrijeme: 15,
  },
  {
    checked: false,
    id: 5,
    imeRecepta: 'recept za kolace 1',
    opisRecepta: 'posno',
    vrijeme: 20,
  },
  {
    checked: false,
    id: 6,
    imeRecepta: 'recept za kolace 2',
    opisRecepta: 'mrsno',
    vrijeme: 25,
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
})
export default function ProductsList() {
  const [check, setCheck] = useState(nizObjekata)
  const classes = useStyles()

  const checkAll = (e) => {
    let newCheck = [...check]
    newCheck.map((item) => (item.checked = e))
    setCheck(newCheck)
  }
  const checkOne = (e) => {
    let newCheck = [...check]
    newCheck[e - 1].checked = !newCheck[e - 1].checked
    setCheck(newCheck)
  }

  const setSelectionModel = (event) => {
    console.log('Changed', event);
    selectionModel.push(event);
  }

  const selectionModel = [];

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} 
    checkboxSelection 
    onSelectionModelChange={(newSelection) => {
      console.log('newSelection', newSelection);
    setSelectionModel(newSelection);
  }}
  selectionModel={selectionModel}/>
  </div>
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label='simple table'>
    //     <TableRow>
    //       <TableCell padding='checkbox'>
    //         <Checkbox
    //           onChange={(e) => checkAll(e.target.checked)}
    //           color='primary'
    //         />
    //       </TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Id</TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Naziv proizvoda</TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Opis proizvoda</TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Vrijeme</TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Obrisi</TableCell>
    //       <TableCell style={{ fontWeight: 'bold' }}>Uredi</TableCell>
    //     </TableRow>
    //     {check.map((item, i) => (
    //       <TableRow key={i}>
    //         <TableCell padding='checkbox'>
    //           <Checkbox
    //             color='default'
    //             //style={{ color: 'green' }}
    //             //indeterminate
    //             disabled={false}
    //             disableRipple={false}
    //             checked={item.checked}
    //             onChange={(e) => checkOne(item.id)}
    //           />
    //         </TableCell>
    //         <TableCell>{item.id}</TableCell>
    //         <TableCell>{item.imeRecepta}</TableCell>
    //         <TableCell>{item.opisRecepta}</TableCell>
    //         <TableCell>{item.vrijeme}</TableCell>
    //         <TableCell padding='checkbox'>
    //           <IconButton style={{ outline: 'none' }}>
    //             <DeleteIcon />
    //           </IconButton>
    //         </TableCell>
    //         <TableCell padding='checkbox' align='center'>
    //           <IconButton style={{ outline: 'none' }}>
    //             <EditIcon style={{ color: '' }} />
    //           </IconButton>
    //         </TableCell>
    //       </TableRow>
    //     ))}
    //   </Table>
    // </TableContainer>
  )
}
